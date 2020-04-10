import styled from 'styled-components/native';
import React, {useState, useEffect} from 'react';
import {Modal, ScrollView} from 'react-native';
import CatService from '../../services/CatService';
import TacoService from '../../services/TacoService';
import DogService from '../../services/DogService';
import CoronaService from '../../services/CoronaService';
import {CatResponse} from '../../services/responses/CatResponse';
import {TacoResponse} from '../../services/responses/TacoResponse';
import {DogResponse} from '../../services/responses/DogResponse';
import {CoronaResponse} from '../../services/responses/CoronaResponse';
import {Constants} from '../../../Constants';

interface ModalWin {
  show: boolean;
  setShowModal: (value: boolean) => void;
}

const services = {
  cat: new CatService(),
  taco: new TacoService(),
  dog: new DogService(),
  corona: new CoronaService(),
};

export const ModalWin: React.FC<ModalWin> = ({show, setShowModal}) => {
  const [number, setNumber] = useState(1);
  const [getPerformed, setGetPerformed] = useState(false);

  const [request, setRequest] = useState({
    hasError: false,
    success: false,
    message: '',
  });

  const renderCatResponse = () => {
    let carResponse: CatResponse;

    services.cat.get().then((res: any) => {
      carResponse = res.data;
      setRequest({...request, success: true, message: carResponse.text});
    });
  };

  const renderTacoResponse = () => {
    let tacoResponse: TacoResponse;

    services.taco.get().then((res: any) => {
      tacoResponse = res.data;
      setRequest({
        ...request,
        success: true,
        message: tacoResponse.base_layer.recipe,
      });
    });
  };

  const renderDogResponse = () => {
    let dogResponse: DogResponse;

    services.dog.get().then((res: any) => {
      dogResponse = res.data;
      setRequest({
        ...request,
        success: true,
        message: dogResponse.message,
      });
    });
  };

  const renderCoronaResponse = () => {
    let coronaResponse: CoronaResponse;

    services.corona.get().then((res: any) => {
      coronaResponse = res.data;
      setRequest({
        ...request,
        success: true,
        message: `Info sobre o Coronavirus no Brasil - Casos confirmados: ${coronaResponse.location.latest.confirmed} - Mortes: ${coronaResponse.location.latest.deaths}`,
      });
    });
  };

  const getContent = () => {
    if (show && !request.success) {
      if (!getPerformed) {
        number === 4 ? setNumber(1) : setNumber(number + 1);
        setGetPerformed(true);
      }
      switch (number) {
        case 1:
          return renderCatResponse();
        case 2:
          return renderTacoResponse();
        case 3:
          return renderDogResponse();
        case 4:
          return renderCoronaResponse();
      }
    }
  };

  const renderContent = () => {
    if (number === 1) {
      return (
        <ModalView>
          <ScrollView>
            <ModalText> 🐱 {request.message}</ModalText>
          </ScrollView>
        </ModalView>
      );
    } else if (number === 2) {
      return (
        <ModalView>
          <ScrollView>
            <ModalText> 🌮 {request.message}</ModalText>
          </ScrollView>
        </ModalView>
      );
    } else if (number === 3) {
      return (
        <ModalView>
          <ScrollView>
            <ModalText> 🐶 Image of a cute dog 💕 </ModalText>
            <ModalImage source={{uri: request.message}} resizeMode="stretch" />
          </ScrollView>
        </ModalView>
      );
    } else {
      return (
        <ModalView>
          <ModalText> ⚠️ {request.message}</ModalText>
        </ModalView>
      );
    }
  };

  return (
    <Modal visible={show} transparent={true}>
      <Background
        onPressIn={() => {
          setShowModal(false);
          setRequest({...request, success: false});
          setGetPerformed(false);
        }}>
        {show && getContent()}
        <Container>{request.success && renderContent()}</Container>
      </Background>
    </Modal>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 60px;
  padding: 20px;
  border-radius: 10px;
  border: 5px solid black;
`;

const Background = styled.TouchableOpacity`
  width: ${Constants.MAX_WIDTH};
  height: ${Constants.MAX_HEIGHT};
  background-color: #000000aa;
`;

const ModalView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ModalText = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;

const ModalImage = styled.Image`
  margin-top: 10px;
  width: 200px;
  height: 200px;
`;

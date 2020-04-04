import React, {useRef} from 'react';
import {Button} from 'react-native';
import styled from 'styled-components/native';
import {Constants} from './Constants';
import {ReelSet} from './src/components/ReelSet';

const App = () => {
  const reel = useRef();
  return (
    <>
      <Container>
        <PlayContainer>
          <ReelSet ref={reel} />
        </PlayContainer>
        <ButtonContainer>
          <Button
            title="Spin"
            onPress={() => {
              reel.current.spin();
            }}
          />
        </ButtonContainer>
      </Container>
    </>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ButtonContainer = styled.View`
  height: 60;
  width: ${Constants.MAX_WIDTH};
  background-color: black;
`;

const PlayContainer = styled.SafeAreaView`
  height: ${Constants.MAX_HEIGHT - 60};
  width: ${Constants.MAX_WIDTH};
  background-color: black;
`;

export default App;

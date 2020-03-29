import React from 'react';
import {Button} from 'react-native';
import styled from 'styled-components/native';
import {Constants} from './Constants';

const Container = styled.View`
  flex: 1;
`;

const ButtonContainer = styled.View`
  height: 60;
  width: ${Constants.MAX_WIDTH};
  background-color: purple;
`;

const PlayContainer = styled.View`
  height: ${Constants.MAX_HEIGHT - 60};
  width: ${Constants.MAX_WIDTH};
  background-color: blue;
`;

const App = () => {
  return (
    <>
      <Container>
        <PlayContainer />
        <ButtonContainer>
          <Button title="Spin" onPress={() => {}} />
        </ButtonContainer>
      </Container>
    </>
  );
};

export default App;

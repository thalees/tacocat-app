import styled from 'styled-components/native';
import React, {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Constants} from '../../../Constants';
import {images} from '../../assets/img';

interface SpinButtonProps {
  inactive: boolean;
  text: string;
  onPress: () => void;
}

export const SpinButton: React.FC<SpinButtonProps> = ({
  inactive,
  text,
  onPress,
}) => {
  const [status, setStatus] = useState('active');

  const renderContent = () => {
    if (text) {
      return <ButtonText>{text}</ButtonText>;
    }
  };

  const handlePressIn = () => {
    if (inactive) {
      return;
    }

    setStatus('pushed');

    onPress && onPress();
  };

  const handlePressOut = () => {
    if (inactive) {
      return;
    }

    setStatus('active');
  };

  let state = inactive ? 'inactive' : status;
  const content = renderContent();

  return (
    <TouchableWithoutFeedback
      onPressIn={() => handlePressIn()}
      onPressOut={() => handlePressOut()}>
      <Container>
        {/* images[state] */}
        <ButtonImage source={images[state]} resizeMode="stretch" />
        {content}
      </Container>
    </TouchableWithoutFeedback>
  );
};

const Container = styled.View`
  position: absolute;
  top: ${Constants.XR * 10};
  right: ${Constants.XR * 229};
  width: ${Constants.XR * 138};
  height: ${Constants.XR * 10};
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #f7fcfd;
  font-size: ${Constants.XR * 24};
  align-content: center;
  justify-content: center;
`;

const ButtonImage = styled.Image`
  position: absolute;
  width: ${Constants.XR * 138};
  height: ${Constants.XR * 40};
`;

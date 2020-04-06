import styled from 'styled-components/native';
import React, {useState, forwardRef, useImperativeHandle, useRef} from 'react';
import {images} from '../../assets/img';
import FastImage from 'react-native-fast-image';
import {Animated} from 'react-native';

interface SymbolProps {
  symbol: string;
  width: number;
  height: number;
  key: number;
  index: number;
}

const getSymbol = (symbol: string) => {
  switch (symbol) {
    case 'A':
      return images.blue;
    case 'S':
      return images.black;
    case 'D':
      return images.green;
  }
};

export const Symbol = forwardRef((symbolProps: SymbolProps, ref) => {
  const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);
  const symbolRef = useRef();

  const [active, setActive] = useState(true);
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));
  const [imgPath, setImgPath] = useState(getSymbol(symbolProps.symbol));

  const symbolAnimation = [
    {
      scale: animatedValue.interpolate({
        inputRange: [0, 0.25, 0.5, 1],
        outputRange: [1, 1.25, 0.75, 1],
      }),
    },
    {
      rotate: animatedValue.interpolate({
        inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        outputRange: [
          '0deg',
          '15deg',
          '0deg',
          '-15deg',
          '0deg',
          '15deg',
          '0deg',
          '-15deg',
          '0deg',
          '15deg',
          '0deg',
        ],
      }),
    },
  ];

  useImperativeHandle(ref, () => ({
    setActive(state: boolean) {
      setActive(state);
    },
    shake() {
      animatedValue.setValue(0);
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
      }).start();
    },
  }));

  return (
    <Container
      width={symbolProps.width}
      height={symbolProps.height}
      ref={symbolRef}>
      <AnimatedFastImage
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: symbolProps.width * 0.8,
          height: symbolProps.height * 0.7,
          opacity: active ? 1 : 0.3,
          transform: symbolAnimation,
        }}
        source={imgPath}
        resizeMode={FastImage.resizeMode.contain}
      />
    </Container>
  );
});

const Container = styled.View<{width: number; height: number}>`
  padding: 5px;
  flex: 1;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

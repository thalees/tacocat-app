import styled from 'styled-components/native';
import React, {useState} from 'react';
import {images} from '../../assets/img';
import FastImage from 'react-native-fast-image';

interface SymbolProps {
  symbol: string;
  width: number;
  height: number;
  key: number;
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

export const Symbol: React.FC<SymbolProps> = ({key, symbol, width, height}) => {
  const [imgPath, setImgPath] = useState(getSymbol(symbol));

  return (
    <Container width={width} height={height}>
      <FastImage
        style={{
          width: width,
          height: height,
        }}
        source={imgPath}
        resizeMode={FastImage.resizeMode.contain}
      />
    </Container>
  );
};

const Container = styled.View<{width: number; height: number}>`
  padding: 5px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

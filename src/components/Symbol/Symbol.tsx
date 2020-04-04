import styled from 'styled-components/native';
import React, {useState} from 'react';
import {images} from '../../assets/img';

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
    <Container width={width} height={height} removeClippedSubviews={true}>
      <SymbolImage
        width={width}
        key={key}
        height={height}
        resizeMode="contain"
        source={imgPath}
      />
    </Container>
  );
};

const Container = styled.View<{width: number; height: number}>`
  padding: 5px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const SymbolImage = styled.Image<{width: number; height: number}>`
  width: ${(props) => props.width - 20};
  height: ${(props) => props.height - 20};
`;

import styled from 'styled-components/native';
import React from 'react';
import {images} from '../../assets/img';

interface SymbolProps {
  symbol: string;
  width: number;
  height: number;
}

export const Symbol: React.FC<SymbolProps> = ({symbol, width, height}) => {
  const imgPath = images.taco;
  return (
    <Container width={width} height={height}>
      <SymbolImage
        width={width}
        height={height}
        resizeMode="contain"
        source={imgPath}
      />
    </Container>
  );
};

const Container = styled.View<{width: number; height: number}>`
  background-color: red;
  padding: 5px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const SymbolImage = styled.Image<{width: number; height: number}>`
  width: ${(props) => props.width - 20};
  height: ${(props) => props.height - 20};
`;

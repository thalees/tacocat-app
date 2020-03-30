import styled from 'styled-components/native';
import React, {useState} from 'react';
import {Animated} from 'react-native';
import {Constants} from '../../../Constants';
import {Symbol} from '../Symbol';

interface ReelProps {
  width: number;
  height: number;
}

export const Reel: React.FC<ReelProps> = ({width, height}) => {
  let currentScrollPosition = 0;
  const value = 'AASGFJSLASSDDSASDSASDDSASD';

  const [symbols, setSymbols] = useState({
    reelSymbols: value.repeat(Constants.REELS_REPEAT).split(''),
    height: height / Constants.SYMBOLS,
  });

  const [scrollPosition, setScrollPosition] = useState(
    new Animated.Value(currentScrollPosition),
  );

  const scrollByOffset = (offset: number) => {
    currentScrollPosition =
      currentScrollPosition + (-1 * symbols.height + offset);
    Animated.timing(scrollPosition, {
      toValue: currentScrollPosition,
      duration: 750,
      useNativeDriver: true,
    }).start(() => {});
  };

  return (
    <Container width={width} height={height}>
      <Animated.View
        style={{
          width: width,
          height: value.length * symbols.height,
          transform: [
            {
              translateY: scrollPosition,
            },
          ],
        }}>
        {symbols.reelSymbols.map((element, index) => {
          return (
            <Symbol
              symbol={element}
              key={index}
              index={index}
              width={width}
              height={symbols.height}
            />
          );
        })}
      </Animated.View>
    </Container>
  );
};

const Container = styled.View<{width: number; height: number}>`
  background-color: pink;
  overflow: hidden;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

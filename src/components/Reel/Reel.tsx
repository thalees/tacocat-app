import styled from 'styled-components/native';
import React, {useState, forwardRef, useImperativeHandle, useRef} from 'react';
import {Animated, Easing} from 'react-native';
import {Constants} from '../../../Constants';
import {Symbol} from '../Symbol';

interface ReelProps {
  width: number;
  height: number;
  index: number;
}

export const Reel = forwardRef((reelProps: ReelProps, ref) => {
  const reel = useRef();
  const symbolsStrings = 'SDAASDADASSDSDASDASDAASD';

  const [symbols, setSymbols] = useState({
    reelSymbols: symbolsStrings.repeat(Constants.REELS_REPEAT).split(''),
    height: reelProps.height / Constants.SYMBOLS,
  });

  let position = symbols.reelSymbols.length - Constants.SYMBOLS;
  let currentScrollPosition = position * symbols.height * -1;

  const [scrollPosition, setScrollPosition] = useState(
    new Animated.Value(currentScrollPosition),
  );
  useImperativeHandle(ref, () => ({
    scrollByOffset(offset: number) {
      currentScrollPosition = currentScrollPosition + symbols.height * offset;
      position = position - offset;

      Animated.timing(scrollPosition, {
        toValue: currentScrollPosition,
        duration: 750 + reelProps.index * 250,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.exp),
      }).start(() => {
        position =
          (Constants.REELS - 2) * symbolsStrings.length +
          (position % symbolsStrings.length);
        currentScrollPosition = position * symbols.height * -1;
        scrollPosition.setValue(currentScrollPosition);
      });
    },
    getSymbols() {
      return symbolsStrings;
    },
  }));

  return (
    <Container width={reelProps.width} height={reelProps.height} ref={reel}>
      <Animated.View
        style={{
          width: reelProps.width,
          height: symbols.reelSymbols.length * symbols.height,
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
              width={reelProps.width}
              height={symbols.height}
            />
          );
        })}
      </Animated.View>
    </Container>
  );
});

const Container = styled.View<{width: number; height: number}>`
  overflow: hidden;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

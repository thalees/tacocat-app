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
  const symbolRefs = useRef([]);
  const symbolsStrings = Constants.REEL_SYMBOLS[reelProps.index];

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
    scrollByOffset(offset: number, callback) {
      for (let i = 0; i < Constants.SYMBOLS; i++) {
        symbolRefs.current[position + i].setActive(true);
      }

      currentScrollPosition = currentScrollPosition + symbols.height * offset;
      position = position - offset;

      Animated.timing(scrollPosition, {
        toValue: currentScrollPosition,
        duration: 750 + reelProps.index * 250,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.exp),
      }).start(() => {
        position =
          (Constants.REELS_REPEAT - 2) * symbolsStrings.length +
          (position % symbolsStrings.length);

        let results = [];
        for (let i = 0; i < Constants.SYMBOLS; i++) {
          symbolRefs.current[position + i].setActive(false);
          results.push(symbols.reelSymbols[position + i]);
        }

        currentScrollPosition = position * symbols.height * -1;
        scrollPosition.setValue(currentScrollPosition);
        callback(reelProps.index, results);
      });
    },
    getSymbols() {
      return symbolsStrings;
    },
    highlightAtIndex(index: number, highlight: boolean) {
      symbolRefs.current[position + index].setActive(highlight);
    },
    shakeAtIndex(index: number) {
      symbolRefs.current[position + index].shake();
    },
  }));

  return (
    <Container width={reelProps.width} height={reelProps.height}>
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
        {symbols.reelSymbols.map((element, idx) => {
          return (
            <Symbol
              symbol={element}
              key={idx}
              index={idx}
              width={reelProps.width}
              height={symbols.height}
              ref={(symbolRef) => {
                symbolRefs.current[idx] = symbolRef;
              }}
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
  height: ${(props) => props.height - 15};
  background-color: white;
  margin: 1%;
  border: 5px solid black;
  border-radius: 10px;
`;

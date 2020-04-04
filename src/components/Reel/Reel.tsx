import styled from 'styled-components/native';
import React, {useState, forwardRef, useImperativeHandle, useRef} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import {Constants} from '../../../Constants';
import {Symbol} from '../Symbol';

interface ReelProps {
  width: number;
  height: number;
  index: number;
}

export const Reel = forwardRef((reelProps: ReelProps, ref) => {
  const reel = useRef();
  let currentScrollPosition = 0;
  const value = 'AASGFJSLASSDDSASDSASDDSASD';
  const [symbols, setSymbols] = useState({
    reelSymbols: value.repeat(Constants.REELS_REPEAT).split(''),
    height: reelProps.height / Constants.SYMBOLS,
  });

  const [scrollPosition, setScrollPosition] = useState(
    new Animated.Value(currentScrollPosition),
  );

  useImperativeHandle(ref, () => ({
    scrollByOffset(offset: number) {
      currentScrollPosition =
        currentScrollPosition + -1 * symbols.height * offset;
      Animated.timing(scrollPosition, {
        toValue: currentScrollPosition,
        duration: 750,
        useNativeDriver: true,
      }).start(() => {});
    },
    getSymbols() {
      return value;
    },
  }));

  return (
    <View
      style={(styles.reel, {width: reelProps.width, height: reelProps.height})}
      width={reelProps.width}
      height={reelProps.height}
      ref={reel}>
      <Animated.View
        style={{
          width: reelProps.width,
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
              width={reelProps.width}
              height={symbols.height}
            />
          );
        })}
      </Animated.View>
    </View>
  );
});

// const Container = styled.View<{width: number; height: number}>`
//   background-color: pink;
//   overflow: hidden;
//   width: ${(props) => props.width};
//   height: ${(props) => props.height};
// `;

const styles = StyleSheet.create({
  reel: {
    backgroundColor: 'pink',
    overflow: 'hidden',
  },
});

import styled from 'styled-components/native';
import React, {useImperativeHandle, useState, forwardRef, useRef} from 'react';
import {Constants} from '../../../Constants';
import {Reel} from '../Reel/Reel';

export const ReelSet = forwardRef((pros, ref) => {
  const reels = useRef([]);

  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  const onLayout = (e: any) => {
    setDimensions({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
    });
  };

  const renderReels = () => {
    const reelWidth = dimensions.width / Constants.REELS;
    const reelList = Array.apply(null, Array(Constants.REELS)).map(
      (element, index) => {
        return (
          <Reel
            width={reelWidth}
            height={dimensions.height}
            index={index}
            ref={(ref) => {
              reels.current.push(ref);
            }}
          />
        );
      },
    );

    return <>{reelList}</>;
  };

  const randomBetween = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useImperativeHandle(ref, () => ({
    spin() {
      for (let i = 0; i < Constants.REELS; i++) {
        reels.current[i].scrollByOffset(
          randomBetween(
            (Constants.REELS_REPEAT - 6) * reels.current[i].getSymbols().length,
            (Constants.REELS_REPEAT - 5) * reels.current[i].getSymbols().length,
          ),
        );
      }
    },
  }));

  return (
    <Container
      onLayout={(e) => {
        onLayout(e);
      }}>
      {dimensions.width && dimensions.height && renderReels()}
    </Container>
  );
});

const Container = styled.View`
  flex: 1;
  background-color: orange;
  flex-direction: row;
`;

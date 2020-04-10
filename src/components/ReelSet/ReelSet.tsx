import styled from 'styled-components/native';
import React, {useImperativeHandle, useState, forwardRef, useRef} from 'react';
import {Constants} from '../../../Constants';
import {Reel} from '../Reel/Reel';

interface ReelSetProps {
  setShowModal: (value: boolean) => void;
}

export const ReelSet = forwardRef((reelSetProps: ReelSetProps, ref) => {
  const reels = useRef([]);

  let reelsInMotion = null;
  let spinResults = [];
  let winningLines = [];

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
    const reelWidth =
      (dimensions.width - dimensions.width * 0.3) / Constants.REELS;
    const reelList = Array.apply(null, Array(Constants.REELS)).map(
      (element, index) => {
        return (
          <Reel
            width={reelWidth}
            height={dimensions.height}
            index={index}
            ref={(reelRef) => {
              reels.current[index] = reelRef;
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

  const highlightWinningLines = (currentIndex: number) => {
    if (!winningLines.length) {
      return;
    }

    if (currentIndex > 0) {
      Constants.LINES[winningLines[currentIndex - 1]].map((element) => {
        reels.current[element[0]].highlightAtIndex(element[1], false);
      });
    }

    if (currentIndex > winningLines.length - 1) {
      reelSetProps.setShowModal(true);
      return;
    }

    Constants.LINES[winningLines[currentIndex]].map((element) => {
      reels.current[element[0]].highlightAtIndex(element[1], true);
      reels.current[element[0]].shakeAtIndex(element[1]);
    });

    setTimeout(() => {
      highlightWinningLines(currentIndex + 1);
    }, 800);
  };

  const evaluateResults = () => {
    winningLines = [];

    for (let lineIdx = 0; lineIdx < Constants.LINES.length; lineIdx++) {
      let streak = 0;
      let currentKind = null;

      for (
        let coordIdx = 0;
        coordIdx < Constants.LINES[lineIdx].length;
        coordIdx++
      ) {
        let coords = Constants.LINES[lineIdx][coordIdx];
        let symbolAtCoords = spinResults[coords[0]][coords[1]];

        if (coordIdx === 0) {
          if (symbolAtCoords === 'C') {
            break;
          }

          currentKind = symbolAtCoords;
          streak = 1;
        } else {
          if (symbolAtCoords !== currentKind) {
            break;
          }

          streak += 1;
        }

        if (streak >= 3) {
          winningLines.push(lineIdx);
        }
      }
    }

    highlightWinningLines(0);
  };

  useImperativeHandle(ref, () => ({
    spin() {
      reelsInMotion = Constants.REELS;
      for (let i = 0; i < Constants.REELS; i++) {
        reels.current[i].scrollByOffset(
          randomBetween(
            (Constants.REELS_REPEAT - 6) * reels.current[i].getSymbols().length,
            (Constants.REELS_REPEAT - 5) * reels.current[i].getSymbols().length,
          ),
          (reelIndex, results) => {
            reelsInMotion -= 1;
            spinResults[reelIndex] = results;

            if (reelsInMotion === 0) {
              evaluateResults();
            }
          },
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
  flex: 1 1 auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

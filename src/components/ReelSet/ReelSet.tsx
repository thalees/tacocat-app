import styled from 'styled-components/native';
import React, {useState, useRef} from 'react';
import {Constants} from '../../../Constants';
import {Reel} from '../Reel/Reel';

export const ReelSet: React.FC = () => {
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

  const spin = (): void => {
    reels.current[0].scrollByOffset(10);
  };

  const renderReels = () => {
    const reelWidth = dimensions.width / Constants.REELS;
    const reelList = Array.apply(null, Array(Constants.REELS)).map(
      (element, index) => {
        return (
          <Reel
            width={reelWidth}
            height={dimensions.height}
            key={index}
            index={index}
            ref={reels.current[index]}
          />
        );
      },
    );

    return <>{reelList}</>;
  };

  return (
    <Container
      onLayout={(e): void => {
        onLayout(e);
      }}>
      {dimensions.width && dimensions.height && renderReels()}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: orange;
  flex-direction: row;
`;

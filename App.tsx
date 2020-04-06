import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {Constants} from './Constants';
import {ReelSet, SpinButton} from './src/components';
import {images} from './src/assets/img';

const App = () => {
  const reel = useRef();

  return (
    <>
      <Container>
        <BackgroundImage source={images.background} resizeMode="stretch" />
        <TopBar>
          <TopBarBackground
            source={images.backgroundTopBar}
            resizeMode="stretch"
          />
        </TopBar>
        <Main>
          <ReelSet ref={reel} />
        </Main>
        <BottomBar>
          <BottomBarBackground
            source={images.backgroundBottomBar}
            resizeMode="stretch"
          />
          <SpinButton
            text="SPIN"
            onPress={() => {
              reel.current.spin();
            }}
            inactive={false}
          />
        </BottomBar>
      </Container>
    </>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: black;
`;

const BackgroundImage = styled.Image`
  position: absolute;
  height: ${Constants.MAX_HEIGHT};
  width: ${Constants.MAX_WIDTH};
`;

const TopBar = styled.View`
  width: ${Constants.MAX_WIDTH};
  height: ${Constants.XR * 53};
`;

const TopBarBackground = styled.Image`
  position: absolute;
  width: ${Constants.MAX_WIDTH};
  height: ${Constants.XR * 48};
`;

const Main = styled.View`
  width: ${Constants.MAX_WIDTH};
  height: ${Constants.MAX_HEIGHT - (53 + 80) * Constants.XR};
`;

const BottomBar = styled.View`
  width: ${Constants.MAX_WIDTH};
  height: ${Constants.XR * 90};
`;

const BottomBarBackground = styled.Image`
  position: absolute;
  width: ${Constants.MAX_WIDTH};
  height: ${Constants.XR * 65};
`;

export default App;

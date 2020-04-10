import {Dimensions} from 'react-native';

export const Constants = {
  MAX_WIDTH: Dimensions.get('window').width,
  MAX_HEIGHT: Dimensions.get('window').height,
  XR: Dimensions.get('screen').width / 667,
  REELS: 5,
  REELS_REPEAT: 10,
  SYMBOLS: 3,
  REEL_SYMBOLS: [
    'CDCDTVVTCTDDTVVTVDTCDVVV',
    'VTCDTVDTCDCDTCDVVCDTVTTD',
    'CDTVDVTVTCDTVDTCDCDTCDVT',
    'DCTVVTCDTVDTCDCDTCDVDVTT',
    'TCDCDTCDVTDVTCDTVVTCDTVD',
  ],
  LINES: [
    // top line
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
    ],
    // middle line
    [
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 1],
    ],
    // botton line
    [
      [0, 2],
      [1, 2],
      [2, 2],
      [3, 2],
      [4, 2],
    ],
    // V shape starting from top left
    [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 1],
      [4, 0],
    ],
    // V shape starting from botton left
    [
      [0, 2],
      [1, 1],
      [2, 0],
      [3, 1],
      [4, 2],
    ],
    // W shape starting from top left
    [
      [0, 0],
      [1, 2],
      [2, 0],
      [3, 2],
      [4, 0],
    ],
    // M shape starting from botton left
    [
      [0, 2],
      [1, 0],
      [2, 2],
      [3, 0],
      [4, 2],
    ],
    // M shape on top half
    [
      [0, 1],
      [1, 0],
      [2, 1],
      [3, 0],
      [4, 1],
    ],
    // W shape on top half
    [
      [0, 0],
      [1, 1],
      [2, 0],
      [3, 1],
      [4, 0],
    ],
    // W shape on botton half
    [
      [0, 1],
      [1, 2],
      [2, 1],
      [3, 2],
      [4, 1],
    ],
    // M shape on botton half
    [
      [0, 2],
      [1, 1],
      [2, 2],
      [3, 1],
      [4, 2],
    ],
    // U shape on top half
    [
      [0, 0],
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 0],
    ],
    // U shape on botton half
    [
      [0, 1],
      [1, 2],
      [2, 2],
      [3, 2],
      [4, 1],
    ],
    // inverse U shape on botton half
    [
      [0, 2],
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 2],
    ],
    // inverse U shape on top half
    [
      [0, 1],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 1],
    ],
    // Z shape from top left
    [
      [0, 0],
      [1, 0],
      [2, 1],
      [3, 2],
      [4, 2],
    ],
    // Z shape from botton left
    [
      [0, 2],
      [1, 2],
      [2, 1],
      [3, 0],
      [4, 0],
    ],
  ],
};

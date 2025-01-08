export const FC25PlayerStyle: {
  icons: {
    normal: any;
    golden: any;
  };
  name: string;
  info: string;
  description: {
    normal: string;
    golden: string;
  };
}[] = [
  /*
   * Scoring
   */
  // Tiki Taka	A player who is known for making first-time accurate and short passes.	Executes difficult first-time Ground Passes with high accuracy, using backheels when contextually appropriate. Short distance Ground Passes are highly accurate.	Executes difficult first-time Ground Passes with even greater accuracy, using backheels when contextually appropriate. Short distance Ground Passes are exceptionally accurate.
  {
    icons: {
      normal: require('../assets/image/player-styles/25/Tiki_Taka.png'),
      golden: require('../assets/image/player-styles/25/Tiki_Taka_.png'),
    },
    name: 'Tiki Taka',
    info: 'A player who is known for making first-time accurate and short passes.',
    description: {
      normal:
        'Executes difficult first-time Ground Passes with high accuracy, using backheels when contextually appropriate. Short distance Ground Passes are highly accurate.',
      golden:
        'Executes difficult first-time Ground Passes with even greater accuracy, using backheels when contextually appropriate. Short distance Ground Passes are exceptionally accurate.',
    },
  },
  // Whipped Pass	A player who is known for making high-speed whipped crosses into the box.	All crosses are highly accurate, travel faster, and with more curve.	All crosses are highly accurate, travel faster, and with more curve. Performs driven crosses with exceptional power.
  {
    icons: {
      normal: require('../assets/image/player-styles/25/Whipped_Pass.png'),
      golden: require('../assets/image/player-styles/25/Whipped_Pass_.png'),
    },
    name: 'Whipped Pass',
    info: 'A player who is known for making high-speed whipped crosses into the box.',
    description: {
      normal:
        'All crosses are highly accurate, travel faster, and with more curve.',
      golden:
        'All crosses are highly accurate, travel faster, and with more curve. Performs driven crosses with exceptional power.',
    },
  },
];

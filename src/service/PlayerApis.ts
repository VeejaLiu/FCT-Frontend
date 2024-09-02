import axios from 'axios';
import { BACKEND_URL } from '../constant';
import { Toast } from '@douyinfe/semi-ui';

export interface PlayerOverall {
  playerID: number;
  playerName: string;
  overallRating: number;
  potential: number;
  age: number;
  positionType: 'GK' | 'DEF' | 'MID' | 'FOR';
  position1: string;
  position2: string;
  position3: string;
  position4: string;
  imageUrl?: string;
}

export interface PlayerTrend {
  inGameDate: string;
  overallRating: number;
  potential: number;
}

export interface PlayerTrendData {
  playerID: number;
  playerName: string;
  preferredposition1: string;
  positionType: string;
  trends: PlayerTrend[];
}

export class PlayerApis {
  /**
   * Get player list
   */
  static async getPlayerList(): Promise<PlayerOverall[]> {
    try {
      const token = localStorage.getItem('fcd-token');
      // console.log(`[getPlayerList] token: ${token}`);
      const response = await axios.get(`${BACKEND_URL}/api/v1/player/`, {
        headers: {
          Accept: '*/*',
          token: token,
        },
      });
      if (response.status === 200) {
        return response.data;
      }
      return [];
    } catch (e: any) {
      console.log(`[getPlayerList] error code: ${e.response.status}`);
      console.log(`[getPlayerList] error message: ${e.message}`);
      if (e.response.status === 401) {
        Toast.error('Please login first');
      }
      return [];
    }
  }

  /**
   * Get player detail
   */
  static async getPlayerDetail({ playerID }: { playerID?: number }): Promise<{
    allPlayer: PlayerOverall[];
    thisPlayer: any;
    trends: any[];
  } | null> {
    try {
      const token = localStorage.getItem('fcd-token');
      const response = await axios.get(
        `${BACKEND_URL}/api/v1/player/detail/${playerID || 0}`,
        {
          headers: {
            Accept: '*/*',
            token: token,
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      }
      return null;
    } catch (e: any) {
      console.log(`[getPlayerDetail] error code: ${e.response.status}`);
      console.log(`[getPlayerDetail] error message: ${e.message}`);
      if (e.response.status === 401) {
        Toast.error('Please login first');
      }
      return null;
    }
  }

  /**
   * Get player count
   */
  static async getPlayerCount(): Promise<number> {
    try {
      const token = localStorage.getItem('fcd-token');
      const response = await axios.get(`${BACKEND_URL}/api/v1/player/count`, {
        headers: { Accept: '*/*', token: token },
      });
      if (response.status === 200) {
        return response.data;
      }
      return 0;
    } catch (e: any) {
      console.log(`[getPlayerCount] error code: ${e.response.status}`);
      console.log(`[getPlayerCount] error message: ${e.message}`);
      if (e.response.status === 401) {
        Toast.error('Please login first');
      }
      return 0;
    }
  }

  /**
   * Get player trends
   */
  static async getPlayerTrends(): Promise<PlayerTrendData[]> {
    try {
      const token = localStorage.getItem('fcd-token');
      const response = await axios.get(`${BACKEND_URL}/api/v1/player/trends`, {
        headers: { Accept: '*/*', token: token },
      });
      if (response.status === 200) {
        return response.data;
      }
      return [];
    } catch (e: any) {
      console.log(`[getPlayerCount] error code: ${e.response.status}`);
      console.log(`[getPlayerCount] error message: ${e.message}`);
      if (e.response.status === 401) {
        Toast.error('Please login first');
      }
      return [];
    }
  }
}

import React, { useEffect, useState } from 'react';
import { PlayerApis, PlayerOverall } from '../../service/PlayerApis.ts';
import { getColorByPositionType } from '../../common/player-helper.ts';
import { LoadingComponent } from '../../components/Other.tsx';
import './PlayerPickerComponent.css';
import { IconRefresh } from '@douyinfe/semi-icons';

interface PlayerPickerComponentProps {
  playerID: number;
  setPlayerID: (id: number) => void;
}

const PlayerPickerComponent: React.FC<PlayerPickerComponentProps> = ({
  playerID,
  setPlayerID,
}) => {
  const [playerList, setPlayerList] = useState<PlayerOverall[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPlayerList = async () => {
    setIsLoading(true);
    const players: PlayerOverall[] = await PlayerApis.getPlayerList();
    setPlayerList(players);
    if (!playerID && players.length > 0) {
      setPlayerID(players[0].playerID);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getPlayerList().then();
  }, []);

  const handlePlayerSelect = (id: number) => {
    setPlayerID(id);
  };

  return (
    <div className="player-picker-container flex bg-gray-400 flex-wrap sticky top-0 z-20">
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="flex">
          {/* Player list */}
          <div className="flex p-1">
            {playerList
              ?.sort((a: PlayerOverall, b: PlayerOverall) => {
                const positionTypeMap = {
                  GK: 1,
                  DEF: 2,
                  MID: 3,
                  FOR: 4,
                };
                return (
                  positionTypeMap[a.positionType] -
                    positionTypeMap[b.positionType] ||
                  a.position1.localeCompare(b.position1)
                );
              })
              .map((player: any) => {
                return (
                  <div
                    className={`${
                      player.playerID === playerID ? 'selected ' : ''
                    } inline-block m-1 bg-[#eaecec] p-1 rounded cursor-pointer`}
                    key={player.playerID}
                    onClick={() => handlePlayerSelect(player.playerID)}
                  >
                    <span
                      className="player-position"
                      style={{
                        color: getColorByPositionType(player.positionType),
                      }}
                    >
                      {player.position1}
                    </span>
                    <span>{player.playerName}</span>
                  </div>
                );
              })}
          </div>
          {/* Refresh button */}
          <div className="text-center items-center p-au">
            <IconRefresh
              className={`cursor-pointer`}
              style={{ color: 'black' }}
              size="extra-large"
              onClick={() => {
                getPlayerList().then();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerPickerComponent;

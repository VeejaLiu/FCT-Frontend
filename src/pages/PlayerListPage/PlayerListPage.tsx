import { Space, Table } from '@douyinfe/semi-ui';
import * as React from 'react';
import { PlayerApis, PlayerOverall } from '../service/PlayerApis.ts';
import { useEffect } from 'react';

export function getColorByPositionType(positionType: string) {
  switch (positionType) {
    case 'FOR':
      return '#c92a2a';
    case 'MID':
      return '#5c940d';
    case 'DEF':
      return '#1c7ed6';
    case 'GK':
      return '#e67700';
  }
  return 'black';
}

export function getAvatarUrl(playerID: number) {
  // playerID example: 158023
  // src example: https://cdn.sofifa.net/players/158/023/24_120.png
  const a = playerID.toString().slice(0, 3);
  const b = playerID.toString().slice(3, 6);
  const imageUrl = `https://cdn.sofifa.net/players/${a}/${b}/24_120.png`;
  return imageUrl;
}

const PlayerListColumn = [
  {
    title: '',
    dataIndex: 'imageUrl',
    render: (text: string, record: PlayerOverall, index: number) => {
      return (
        <Space
          style={{
            height: 48,
            width: 48,
          }}
        >
          <img
            style={{ width: 48, height: 48 }}
            src={record.imageUrl}
            alt="player"
            onError={(e) => {
              // 图片加载失败时，隐藏图片
              e.currentTarget.style.display = 'none';
              // 清空 src 属性，防止加载失败时，显示上一次加载的图片
              e.currentTarget.src = '';
            }}
            onLoad={(e) => {
              e.currentTarget.style.display = 'block'; // 或者使用其他显示方式
            }}
          />
        </Space>
      );
    },
  },
  {
    title: 'Player Name',
    dataIndex: 'playerName',
    render: (text: string, record: PlayerOverall, index: number) => {
      return (
        <span>
          <b>{record.playerName}</b>
        </span>
      );
    },
  },
  {
    title: 'ID',
    dataIndex: 'playerID',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a: PlayerOverall, b: PlayerOverall) => a.age - b.age,
  },
  {
    title: 'Position',
    dataIndex: 'position1',
    defaultSortOrder: 'ascend',
    // 按照 positionType 排序, 优先级: GK > DEF > MID > FOR
    // 其次按照 position1 排序， 按字典序
    sorter: (a: PlayerOverall, b: PlayerOverall) => {
      const positionTypeMap = {
        GK: 1,
        DEF: 2,
        MID: 3,
        FOR: 4,
      };
      return (
        positionTypeMap[a.positionType] - positionTypeMap[b.positionType] ||
        a.position1.localeCompare(b.position1)
      );
    },
    render: (text: string, record: PlayerOverall) => {
      const color = getColorByPositionType(record.positionType);
      return (
        <div>
          <Space>
            <span style={{ color }}>
              <b>{record.position1}</b>
            </span>
            <span style={{ color: 'gray' }}>{record.position2}</span>
            <span style={{ color: 'gray' }}>{record.position3}</span>
            <span style={{ color: 'gray' }}>{record.position4}</span>
          </Space>
        </div>
      );
    },
  },
  {
    title: 'Overall',
    dataIndex: 'overallRating',
    sorter: (a: PlayerOverall, b: PlayerOverall) =>
      a.overallRating - b.overallRating,
    render: (text: string, record: PlayerOverall, index: number) => {
      let color;

      if (record.overallRating >= 90) {
        color = 'green'; // 优秀
      } else if (record.overallRating >= 75) {
        color = 'orange'; // 中等
      } else {
        color = 'red'; // 较差
      }

      return (
        <>
          <span style={{ color, fontWeight: 'bold' }}>
            {record.overallRating}
          </span>
        </>
      );
    },
  },
  {
    title: 'Potential',
    dataIndex: 'potential',
    sorter: (a: PlayerOverall, b: PlayerOverall) => a.potential - b.potential,
    render: (text: string, record: PlayerOverall, index: number) => {
      let color;

      if (record.potential >= 90) {
        color = 'green'; // 优秀
      } else if (record.potential >= 75) {
        color = 'orange'; // 中等
      } else {
        color = 'red'; // 较差
      }
      return (
        <span style={{ color, fontWeight: 'bold' }}>{record.potential}</span>
      );
    },
  },
];

function PlayerListPage(): React.ReactElement {
  const [data, setData] = React.useState<PlayerOverall[]>([]);

  const getPlayerList = async () => {
    const players: PlayerOverall[] = await PlayerApis.getPlayerList();
    players.forEach((player) => {
      player.imageUrl = getAvatarUrl(player.playerID);
    });
    setData(players);
  };

  useEffect(() => {
    getPlayerList().then();
  }, []);

  return (
    <div
      style={{
        padding: '10px',
      }}
    >
      <h1>Players list</h1>
      <Table
        style={{
          marginTop: '20px',
          marginBottom: '50px',
        }}
        columns={PlayerListColumn}
        dataSource={data}
        pagination={false}
        size="small"
      />
    </div>
  );
}

export default PlayerListPage;

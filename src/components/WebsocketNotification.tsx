import { useEffect } from 'react';
import { getToken } from '../common/common.ts';

let reconnectInterval = 1000; // Initial reconnect interval
const maxReconnectInterval = 30000; // Maximum reconnect interval

export const WebsocketNotification = () => {
  async function createWebSocketConnection() {
    const token = getToken();
    if (!token) {
      console.log(
        'Cannot create WebSocket connection: token not found. And will retry in 5 seconds',
      );
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return createWebSocketConnection();
    }

    // Create a new WebSocket connection
    const socket = new WebSocket(import.meta.env.VITE_WS_URL, token);

    // WebSocket connection established
    socket.onopen = () => {
      console.log('[WebSocket][onopen] connection established');
      // Send ping message every 10 seconds
      setInterval(() => {
        socket.send('ping');
      }, 30 * 1000);
    };

    // Handle incoming messages
    socket.onmessage = (event) => {
      const newNotification = event.data;
      console.log(
        '[WebSocket][onmessage] event.data=',
        JSON.stringify(newNotification),
      );

      if (!newNotification || newNotification === '') {
        console.log('Received empty message, ignore it');
        return;
      }

      if (newNotification === 'pong') {
        console.log('Received pong message, ignore it');
        return;
      }

      if (newNotification === 'Protocol accepted') {
        console.log('Received protocol accepted message, ignore it');
        return;
      }

      let type = '';
      let payload: any = {};
      try {
        const parsed = JSON.parse(newNotification);
        type = parsed.type;
        payload = parsed.payload;
      } catch (e) {
        console.error(
          '[WebSocket][onmessage] Failed to parse incoming message:',
          e,
        );
        return;
      }
      console.log('[WebSocket][onmessage] type:', type, 'payload:', payload);
      // const notification: NotificationBody = {
      //   in_game_date: '2021-09-01',
      //   message_type: type,
      //   player_id: payload.playerID,
      //   player_name: payload.playerName,
      //   old_overall_rating: payload.oldOverallrating,
      //   overall_rating: payload.overallrating,
      //   old_potential: payload.oldPotential,
      //   potential: payload.potential,
      //   old_skillmoves: payload.oldSkillMoves,
      //   skillmoves: payload.skillMoves,
      //   old_weakfoot: payload.oldWeakFootAbilityTypeCode,
      //   weakfoot: payload.weakFootAbilityTypeCode,
      // };

      // Notification.open({
      //   content: (
      //     <>
      //       <NotificationItem notification={notification} />
      //     </>
      //   ),
      //   duration: 1000,
      // });
    };

    // 连接关闭时的处理
    socket.onclose = () => {
      console.log(
        `[WebSocket][onclose] connection closed, will reconnect in ${reconnectInterval} ms`,
      );
      setTimeout(createWebSocketConnection, reconnectInterval);
      reconnectInterval = Math.min(2 * reconnectInterval, maxReconnectInterval);
    };
  }

  useEffect(() => {
    createWebSocketConnection().then(
      () => {
        console.log('WebSocket connection established');
      },
      (err) => {
        console.error('Failed to establish WebSocket connection', err);
      },
    );
  }, []);

  return <></>;
};

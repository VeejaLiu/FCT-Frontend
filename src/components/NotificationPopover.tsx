import {
  LocaleConsumer,
  Pagination,
  Select,
  Switch,
  Tooltip,
} from '@douyinfe/semi-ui';
import { IconCheckChoiceStroked } from '@douyinfe/semi-icons';
import { useEffect, useState } from 'react';
import {
  NotificationApis,
  NotificationBody,
} from '../service/NotificationApis.ts';
import {
  getAvatarUrl,
  getColorByDiff,
  getColorByPositionType,
} from '../common/player-helper.ts';
import './NotificationPopover.css';
import player_avatar_placeholder from '../assets/image/player_avatar_placeholder.svg';

function getNotificationContent(
  notification: NotificationBody,
  localeData: any,
) {
  switch (notification.message_type) {
    case 'PlayerUpdate': {
      switch (notification.message_subtype) {
        case 'PlayerUpdate.SkillMove':
          return (
            <div className="notification-content">
              <div className="notification-label">{localeData.SkillMove}</div>
              <div className="notification-values">
                <div className="notification-value">
                  {notification.old_skillmoves}
                </div>
                <div className="notification-arrow">{'->'}</div>
                <div
                  className="notification-value"
                  style={{
                    color: getColorByDiff(
                      (notification?.skillmoves || 0) -
                        (notification?.old_skillmoves || 0),
                    ),
                  }}
                >
                  {notification.skillmoves}
                </div>
              </div>
            </div>
          );
        case 'PlayerUpdate.WeakFoot':
          return (
            <div className="notification-content">
              <div className="notification-label">{localeData.WeakFoot}</div>
              <div className="notification-values">
                <div className="notification-value">
                  {notification.old_weakfoot}
                </div>
                <div className="notification-arrow">{'->'}</div>
                <div
                  className="notification-value"
                  style={{
                    color: getColorByDiff(
                      (notification?.weakfoot || 0) -
                        (notification?.old_weakfoot || 0),
                    ),
                  }}
                >
                  {notification.weakfoot}
                </div>
              </div>
            </div>
          );
        case 'PlayerUpdate.Overall':
          return (
            <div>
              <div className="notification-content">
                <div className="notification-label">{localeData?.Overall}</div>
                <div className="notification-values">
                  <div className="notification-value">
                    {notification.old_overall_rating}
                  </div>
                  <div className="notification-arrow"> {'->'} </div>
                  <div
                    className="notification-value"
                    style={{
                      color: getColorByDiff(
                        (notification?.overall_rating || 0) -
                          (notification?.old_overall_rating || 0),
                      ),
                    }}
                  >
                    {notification.overall_rating}
                  </div>
                </div>
              </div>

              <div className="notification-content">
                <div className="notification-label">
                  {localeData?.Potential}
                </div>
                <div className="notification-values">
                  <div className="notification-value">
                    {notification.old_potential}
                  </div>
                  <div className="notification-arrow"> {'->'} </div>
                  <div
                    className="notification-value"
                    style={{
                      color: getColorByDiff(
                        (notification?.potential || 0) -
                          (notification?.old_potential || 0),
                      ),
                    }}
                  >
                    {notification.potential}
                  </div>
                </div>
              </div>
            </div>
          );
        default:
          return (
            <div>
              {localeData?.UnknownMessageType}: {notification.message_subtype}
            </div>
          );
      }
    }
    default:
      return (
        <div>
          {localeData?.UnknownMessageType}: {notification.message_type}
        </div>
      );
  }
}

type NotificationItemProps = {
  notification: NotificationBody;
};

export const NotificationItem = ({ notification }: NotificationItemProps) => {
  return (
    <LocaleConsumer componentName={'NotificationItem'}>
      {(localeData: any, localeCode: string, dateFnsLocale: any) => (
        <div style={{ display: 'flex' }}>
          <div className="h-12 w-12 mr-2.5">
            <img
              className="h-12 w-12 rounded-full border-2 border-white"
              src={getAvatarUrl(notification.player_id)}
              alt={notification.player_name}
              onError={(e) => {
                e.currentTarget.src = player_avatar_placeholder;
              }}
            />
          </div>
          <div>
            <div className="font-bold">
              <span
                style={{
                  color: getColorByPositionType(
                    notification.player_position || '',
                  ),
                  marginRight: '5px',
                }}
              >
                {notification.player_position}
              </span>
              <span style={{ color: '#333' }}>{notification.player_name}</span>
            </div>

            {/* Game date */}
            <div style={{ marginBottom: '3px', display: 'flex' }}>
              <div style={{ width: '100px' }}>{localeData?.GameDate}</div>
              <span style={{ color: '#626f86', fontWeight: 'normal' }}>
                {notification.in_game_date}
              </span>
            </div>
            {getNotificationContent(notification, localeData)}
          </div>
          <div style={{ fontWeight: 'normal' }} className="ml-auto">
            <a
              style={{ textDecoration: 'underline' }}
              className="cursor-pointer"
            >
              {notification.is_read ? '' : localeData?.MarkAsRead}
            </a>

            {!notification.is_read && (
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'red',
                  marginTop: '30px',
                  marginLeft: 'auto',
                }}
              ></div>
            )}
          </div>
        </div>
      )}
    </LocaleConsumer>
  );
};

interface NotificationPopoverProps {
  updateUnreadCount: () => void;
}

const PAGE_SIZE = 10;

export const NotificationPopover = ({
  updateUnreadCount,
}: NotificationPopoverProps) => {
  const [notificationList, setNotificationList] = useState<{
    total: number;
    items: NotificationBody[];
  }>({
    total: 0,
    items: [],
  });
  const [onlyShowUnread, setOnlyShowUnread] = useState(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterValue, setFilterValue] = useState<string>('all');

  const fetchNotificationList = async () => {
    const notificationList = await NotificationApis.getAllNotifications({
      page: currentPage,
      limit: PAGE_SIZE,
      filter: filterValue,
      onlyUnread: onlyShowUnread,
    });
    console.log('[fetchNotificationList] notificationList:', notificationList);
    setNotificationList(notificationList);
    if (notificationList?.items?.length === 0) {
      setCurrentPage(1);
    }
    updateUnreadCount();
  };

  useEffect(() => {
    fetchNotificationList().then();
  }, [currentPage, onlyShowUnread, filterValue]);

  return (
    <LocaleConsumer componentName={'NotificationPopover'}>
      {(localeData: any, localeCode: string, dateFnsLocale: any) => (
        <div
          style={{
            width: '100%',
            height: '90vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header ---- Start */}
          <div
            style={{
              padding: '20px',
              display: 'flex',
              borderBottom: '2px solid #f0f0f0',
            }}
          >
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '1.7rem',
              }}
            >
              {localeData.Title}
            </span>
            <div
              style={{
                marginLeft: 'auto',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span>{localeData.OnlyShowUnread}</span>
              <Switch
                style={{ marginLeft: '5px' }}
                checked={onlyShowUnread}
                onChange={(checked) => setOnlyShowUnread(checked)}
                checkedText={localeData.SwitchOn}
                uncheckedText={localeData.SwitchOff}
              />
              <Tooltip content={localeData.MarkAllAsRead} position={'top'}>
                <IconCheckChoiceStroked
                  onClick={() => {
                    console.log('click');
                    NotificationApis.markAllAsRead().then(() => {
                      fetchNotificationList();
                    });
                  }}
                  style={{
                    marginLeft: '20px',
                    cursor: 'pointer',
                    color: '#333',
                  }}
                  size={'large'}
                />
              </Tooltip>
            </div>
          </div>
          {/* Header ---- End */}

          {/* Content ---- Start */}
          <div style={{ flexGrow: 1, overflowY: 'auto' }}>
            <Select
              className="m-1 ml-2 w-[200px]"
              value={filterValue}
              onChange={(value) => {
                setFilterValue(String(value));
              }}
            >
              {/* 'PlayerUpdate.Overall' | 'PlayerUpdate.SkillMove' | 'PlayerUpdate.WeakFoot' | 'all' */}
              {/* All */}
              <Select.Option value="all">
                {localeData.FilterOption.All}
              </Select.Option>
              {/* Overall / Potential */}
              <Select.Option value="PlayerUpdate.Overall">
                {localeData.FilterOption.Overall}
              </Select.Option>
              {/* Skill move */}
              <Select.Option value="PlayerUpdate.SkillMove">
                {localeData.FilterOption.SkillMove}
              </Select.Option>
              {/* Weak foot */}
              <Select.Option value="PlayerUpdate.WeakFoot">
                {localeData.FilterOption.WeakFoot}
              </Select.Option>
            </Select>

            {notificationList?.items
              ?.filter(
                (notification) => !onlyShowUnread || !notification.is_read,
              )
              .map((notification: any, index: number) => (
                <div
                  className={`notification-item ${notification.is_read ? 'read' : 'unread'}`}
                  key={index}
                  onClick={() => {
                    // If click on notification, mark it as read
                    if (!notification.is_read) {
                      NotificationApis.markAsRead(notification.id).then(() => {
                        fetchNotificationList();
                      });
                    }
                  }}
                >
                  <NotificationItem notification={notification} />
                </div>
              ))}
          </div>

          {/* Pagination */}
          <Pagination
            className={'notification-pagination'}
            total={notificationList.total}
            currentPage={currentPage}
            pageSize={PAGE_SIZE}
            onPageChange={(page) => {
              setCurrentPage(page);
            }}
          ></Pagination>
          {/* Pagination ---- End */}

          {/* Content ---- End */}
        </div>
      )}
    </LocaleConsumer>
  );
};

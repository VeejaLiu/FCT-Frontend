import * as React from 'react';
import { useEffect } from 'react';
import {
  Button,
  LocaleConsumer,
  Notification,
  Space,
  Switch,
} from '@douyinfe/semi-ui';
import { UserApis } from '../../service/UserApis.ts';
import ApiSecretKeyComponent from './ApiSecretKeyComponent.tsx';
import AccountSettingComponent from './AccountSettingComponent.tsx';

function SettingsPage(): React.ReactElement {
  const [userSetting, setUserSetting] = React.useState<any>(null);
  const [isUserSettingLoading, setIsUserSettingLoading] =
    React.useState<boolean>(true);

  async function fetchUserSetting() {
    const userSetting = await UserApis.getUserSetting();
    console.log(`[getUserSetting] userSetting: ${JSON.stringify(userSetting)}`);
    setUserSetting(userSetting);
    setIsUserSettingLoading(false);
  }
  async function updateUserSetting({
    category,
    subItem,
    value,
  }: {
    category: string;
    subItem?: string;
    value: boolean;
  }) {
    setIsUserSettingLoading(true);
    await UserApis.updateUserSetting({
      category,
      subItem: subItem,
      value,
    });
    fetchUserSetting().then();
    setIsUserSettingLoading(false);
  }

  useEffect(() => {
    fetchUserSetting().then();
  }, []);

  return (
    <LocaleConsumer componentName={'SettingsPage'}>
      {(localeData: any, localeCode: string, dateFnsLocale: any) => (
        <Space
          vertical
          style={{
            width: '60vw',
            minWidth: '700px',
            padding: '20px',
          }}
          align={'start'}
        >
          {/* Title */}
          <div className="font-bold text-xl">{localeData?.Settings}</div>

          <ApiSecretKeyComponent localeData={localeData} />

          <div className="w-full p-4 border border-gray-200 rounded-md">
            <div className="font-bold mb-2">{localeData?.Notifications}</div>

            {/* Enable Notifications */}
            <div className="flex items-center m-1">
              <div className="w-[300px]">{localeData?.EnableNotifications}</div>
              <Switch
                checked={userSetting?.enableNotification}
                loading={isUserSettingLoading}
                onChange={(v, e) => {
                  console.log('[onChange] enableNotification:', v);
                  updateUserSetting({
                    category: 'enable_notification',
                    value: v,
                  }).then();
                }}
                aria-label="a switch for enable notification"
              ></Switch>
            </div>

            {/* Notification Itemss */}

            {/* Overall Rating and Potential */}
            <div className="flex items-center m-1">
              <div className="w-[300px]">
                {localeData?.PlayerOverallPotentialUpdate}
              </div>
              <Switch
                checked={
                  userSetting?.enableNotification &&
                  userSetting?.notificationItems?.PlayerUpdate_Overall
                }
                loading={isUserSettingLoading}
                onChange={(v, e) => {
                  console.log('[onChange] PlayerUpdate_Overall:', v);
                  updateUserSetting({
                    category: 'notification_items',
                    subItem: 'PlayerUpdate.Overall',
                    value: v,
                  }).then();
                }}
                aria-label="a switch for enable notification of player overall rating and potential"
              ></Switch>
            </div>

            {/* Skill Move */}
            <div className="flex items-center m-1">
              <div className="w-[300px]">
                {localeData?.PlayerSkillMoveUpdate}
              </div>
              <Switch
                checked={
                  userSetting?.enableNotification &&
                  userSetting?.notificationItems?.PlayerUpdate_SkillMove
                }
                loading={isUserSettingLoading}
                onChange={(v, e) => {
                  console.log('[onChange] PlayerUpdate_SkillMove:', v);
                  updateUserSetting({
                    category: 'notification_items',
                    subItem: 'PlayerUpdate.SkillMove',
                    value: v,
                  }).then();
                }}
                aria-label="a switch for enable notification of player skill move"
              ></Switch>
            </div>

            {/* Weak Foot */}
            <div className="flex items-center m-1">
              <div className="w-[300px]">
                {localeData?.PlayerWeakFootUpdate}
              </div>
              <Switch
                checked={
                  userSetting?.enableNotification &&
                  userSetting?.notificationItems?.PlayerUpdate_WeakFoot
                }
                loading={isUserSettingLoading}
                onChange={(v, e) => {
                  console.log('[onChange] PlayerUpdate_WeakFoot:', v);
                  updateUserSetting({
                    category: 'notification_items',
                    subItem: 'PlayerUpdate.WeakFoot',
                    value: v,
                  }).then();
                }}
                aria-label="a switch for enable notification of player weak foot"
              ></Switch>
            </div>
          </div>

          {/* Account Setting ---- START */}
          <AccountSettingComponent localeData={localeData} />
          {/* Account Setting ---- END */}

          {/* Do logout ---- START */}
          <h3 style={{ marginTop: '20px' }}>{localeData?.Logout}</h3>
          <Button
            onClick={() => {
              UserApis.doLogout().then((result) => {
                if (result) {
                  Notification.success({
                    title: 'Success',
                    content: 'Logged out successfully',
                    duration: 3,
                  });
                  window.location.href = '/';
                } else {
                  Notification.error({
                    title: 'Error',
                    content: 'Failed to logout, please try again',
                    duration: 3,
                  });
                  return;
                }
              });
            }}
          >
            {localeData?.ClickToLogout}
          </Button>
          {/* Do logout ---- END */}
        </Space>
      )}
    </LocaleConsumer>
  );
}

export default SettingsPage;

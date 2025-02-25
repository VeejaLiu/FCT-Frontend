import { Banner, Input, Notification } from '@douyinfe/semi-ui';
import * as React from 'react';
import { UserApis } from '../../service/UserApis.ts';

function ChangeEmailComponent({
  localeData,
  changeEmailDone,
}: {
  localeData: any;
  changeEmailDone?: any;
}): React.ReactElement {
  const [newEmail, setNewEmail] = React.useState<string>('');

  const changeEmail = async () => {
    console.log(`New Email: ${newEmail}`);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newEmail || newEmail === '' || !emailPattern.test(newEmail)) {
      Notification.error({
        title: 'Error',
        content: <div>Please enter a valid email address.</div>,
        duration: 3,
        position: 'top',
      });
      return;
    }

    // Call API to change password
    const res = await UserApis.changeEmail({ newEmail: newEmail });
    console.log(`[changeEmail] res: ${JSON.stringify(res)}`);
    if (res.success) {
      Notification.success({
        title: 'Success',
        content: 'Email changed successfully',
        duration: 3,
        position: 'top',
      });
      changeEmailDone();
    } else {
      Notification.error({
        title: 'Error',
        content: res.message,
        duration: 3,
        position: 'top',
      });
    }
  };

  return (
    <div className="mt-2 p-4 border border-gray-900 rounded-md">
      <Banner type="warning" description={localeData?.NeedVerifyEmail} />

      <div className="flex items-center mt-4 mb-4">
        <Input
          autoComplete={'off'}
          placeholder={localeData.NewEmailInputPlaceholder}
          type="email"
          onChange={(e: string) => setNewEmail(e)}
        />
        <button
          className="flex whitespace-nowrap border border-[#d1d9e0] rounded-md px-4 py-1 ml-2 bg-[#f6f8fa] hover:bg-[#f0f2f5]"
          onClick={() => changeEmail()}
        >
          {localeData.ChangeEmail}
        </button>
      </div>
    </div>
  );
}

export default ChangeEmailComponent;

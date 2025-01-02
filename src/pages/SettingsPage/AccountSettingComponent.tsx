import * as React from 'react';
import { useEffect } from 'react';
import ChangePasswordComponent from './ChangePassword.tsx';

export interface ApiSecretKeyComponentProps {
  localeData: any;
}

function AccountSettingComponent({
  localeData,
}: ApiSecretKeyComponentProps): React.ReactElement {
  const [showChangePassword, setShowChangePassword] =
    React.useState<boolean>(false);

  useEffect(() => {
    // fetchSecretKey().then();
  }, []);

  return (
    <div>
      <div className={'font-bold text-xl mt-6 mb-2'}>
        {localeData?.AccountInfo}
      </div>

      <div className="w-full p-4 border border-gray-200 rounded-md">
        {/* Account Info - Username */}
        <div className="flex">
          <div style={{ width: '300px' }}>
            <h5>{localeData?.AccountUsername}</h5>
          </div>
          <span style={{ color: 'gray', fontWeight: 500 }}>Veeja Liu</span>
        </div>

        {/* Account Info - Email */}
        <div className="flex mt-2">
          <div style={{ width: '300px' }}>
            <h5>{localeData?.AccountEmail}</h5>
          </div>
          <span style={{ color: 'gray', fontWeight: 500 }}>
            veejaliu@gmail.com
          </span>
        </div>

        {/* Account Info - Change Password ---- START*/}
        <div className="mt-2">
          <div className="flex">
            <div style={{ width: '300px' }}>
              <h5>{localeData?.AccountChangePassword}</h5>
            </div>
            <span style={{ fontWeight: 200 }}>
              <a
                style={{
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
                onClick={() => setShowChangePassword(!showChangePassword)}
              >
                {localeData.AccountClickToChange}
              </a>
            </span>
          </div>
          {showChangePassword && (
            <ChangePasswordComponent localeData={localeData} />
          )}
        </div>
        {/* Account Info - Change Password ---- END*/}
      </div>
    </div>
  );
}

export default AccountSettingComponent;

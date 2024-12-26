import { Space } from '@douyinfe/semi-ui';
import { useState } from 'react';
import { LoginComponent } from './LoginComponent.tsx';
import { RegisterComponent } from './RegisterComponent.tsx';
import { ContactUsComponent } from './ContactUsComponent.tsx';

const LoginOrRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Space
      style={{
        width: '100%',
        height: '100%',
      }}
      vertical
    >
      {isLogin ? (
        <LoginComponent setIsLogin={setIsLogin} />
      ) : (
        <RegisterComponent setIsLogin={setIsLogin} />
      )}
      <ContactUsComponent />
    </Space>
  );
};

export default LoginOrRegisterPage;

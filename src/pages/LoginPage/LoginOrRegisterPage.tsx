import { IconGithubLogo, IconMailStroked1 } from '@douyinfe/semi-icons';
import { Space, Typography } from '@douyinfe/semi-ui';
import { useState } from 'react';
import { LoginComponent } from './LoginComponent.tsx';
import { RegisterComponent } from './RegisterComponent.tsx';

const { Text } = Typography;

export function getContactUs() {
  return (
    <Space vertical align={'baseline'} style={{ marginTop: '50px' }}>
      <b>
        Discord:{' '}
        <Text link={{ href: 'https://discord.gg/aKfWAtbJ8F' }}>
          https://discord.gg/aKfWAtbJ8F
        </Text>
      </b>
      <b>
        GitHub:{' '}
        <Text
          icon={<IconGithubLogo />}
          link={{
            href: 'https://github.com/VeejaLiu/FIFA-Career-Dashboard-Frontend',
            target: '_blank',
          }}
          underline
        >
          VeejaLiu/FCT-Frontend
        </Text>
      </b>
      <b>
        Email:{' '}
        <Text
          icon={<IconMailStroked1 />}
          link={{
            href: 'mailto:support@fccareer.top',
            target: '_blank',
          }}
        >
          support@fccareer.com
        </Text>
      </b>
    </Space>
  );
}

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
    </Space>
  );
};

export default LoginOrRegisterPage;

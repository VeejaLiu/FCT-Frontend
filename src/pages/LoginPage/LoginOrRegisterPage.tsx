import { LocaleConsumer, Space } from '@douyinfe/semi-ui';
import { useState } from 'react';
import { LoginComponent } from './LoginComponent.tsx';
import { RegisterComponent } from './RegisterComponent.tsx';
import { ContactUsComponent } from './ContactUsComponent.tsx';

const LoginOrRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <LocaleConsumer componentName={'LoginComponent'}>
      {(localeData: any, localeCode: string, dateFnsLocale: any) => (
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

          <div className="mt-20 items-center">
            <h1 className="text-xl font-bold mb-1">
              {localeData.VideoTutorial}
            </h1>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/MELZu08Gzfw?si=46TTH44UdnOceDqj&amp;start=402"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </Space>
      )}
    </LocaleConsumer>
  );
};

export default LoginOrRegisterPage;

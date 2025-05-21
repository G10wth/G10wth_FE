import { useState } from 'react';
import SocialKakaoLogin from '@/components/login/SocialKakao';
import DirectLoginForm from '@/components/login/DirectLoginForm';
import useAutoRedirect from '@/hooks/useAutoRedirect';
import AuthHeader from '@/components/common/AuthHeader';
import TopBar from '@/components/common/TopBar';

const LoginPage = () => {
  const [autoLogin, setAutoLogin] = useState(false);
  useAutoRedirect();

  return (
    <div>
      <TopBar title="로그인" />
      <div className="fixed max-w-[425px] w-full top-[60px] flex flex-col items-center justify-center gap-8 p-4">
        <AuthHeader step={0} />
        <DirectLoginForm autoLogin={autoLogin} setAutoLogin={setAutoLogin} />
        <div className="w-full flex items-center gap-4">
          <hr className="flex-grow border-t border-gray100" />
          <span className="my-4 text-center text-gray200">또는</span>
          <hr className="flex-grow border-t border-gray100" />
        </div>
        <SocialKakaoLogin autoLogin={autoLogin} />
      </div>
    </div>
  );
};

export default LoginPage;

import { IoArrowBack } from 'react-icons/io5';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SocialKakaoLogin from '@/components/login/SocialKakao';
import DirectLoginForm from '@/components/login/DirectLoginForm';
import useAutoRedirect from '@/hooks/useAutoRedirect';

const LoginPage = () => {
  const navigate = useNavigate();
  const [autoLogin, setAutoLogin] = useState(false);
  useAutoRedirect();

  return (
    <div>
      <header className="fixed max-w-[425px] w-full top-0 z-10 h-[60px] flex items-center text-end justify-between px-4 bg-white">
        <IoArrowBack
          onClick={() => navigate(-1)}
          aria-label="뒤로가기"
          className="w-6 h-6 text-black cursor-pointer"
        />
        <h2 className="text-base text-black font-semibold">로그인</h2>
        <button className="text-base text-orangeStrong" onClick={() => navigate('/signup/email')}>
          회원가입
        </button>
      </header>
      <div className="fixed max-w-[425px] w-full top-[60px] flex flex-col items-center justify-center gap-8 p-4">
        <div className="w-full space-y-1">
          <p className="text-black text-2xl font-bold">EasyPlace와 함께</p>
          <p className="text-black text-2xl font-bold">쉽게 갈 수 있는 장소로 바로!</p>
        </div>
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

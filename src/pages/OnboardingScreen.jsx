import LogoTitle from '@/assets/images/logo-title-img.png';
import { useNavigate } from 'react-router-dom';
import SocialKakaoLogin from '@/components/login/SocialKakao';

export default function WelcomeScreen() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen h-full overflow-hidden w-full bg-gradient-to-b from-[#FAC61A] via-[#F6931E] to-[#FE7615] flex flex-col justify-around items-center pt-24 pb-10">
      <div className="flex flex-col items-center gap-4">
        <img src="/logo.svg" alt="로고" />

        <div className="w-52 flex flex-col items-center gap-4">
          <p className="text-center text-black text-base font-semibold leading-snug">
            쉽게 갈 수 있는 장소
          </p>
          <img className="h-8 w-full object-contain" src={LogoTitle} alt="EasyPlace 로고" />
        </div>
      </div>

      <div className="w-full px-6 flex flex-col gap-6 items-center">
        <SocialKakaoLogin text={true}>카카오 로그인</SocialKakaoLogin>
        <button
          className="text-black text-sm font-semibold underline underline-offset-2"
          onClick={() => navigate('/login')}
        >
          이메일로 로그인 / 회원가입
        </button>
      </div>
    </div>
  );
}

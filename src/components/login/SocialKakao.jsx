import { REDIRECT_URI } from '@/constants/kakao.js';
import kakaoLoginBtn from '@/assets/icons/kakao_symbol.svg';
import useKakaoSdk from '@/hooks/useKakaoSdk.js';

const SocialKakaoLogin = ({ autoLogin = false, text = false }) => {
  useKakaoSdk();

  const handleKakaoLogin = () => {
    if (!window.Kakao) return console.error('Kakao SDK 로드 실패');

    window.Kakao.Auth.authorize({
      redirectUri: REDIRECT_URI,
      ...(autoLogin && { prompt: 'none' }), // 자동 로그인 체크 시 prompt 설정
    });
  };

  return (
    <div
      role="button"
      onClick={handleKakaoLogin}
      className={`
        flex items-center justify-center bg-[#FEE500] 
        ${!text ? 'w-[54px] h-[54px] rounded-full' : 'w-[310px] h-[50px] px-6 rounded-3xl shadow-md shadow-black/35'}`}
    >
      <img
        src={kakaoLoginBtn}
        alt="카카오 로그인 버튼"
        className="w-[24px] h-[24px] select-none cursor-pointer"
      />
      {text && (
        <span className="w-full text-center text-black/85 text-sm font-bold">
          카카오톡으로 로그인
        </span>
      )}
    </div>
  );
};
export default SocialKakaoLogin;

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useLogout = () => {
  const navigate = useNavigate();

  return async () => {
    try {
      // kakao SDK 초기화
      if (window.Kakao?.Auth?.getAccessToken()) {
        await new Promise(resolve =>
          window.Kakao.Auth.logout(() => {
            resolve();
            console.log('카카오 세션 로그아웃 완료');
          })
        );
      }
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      navigate('/login', { replace: true });
    } catch (err) {
      console.error('로그아웃 중 에러:', err);
      toast('로그아웃에 실패했습니다. 다시 시도해주세요.');
    }
  };
};

export default useLogout;

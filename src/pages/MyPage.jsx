import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MyPageButton from '@/components/mypage/MyPageButton';
import defaultProfileIcon from '@/assets/icons/profile-icon.svg';
import LoopLoading from '@/components/common/LoopLoading.jsx';
// import useRequireAuth from '@/hooks/useRequireAuth.js';
// import axios from '@/apis/axios-instance';

export default function MyPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    username: '',
    email: '',
    profileImage: '',
  });
  // useRequireAuth();
  useEffect(() => {
    // 사용자 정보 API 호출
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        // const res = await axios.get('/api/userInfo');
        // setUser(res.data);

        // 백엔드 연동 전 임시 mock 데이터 사용
        const mockUser = {
          username: '사용자24566',
          email: '@zlgkylym',
          profileImage: '/logo2.svg',
        };
        setUser(mockUser);
      } catch (err) {
        console.error('사용자 정보 불러오기 실패', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser().catch(console.error);
  }, []);

  const handleLogout = async () => {
    try {
      // 1. 카카오 SDK 세션 제거 (선택적)
      if (window.Kakao?.Auth?.getAccessToken()) {
        window.Kakao.Auth.logout(() => {
          console.log('카카오 세션 로그아웃 완료');
        });
      }
      // 토큰 삭제
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');

      // 3. 사용자 상태 초기화
      setUser({
        username: '',
        email: '',
        profileImage: '',
      });

      // 로그인 페이지로 이동
      navigate('/login');
    } catch (err) {
      console.error('로그아웃 중 오류 발생 : ', err);
      alert('로그아웃 실패. 다시 시도해주세요.');
    }
  };

  return (
    <div className="fixed max-w-[425px] w-full h-screen bg-bg">
      <div className="flex flex-col items-center w-full max-w-md bg-white shadow-[0px_3px_3px_-3px_rgba(0,0,0,0.4)] mx-auto p-10 space-y-6">
        <div className="w-full bg-white rounded-2xl p-4 shadow-[0px_0px_3px_rgba(0,0,0,0.4)] flex items-center gap-5">
          <img
            src={user.profileImage || defaultProfileIcon}
            alt="profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="text-base font-semibold text-black">{user.username}</p>
            <p className="text-xs text-gray200 leading-none">{user.email}</p>
          </div>
        </div>

        {/* 메뉴 리스트 */}
        <div className="w-full space-y-2 gap-2 flex flex-col">
          <MyPageButton text="나의 리뷰" onClick={() => navigate('/my-review')} />
          <MyPageButton text="내 정보 수정" onClick={() => navigate('/edit-profile')} />
          <MyPageButton text="고객센터" onClick={() => navigate('/contact')} />
          <MyPageButton text="로그아웃" onClick={handleLogout} />
        </div>
      </div>
      {isLoading && <LoopLoading />}
    </div>
  );
}

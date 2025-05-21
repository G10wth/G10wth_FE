import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoopLoading from '@/components/common/LoopLoading';
import axios from 'axios';

const KakaoRedirection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  let called = false;

  useEffect(() => {
    const handleKakaoRedirect = async () => {
      if (called) return; // 두 번째 호출 방지
      called = true;

      const code = new URL(window.location.href).searchParams.get('code');
      if (!code) return;

      try {
        setIsLoading(true);
        const res = await axios.post('/api/auth/kakao', { code });
        const { token } = res.data;
        localStorage.setItem('token', token);
        navigate('/');
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response) {
            // 서버가 4xx, 5xx 응답을 반환한 경우
            if (err.response.data?.reason === 'consent_required') {
              alert('필수 동의 항목을 확인해주세요.');
            } else {
              alert(
                `오류가 발생했습니다: ${err.response.status} - ${err.response.data?.message || '문제가 발생했어요.'}`
              );
            }
          } else if (err.request) {
            alert('서버로부터 응답이 없습니다. 인터넷 연결을 확인해 주세요.');
          } else {
            alert('요청을 보내는 중 오류가 발생했습니다.');
          }
        } else {
          // axios 에러가 아닌 경우
          alert('예상치 못한 에러가 발생했습니다.');
        }
        navigate('/login'); // 에러 발생 시 로그인 페이지로 리디렉션
      } finally {
        setIsLoading(false);
      }
    };

    handleKakaoRedirect().catch(console.error);
  }, [navigate]);

  return <>{isLoading && <LoopLoading />}</>;
};

export default KakaoRedirection;

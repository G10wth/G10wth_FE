import { useEffect } from 'react';
import { REST_API_KEY } from '@/constants/kakao';

const useKakaoSdk = () => {
  useEffect(() => {
    // 이미 SDK가 로드되었는지 확인
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(REST_API_KEY);
        console.log('✅ Kakao SDK 초기화 완료');
      }
    } else {
      // SDK script 동적 로드
      const script = document.createElement('script');
      script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
      script.async = true;
      script.onload = () => {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(REST_API_KEY);
          console.log('✅ Kakao SDK 로드 및 초기화');
        }
      };
      document.head.appendChild(script);
    }
  }, []);
};

export default useKakaoSdk;

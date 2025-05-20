import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from '@/routes/mainRoutes';
import LoopLoading from '@/components/common/LoopLoading';
import { Suspense } from 'react';
import { REST_API_KEY } from '@/constants/kakao.js';

export default function App() {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(REST_API_KEY);
      console.log('✅ Kakao SDK initialized');
    }
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<LoopLoading />}>
        <MainRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

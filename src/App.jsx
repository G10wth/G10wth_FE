import { BrowserRouter } from 'react-router-dom';
import MainRoutes from '@/routes/mainRoutes';
import LoopLoading from '@/components/common/LoopLoading';
import { Suspense } from 'react';

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoopLoading />}>
        <MainRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

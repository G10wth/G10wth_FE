import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Main = lazy(() => import('@/pages/MainPage'));
const MyPage = lazy(() => import('@/pages/MyPage'));
const Layout = lazy(() => import('@/layouts/Layout'));
const ErrorPage = lazy(() => import('@/pages/ErrorPage'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const OnboardingScreen = lazy(() => import('@/pages/OnboardingScreen'));
const LoopLoading = lazy(() => import('@/components/common/LoopLoading'));

export default function MainRoutes() {
  return (
    <Suspense fallback={<LoopLoading />}>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route index element={<Main />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="/onboarding" element={<OnboardingScreen />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Main = lazy(() => import('@/pages/MainPage'));
const StoreDetail = lazy(() => import('@/pages/StoreDetailPage'));
const MyPage = lazy(() => import('@/pages/MyPage'));
const CommunityPage = lazy(() => import('@/pages/CommunityPage'));
const FavoritePage = lazy(() => import('@/pages/FavoritePage'));
const Layout = lazy(() => import('@/layouts/Layout'));
const ErrorPage = lazy(() => import('@/pages/ErrorPage'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const OnboardingScreen = lazy(() => import('@/pages/OnboardingScreen'));
const KakaoRedirection = lazy(() => import('@/pages/KakaoRedirection.jsx'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const LoopLoading = lazy(() => import('@/components/common/LoopLoading'));

export default function MainRoutes() {
  return (
    <Suspense fallback={<LoopLoading />}>
      <Routes>
        <Route path="/oauth" element={<KakaoRedirection />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route index element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/store-list/:id" element={<StoreDetail />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/onboarding" element={<OnboardingScreen />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

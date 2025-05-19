import { Outlet, useLocation } from 'react-router-dom';
import BottomNavbar from '@/layouts/BottomNavbar';
import Header from '@/layouts/Header';

export default function Layout({ children }) {
  const location = useLocation();
  const isOnboardingRoute = location.pathname.startsWith('/onboarding');

  return (
    <div className="min-h-screen w-full flex-col bg-white pb-24">
      <div className="flex-1">{children || <Outlet />}</div>
      {!isOnboardingRoute && (
        <>
          <Header />
          <BottomNavbar />
        </>
      )}
    </div>
  );
}

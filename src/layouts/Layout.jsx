import { Outlet } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full flex-col bg-white pb-24">
      <div className="flex-1">{children || <Outlet />}</div>
    </div>
  );
}

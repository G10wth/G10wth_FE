import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiHeart, FiUsers, FiSettings } from 'react-icons/fi';

export default function BottomNavbar() {
  const { pathname } = useLocation();

  const isActive = route => pathname === route;

  const iconStyle = active => `w-6 h-6 ${active ? 'text-black' : 'text-[#767676]'}`;
  const labelStyle = active =>
    `text-xs ${active ? 'text-black font-semibold' : 'text-[#767676] font-medium'}`;

  const menuList = [
    {
      label: 'Home',
      to: '/',
      icon: <FiHome className={iconStyle(isActive('/'))} />,
      active: isActive('/'),
    },
    {
      label: 'Favorites',
      to: '/gallery',
      icon: <FiHeart className={iconStyle(isActive('/gallery'))} />,
      active: isActive('/gallery'),
    },
    {
      label: 'Community',
      to: '/map',
      icon: <FiUsers className={iconStyle(isActive('/map'))} />,
      active: isActive('/map'),
    },
    {
      label: 'My page',
      to: '/mypage',
      icon: <FiSettings className={iconStyle(isActive('/mypage'))} />,
      active: isActive('/mypage'),
    },
  ];

  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-10 flex w-full max-w-[425px] items-center justify-around bg-white h-[70px] px-2"
      style={{ boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.1)' }}
    >
      {menuList.map(menu => (
        <Link
          key={menu.to}
          to={menu.to}
          title={menu.label}
          className="flex flex-col items-center justify-center gap-1"
        >
          {menu.icon}
          <span className={labelStyle(menu.active)}>{menu.label}</span>
        </Link>
      ))}
    </nav>
  );
}

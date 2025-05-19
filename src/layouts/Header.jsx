import { FiBell, FiUser } from 'react-icons/fi';
import LogoTitle from '@/assets/images/logo-title-img.png';
import profileIcon from '@/assets/icons/profile-icon.svg';

export default function Header({ type = 'main', title = '' }) {
  return (
    <header
      className="fixed max-w-[425px] w-full top-0 left-1/2 -translate-x-1/2 z-10 h-[60px] flex items-center justify-between px-4 bg-white"
      style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
    >
      {type === 'main' ? (
        <>
          <img
            role="button"
            src={LogoTitle}
            alt="로고 타이틀"
            className="w-[130px] pt-1 select-none cursor-pointer"
          />
          <div className="flex items-center gap-4">
            <FiBell className="w-6 h-6 text-black cursor-pointer" />
            <img src={profileIcon} alt="프로필" className="w-6 h-6 cursor-pointer" />
          </div>
        </>
      ) : (
        <div className="w-full text-center">
          <h2 className="text-base font-semibold">{title}</h2>
        </div>
      )}
    </header>
  );
}

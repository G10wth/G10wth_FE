import { useLocation } from 'react-router-dom';
import { FiBell } from 'react-icons/fi';
import LogoTitle from '@/assets/images/logo-title-img.png';
import profileIcon from '@/assets/icons/profile-icon.svg';

export default function Header() {
  const { pathname } = useLocation();

  // 정규식으로 /store/숫자 인지 확인
  const isStoreDetail = /^\/store-list\/\d+$/.test(pathname);

  return (
    <header
      className="fixed max-w-[425px] w-full top-0 left-1/2 -translate-x-1/2 z-10 h-[60px] flex items-center justify-between px-4 bg-white"
      style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
    >
      {isStoreDetail ? (
        <div className="w-full text-center">
          <h2 className="text-base text-black font-semibold">세부정보</h2>
        </div>
      ) : (
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
      )}
    </header>
  );
}

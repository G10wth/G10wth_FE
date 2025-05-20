import { useLocation, useNavigate } from 'react-router-dom';
import { FiBell, FiChevronLeft } from 'react-icons/fi';
import LogoTitle from '@/assets/images/logo-title-img.png';
import profileIcon from '@/assets/icons/profile-icon.svg';

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isStoreDetail = /^\/store-list\/\d+$/.test(pathname);
  const isCreateReview = pathname === '/create-review';

  return (
    <header
      className="fixed max-w-[425px] w-full top-0 left-1/2 -translate-x-1/2 z-10 h-[60px] flex items-center justify-between px-4 bg-white"
      style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
    >
      {isStoreDetail ? (
        <div className="w-full text-center">
          <h2 className="text-base text-black font-semibold">세부정보</h2>
        </div>
      ) : isCreateReview ? (
        <div className="flex items-center justify-center w-full relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 text-black"
            aria-label="뒤로가기"
          >
            <FiChevronLeft size={20} />
          </button>
          <h2 className="text-base text-black font-semibold">새로운 리뷰 작성</h2>
        </div>
      ) : (
        <>
          <img
            role="button"
            src={LogoTitle}
            alt="로고 타이틀"
            className="w-[130px] pt-1 select-none cursor-pointer"
            onClick={() => navigate('/')}
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

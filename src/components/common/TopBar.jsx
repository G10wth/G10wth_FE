import { useLocation, useNavigate } from 'react-router-dom';
import TextButton from '@/components/common/TextButton';
import { FiChevronLeft } from 'react-icons/fi';

const TopBar = ({ title }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="fixed left-1/2 transform -translate-x-1/2 max-w-[425px] w-full top-0 z-10 h-[60px] flex items-center text-end justify-between px-4 bg-white">
      <FiChevronLeft
        size={20}
        onClick={() => navigate(-1)}
        aria-label="뒤로가기"
        className="w-6 h-6 text-black cursor-pointer"
      />
      <h2 className="fixed w-full left-1/2 transform -translate-x-1/2 -z-10 text-center text-base text-black font-semibold">
        {title}
      </h2>
      {location.pathname === '/login' && (
        <TextButton text="회원가입" color="text-orangeStrong" onClick={() => navigate('/signup')} />
      )}

      {location.pathname === '/signup' && (
        <TextButton text="로그인" color="text-orangeStrong" onClick={() => navigate('/login')} />
      )}
    </header>
  );
};

export default TopBar;

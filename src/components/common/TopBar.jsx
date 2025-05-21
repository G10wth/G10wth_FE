import { IoArrowBack } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';

const TopBar = ({ title }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="fixed max-w-[425px] w-full top-0 z-10 h-[60px] flex items-center text-end justify-between px-4 bg-white">
      <IoArrowBack
        onClick={() => navigate(-1)}
        aria-label="뒤로가기"
        className="w-6 h-6 text-black cursor-pointer"
      />
      <h2 className="text-base text-black font-semibold">{title}</h2>
      {location.pathname === '/login' && (
        <button className="text-base text-orangeStrong" onClick={() => navigate('/signup')}>
          회원가입
        </button>
      )}

      {location.pathname === '/signup' && (
        <button className="text-base text-orangeStrong" onClick={() => navigate('/login')}>
          로그인
        </button>
      )}
    </header>
  );
};

export default TopBar;

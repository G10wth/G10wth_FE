import { GoChevronRight } from 'react-icons/go';

const MyPageButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-3xl px-3 py-2 shadow-[0px_0px_3px_rgba(0,0,0,0.4)] flex justify-between items-center
        ${text === '로그아웃' ? 'bg-red-500' : 'bg-white'}`}
    >
      <span
        className={`w-full text-sm font-medium
        ${text === '로그아웃' ? 'text-white' : ' text-black pl-5'}`}
      >
        {text}
      </span>
      {text !== '로그아웃' ? <GoChevronRight size={20} /> : null}
    </button>
  );
};

export default MyPageButton;

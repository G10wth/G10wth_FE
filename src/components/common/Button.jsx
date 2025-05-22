const Button = ({ text, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 rounded-[8px]
        ${
          text === '취소'
            ? 'bg-white border border-gray200 text-black'
            : disabled
              ? 'bg-gray-200 text-gray200 font-medium'
              : 'bg-orangeStrong text-white'
        }`}
    >
      {text}
    </button>
  );
};

export default Button;

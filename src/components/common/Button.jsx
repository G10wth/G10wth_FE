const Button = ({ text, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 rounded-[8px]
        ${disabled ? 'bg-gray-200 text-gray200 font-medium' : 'bg-orangeStrong text-white'}`}
    >
      {text}
    </button>
  );
};

export default Button;

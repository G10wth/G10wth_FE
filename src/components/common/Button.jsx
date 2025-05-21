const Button = ({ text, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-3.5 rounded-[8px]
        ${disabled ? 'bg-gray-300 text-gray-500' : 'bg-orangeStrong text-white'}`}
    >
      {text}
    </button>
  );
};

export default Button;

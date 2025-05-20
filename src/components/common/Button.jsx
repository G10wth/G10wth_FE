const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="w-full py-3.5 rounded-[8px] bg-orangeStrong text-white">
      {text}
    </button>
  );
};

export default Button;

const TextButton = ({ text, color, onClick }) => {
  return (
    <button className={`w-fit text-sm font-medium bg-transparent ${color}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default TextButton;

const UpdateButton = ({ section, text, onClick }) => {
  return (
    <button
      className={`${section === 'pwd' ? 'w-full' : 'min-w-24'} 
        h-[46px] px-5 my-2 bg-peach text-orangeStrong rounded-lg text-sm`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default UpdateButton;

import CreateReviewIcon from '@/assets/icons/create-review-icon.svg';
import { useNavigate } from 'react-router-dom';

const CreateReviewButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/create-review')}
      className="relative flex items-center bg-white rounded-full w-full px-6 py-2 shadow-[0px_0px_2px_rgba(0,0,0,0.5)]"
    >
      <img className="absolute left-6 size-[14px]" src={CreateReviewIcon} alt="리뷰 쓰기" />
      <span className="mx-auto text-xs text-black font-medium">새로운 리뷰 작성</span>
    </button>
  );
};

export default CreateReviewButton;

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ReviewCard = ({ imageUrl, title, rating, content, date }) => {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_0px_3px_rgba(0,0,0,0.4)] p-4 flex gap-4">
      <img src={imageUrl} alt={title} className="w-24 h-24 rounded-lg object-cover" />
      <div className="flex flex-col mr-3">
        <div className="flex flex-row justify-between mt-1 mb-2">
          <div className="font-bold text-xs text-black">{title}</div>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) =>
              i < rating ? (
                <AiFillStar key={i} size={13} className="text-black" />
              ) : (
                <AiOutlineStar key={i} size={13} className="text-black" />
              )
            )}
          </div>
        </div>
        <div className="h-full text-[10px] text-gray-600 line-clamp-3">{content}</div>
        <div className="text-[10px] text-gray-400">{date}</div>
      </div>
    </div>
  );
};

export default ReviewCard;

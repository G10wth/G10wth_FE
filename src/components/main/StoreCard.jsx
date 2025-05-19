import { useState } from 'react';
import { AiFillStar, AiOutlineStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default function StoreCard({
  imageUrl,
  name,
  category,
  isOpen,
  distance,
  icons = [],
  rating = 0,
  isLiked = false,
  onToggleLike,
}) {
  const [liked, setLiked] = useState(isLiked);

  const handleLikeClick = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    if (onToggleLike) onToggleLike(newLiked);
  };

  return (
    <div className="flex gap-3 p-3 bg-white rounded-2xl border border-gray-100 shadow-sm max-w-md w-full">
      {/* 썸네일 */}
      <img src={imageUrl} alt={name} className="w-24 h-24 rounded-xl object-cover flex-shrink-0" />

      {/* 본문 */}
      <div className="flex flex-col flex-1 justify-between">
        {/* 상단: 타이틀 + 하트 */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-black">{name}</h3>
            <p className="text-sm text-gray200">
              {category} ·{' '}
              <span className={isOpen ? 'text-green-500 font-medium' : 'text-gray300'}>
                {isOpen ? '영업중' : '영업종료'}
              </span>
            </p>
            <p className="text-xs text-gray300">{distance}</p>
          </div>
          <button onClick={handleLikeClick} className="p-1">
            {liked ? (
              <AiFillHeart className="text-red-500 w-5 h-5" />
            ) : (
              <AiOutlineHeart className="w-5 h-5 text-gray300" />
            )}
          </button>
        </div>

        {/* 중간: 아이콘들 */}
        <div className="flex gap-2 mt-1">
          {icons.map((Icon, index) => (
            <Icon key={index} className="w-4 h-4 text-black" />
          ))}
        </div>

        {/* 하단: 별점 */}
        <div className="flex mt-1">
          {[1, 2, 3, 4, 5].map(i =>
            i <= rating ? (
              <AiFillStar key={i} className="text-black w-4 h-4" />
            ) : (
              <AiOutlineStar key={i} className="text-black w-4 h-4" />
            )
          )}
        </div>
      </div>
    </div>
  );
}

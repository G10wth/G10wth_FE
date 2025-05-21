import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';

const CommunityCard = ({ username, userHandle, profileImage, content, image }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full h-auto relative p-3">
      <div className="flex items-center space-x-2">
        <img src={profileImage} alt="profile" className="w-7 h-7 rounded-full" />
        <div>
          <div className="text-xs font-medium text-black">{username}</div>
          <div className="text-xs text-zinc-400">{userHandle}</div>
        </div>
        <div className="absolute top-2 right-2 flex space-x-1">
          <div className="w-[2.36px] h-[2.36px] bg-black rounded-full" />
          <div className="w-[2.36px] h-[2.36px] bg-black rounded-full" />
          <div className="w-[2.36px] h-[2.36px] bg-black rounded-full" />
        </div>
      </div>

      <p className="mt-3 text-xs text-neutral-500 font-medium leading-snug">{content}</p>

      <img src={image} alt="content" className="mt-4 w-full h-40 object-cover rounded-2xl" />

      <div className="mt-2 flex space-x-4">
        <button onClick={() => setLiked(prev => !prev)}>
          {liked ? (
            <AiFillHeart className="text-red-500 w-4 h-4" />
          ) : (
            <AiOutlineHeart className="text-black w-4 h-4" />
          )}
        </button>
        <FaRegCommentDots className="w-4 h-4 text-neutral-800" />
      </div>
    </div>
  );
};

export default CommunityCard;

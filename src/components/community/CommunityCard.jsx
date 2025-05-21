import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import CommentModal from './CommentModal';

const CommunityCard = ({ username, userHandle, profileImage, content, image }) => {
  const [liked, setLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full h-auto relative p-3 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={profileImage} alt="profile" className="w-7 h-7 rounded-full" />
          <div>
            <div className="text-xs font-medium text-black">{username}</div>
            <div className="text-xs text-zinc-400">{userHandle}</div>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowModal(prev => !prev)}
            className="flex flex-col justify-center items-center w-6 h-6"
          >
            <div className="w-[2.5px] h-[2.5px] bg-black rounded-full mb-[2px]" />
            <div className="w-[2.5px] h-[2.5px] bg-black rounded-full mb-[2px]" />
            <div className="w-[2.5px] h-[2.5px] bg-black rounded-full" />
          </button>

          {showModal && (
            <div className="absolute top-0 right-[120px] mr-2">
              <CommentModal onClose={() => setShowModal(false)} />
            </div>
          )}
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

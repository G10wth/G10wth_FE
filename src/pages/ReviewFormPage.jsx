import { useState, useRef } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import StoreCard from '@/components/main/StoreCard';
import StoreImg from '@/assets/images/sample/storeImg.png';

export default function ReviewFormPage() {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const mockStore = {
    imageUrl: StoreImg,
    name: '솔담커피',
    category: '카페',
    isOpen: true,
    distance: '0.5 km',
    icons: [],
    rating: 4,
    isLiked: false,
  };

  const handleImageSelect = e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full mx-auto bg-white text-black h-screen px-5 pt-6">
      <StoreCard {...mockStore} onToggleLike={() => {}} onClick={() => {}} />

      <div className="text-center mt-8">
        <h4 className="text-sm font-semibold">장소는 어떠셨나요?</h4>
        <p className="text-xs text-zinc-400 mt-1">장소에 대한 별점을 메겨주세요</p>
        <div className="flex justify-center gap-2 mt-3">
          {[1, 2, 3, 4, 5].map(i =>
            i <= rating ? (
              <AiFillStar
                key={i}
                size={20}
                onClick={() => setRating(i)}
                className="text-yellow-400 cursor-pointer"
              />
            ) : (
              <AiOutlineStar
                key={i}
                size={20}
                onClick={() => setRating(i)}
                className="text-zinc-400 cursor-pointer"
              />
            )
          )}
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-400 pt-6">
        <div className="flex gap-4 mb-4">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageSelect}
          />
          <button
            type="button"
            className="w-20 h-20 rounded-[10px] overflow-hidden"
            onClick={() => fileInputRef.current?.click()}
          >
            {previewImage ? (
              <img src={previewImage} alt="선택한 이미지" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-neutral-700 flex items-center justify-center text-white text-2xl font-light">
                +
              </div>
            )}
          </button>
        </div>
        <hr className="border-zinc-400 mb-6" />
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          className="rounded-md w-full h-32 resize-none p-3 text-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-zinc-400 placeholder:text-zinc-400"
          placeholder="최소 15자 이상 작성해주세요."
        />
      </div>

      <div className="mt-6 border-t border-zinc-400 pt-4">
        <button
          disabled={text.length < 15 || rating === 0}
          className="w-full h-12 bg-peach hover:bg-peach-hover active:bg-peach-active text-orangePrimary rounded-lg text-sm font-medium disabled:bg-lightGray-active disabled:text-darkGray"
        >
          등록하기
        </button>
      </div>
    </div>
  );
}

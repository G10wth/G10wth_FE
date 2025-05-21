import { useState } from 'react';
import SearchBar from '@/components/common/SearchBar';
import StoreCard from '@/components/main/StoreCard';

import { PiWheelchair, PiToilet, PiEye, PiSpeakerSimpleHigh } from 'react-icons/pi';

export default function FavoritePage() {
  const [search, setSearch] = useState('');

  const storeList = [
    {
      name: '솔담커피',
      category: '카페',
      isOpen: true,
      distance: '0.5 miles',
      rating: 4,
      imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
      icons: [PiWheelchair, PiToilet, PiEye],
      isLiked: true,
    },
    {
      name: '버터리포트',
      category: '디저트 카페',
      isOpen: true,
      distance: '1.2 miles',
      rating: 5,
      imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
      icons: [PiWheelchair, PiToilet],
      isLiked: true,
    },
    {
      name: '파스타 정류장',
      category: '음식점',
      isOpen: true,
      distance: '0.5 miles',
      rating: 4,
      imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
      icons: [PiWheelchair, PiEye, PiSpeakerSimpleHigh],
      isLiked: true,
    },
    {
      name: '치킨 연구소',
      category: '음식점',
      isOpen: false,
      distance: '0.5 miles',
      rating: 3,
      imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
      icons: [PiWheelchair, PiToilet],
      isLiked: true,
    },
  ];

  const handleSearch = keyword => {
    setSearch(keyword);
  };

  const filteredStores = storeList.filter(store =>
    store.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center w-full px-4 pt-6 pb-10 gap-4">
      <SearchBar placeholder="검색" onSubmit={handleSearch} />

      {filteredStores.map((store, index) => (
        <StoreCard
          key={index}
          imageUrl={store.imageUrl}
          name={store.name}
          category={store.category}
          isOpen={store.isOpen}
          distance={store.distance}
          rating={store.rating}
          icons={store.icons}
          isLiked={store.isLiked}
          onToggleLike={liked => {
            console.log(`${store.name} 즐겨찾기 상태:`, liked);
          }}
        />
      ))}
    </div>
  );
}

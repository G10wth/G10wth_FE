import { useEffect, useState } from 'react';
import { Container as MapDiv, NaverMap, Marker } from 'react-naver-maps';

import { PiWheelchair, PiToilet, PiEye } from 'react-icons/pi';

import SearchBar from '@/components/common/SearchBar';
import StoreCard from '@/components/main/StoreCard';
import BottomSheetFilter from '@/components/main/BottomSheetFilter';
import LoopLoading from '@/components/common/LoopLoading';

const mockStoreList = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1',
    name: '솔담커피',
    category: '카페',
    isOpen: true,
    distance: '0.5 miles',
    icons: [PiWheelchair, PiToilet, PiEye],
    rating: 4,
    isLiked: false,
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    name: '힐링베이커리',
    category: '베이커리',
    isOpen: false,
    distance: '1.2 miles',
    icons: [PiWheelchair, PiEye],
    rating: 5,
    isLiked: true,
  },
];

export default function MainPage() {
  const [view, setView] = useState('map');
  const [myLocation, setMyLocation] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      alert('이 브라우저에서는 위치 기능을 사용할 수 없습니다.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        setMyLocation({ lat: latitude, lng: longitude });
      },
      err => {
        console.error('위치 접근 실패:', err);
        alert('위치 정보를 가져오는 데 실패했습니다.');
      }
    );
  }, []);

  if (!myLocation) return <LoopLoading />;

  return (
    <div className="relative w-full h-screen max-w-md mx-auto flex flex-col bg-white">
      <div className="fixed max-w-[425px] bg-white top-15 z-10 w-full px-4 py-5">
        <SearchBar onSubmit={text => console.log('검색:', text)} />
      </div>

      {view === 'map' ? (
        <MapDiv className="w-full h-full">
          <NaverMap defaultCenter={myLocation} defaultZoom={16} onClick={() => {}}>
            <Marker position={myLocation} />
          </NaverMap>
        </MapDiv>
      ) : (
        <div className="px-4 pt-20 flex flex-col gap-4 overflow-y-auto pb-32">
          {mockStoreList.map(store => (
            <StoreCard
              key={store.id}
              imageUrl={store.imageUrl}
              name={store.name}
              category={store.category}
              isOpen={store.isOpen}
              distance={store.distance}
              icons={store.icons}
              rating={store.rating}
              isLiked={store.isLiked}
              onToggleLike={liked => console.log(`${store.name} 찜 상태:`, liked)}
            />
          ))}
        </div>
      )}

      <BottomSheetFilter selected={view} onChange={setView} />
    </div>
  );
}

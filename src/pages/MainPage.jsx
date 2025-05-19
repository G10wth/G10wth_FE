import { useEffect, useState } from 'react';
import { Container as MapDiv, NaverMap, Marker } from 'react-naver-maps';

import SearchBar from '@/components/common/SearchBar';
import BottomSheetFilter from '@/components/main/BottomSheetFilter';
import LoopLoading from '@/components/common/LoopLoading';

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
      <div className="absolute top-5 z-10 w-full px-4">
        <SearchBar onSubmit={text => console.log('검색:', text)} />
      </div>

      {view === 'map' ? (
        <MapDiv className="w-full h-full">
          <NaverMap defaultCenter={myLocation} defaultZoom={16} onClick={() => {}}>
            <Marker position={myLocation} />
          </NaverMap>
        </MapDiv>
      ) : (
        <div className="w-full h-full flex justify-center items-center">리스트 보여주기</div>
      )}

      <BottomSheetFilter selected={view} onChange={setView} />
    </div>
  );
}

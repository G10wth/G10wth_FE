import { useState } from 'react';

import SearchBar from '@/components/common/SearchBar';
import ViewToggle from '@/components/main/ViewToggle';

export default function MainPage() {
  const [view, setView] = useState('map');

  return (
    <div className="flex-col flex">
      <p className="p-5 text-lg text-darkGray hover:text-darkGray-hover active:text-darkGray-active cursor-pointer">
        메인페이지 테스트
      </p>
      <SearchBar onSubmit={text => console.log('검색:', text)} />
      <div className="p-4 mx-auto justify-center">
        <ViewToggle selected={view} onChange={setView} />

        {view === 'map' ? <div>지도 보여주기</div> : <div>리스트 보여주기</div>}
      </div>
    </div>
  );
}

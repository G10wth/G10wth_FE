import SearchBar from '@/components/common/SearchBar';

export default function MainPage() {
  return (
    <div>
      <p className="text-lg text-darkGray hover:text-darkGray-hover active:text-darkGray-active cursor-pointer">
        메인페이지 테스트
      </p>
      <SearchBar onSubmit={text => console.log('검색:', text)} />
    </div>
  );
}

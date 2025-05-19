import { useParams } from 'react-router-dom';

export default function StoreDetailPage() {
  const { id } = useParams();
  return (
    <div className="text-black">
      <p>메인페이지 &gt; 리스트에서 가게 클릭 시</p>
      <p>Store ID: {id}</p>
    </div>
  );
}

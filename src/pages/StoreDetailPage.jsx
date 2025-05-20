import { useNavigate } from 'react-router-dom';

import { PiWheelchair, PiToilet, PiEye } from 'react-icons/pi';
import { FiClock, FiPhone } from 'react-icons/fi';
import CreateReviewIcon from '@/assets/icons/create-review-icon.svg';

import StoreImg from '@/assets/images/sample/storeImg.png';

const mockStore = {
  name: '솔담커피',
  category: '카페',
  isOpen: true,
  distance: '0.5km',
  rating: 5,
  imageUrl: StoreImg,
  icons: [
    { label: '휠체어 출입 가능', icon: PiWheelchair },
    { label: '장애인 화장실', icon: PiToilet },
    { label: '점자 메뉴', icon: PiEye },
  ],
  description: `
    솔담 커피는 조용한 주택가 골목에 위치한 한옥 감성 카페로, 소나무의 고요함과 담백한
    공간미를 담아냈습니다. 직접 내린 드립커피와 전통 다과가 어우러지며, 나무창 너머로 햇살이
    스며드는 아늑한 분위기 속에서 휴식을 즐길 수 있습니다. 혼자 머물기에도, 대화를 나누기에도
    좋은 공간입니다.
  `,
  businessHours: {
    weekdays: '월~금 : 9:00 AM - 8:00 PM',
    saturday: '토 : 10:00 AM - 6:00 PM',
    sunday: '일 : 12:00 PM - 5:00 PM',
  },
  contact: {
    phone: '(555) 123-4567',
    email: 'info@grandlibrary.org',
    website: 'www.grandlibrary.org',
  },
  reviews: [
    {
      id: 1,
      title: '힐링되는 한옥 카페',
      date: '2025.04.11',
      text: '솔담 커피는 처음 가봤는데 마치 시간이 멈춘 듯한 분위기였어요...',
    },
    {
      id: 2,
      title: '함께 가기 좋은 곳',
      date: '2025.05.16',
      text: '주말 늦은 오후에 방문했는데 북적이지 않고 조용해서...',
    },
    {
      id: 3,
      title: '혼카페하기 좋은 곳',
      date: '2025.05.17',
      text: '매일 출근 전 아메리카노 한 잔 마시러 들르는데...',
    },
  ],
};

export default function StoreDetail() {
  const store = mockStore;
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md mx-auto bg-white text-black min-h-screen pb-10">
      <img src={store.imageUrl} alt={store.name} className="w-full h-64 object-cover" />

      <div className="px-6 pt-4">
        <h3 className="text-lg font-semibold">{store.name}</h3>
        <p className="text-sm text-neutral-500">
          {store.category} ·{' '}
          <span className={store.isOpen ? 'text-emerald-500' : 'text-red-400'}>
            {store.isOpen ? '영업중' : '영업종료'}
          </span>{' '}
          · {store.distance}
        </p>

        <div className="flex items-center gap-1 mt-2">
          {[...Array(store.rating)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-black rounded-full" />
          ))}
        </div>

        <div className="flex flex-col gap-1 text-sm text-black mt-4">
          {store.icons.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon size={16} /> {item.label}
            </div>
          ))}
        </div>

        <p className="text-sm text-neutral-600 mt-4 leading-relaxed">{store.description}</p>

        <div className="mt-6">
          <h4 className="font-semibold text-sm flex items-center gap-2">
            <FiClock /> 영업시간
          </h4>
          <p className="text-sm text-neutral-600 space-y-1 mt-2">
            <p>{store.businessHours.weekdays}</p>
            <p>{store.businessHours.saturday}</p>
            <p>{store.businessHours.sunday}</p>
          </p>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-sm flex items-center gap-2">
            <FiPhone /> 연락처
          </h4>
          <div className="text-sm space-y-1 text-neutral-600 mt-2">
            <p>Phone: {store.contact.phone}</p>
            <p>Email: {store.contact.email}</p>
            <p>Website: {store.contact.website}</p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-sm mb-3">리뷰</h4>
          <div className="flex flex-col gap-4">
            {store.reviews.map(review => (
              <div
                key={review.id}
                className="bg-white rounded-2xl shadow-[0px_0px_2px_rgba(0,0,0,0.5)] p-4 flex gap-3"
              >
                <div className="w-24 h-24 bg-neutral-100 rounded-xl" />
                <div className="flex-1 text-[10px] text-neutral-700">
                  <h5 className="text-[11px] font-semibold text-black mb-1">{review.title}</h5>
                  <p className="leading-[1.2] mb-1">{review.text}</p>
                  <span className="text-neutral-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 w-full flex justify-center">
          <button
            onClick={() => navigate('/create-review')}
            className="relative flex items-center bg-white rounded-full w-full px-6 py-2 shadow-[0px_0px_2px_rgba(0,0,0,0.5)]"
          >
            <img className="absolute left-6 size-[14px]" src={CreateReviewIcon} alt="리뷰 쓰기" />
            <span className="mx-auto text-xs text-black font-medium">새로운 리뷰 작성</span>
          </button>
        </div>
      </div>
    </div>
  );
}

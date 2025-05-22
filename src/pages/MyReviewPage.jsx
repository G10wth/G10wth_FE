import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import storeImg from '@/assets/images/sample/storeImg.png';
import CreateReviewButton from '@/components/common/CreateReviewButton';

const mockReviews = [
  {
    id: 1,
    imageUrl: storeImg,
    title: '힐링되는 하우스 카페',
    rating: 4,
    content:
      '하루를 기분 좋게 시작하고 마무리할 수 있었던 분위기였습니다. 조용하고 감성적인 공간에서 힐링하고 싶다면 추천합니다.',
    date: '2025.04.11',
  },
  {
    id: 2,
    imageUrl: storeImg,
    title: '함께 가기 좋은 곳',
    rating: 5,
    content:
      '친구와 수다 떨며 보내기 좋은 공간이었어요. 음료와 디저트 모두 만족스러웠고, 다음에 또 방문하고 싶네요.',
    date: '2025.05.16',
  },
  {
    id: 3,
    imageUrl: storeImg,
    title: '혼카페하기 좋은 곳',
    rating: 4,
    content:
      '혼자만의 시간을 보내기 좋았고 조용해서 집중도 잘 됐어요. 디저트도 꽤 괜찮았고, 전체적으로 가격 대비 만족스러움.',
    date: '2025.05.17',
  },
  {
    id: 4,
    imageUrl: storeImg,
    title: '혼카페하기 좋은 곳',
    rating: 4,
    content:
      '혼자만의 시간을 보내기 좋았고 조용해서 집중도 잘 됐어요. 디저트도 꽤 괜찮았고, 전체적으로 가격 대비 만족스러움.',
    date: '2025.05.17',
  },
  {
    id: 5,
    imageUrl: storeImg,
    title: '혼카페하기 좋은 곳',
    rating: 4,
    content:
      '혼자만의 시간을 보내기 좋았고 조용해서 집중도 잘 됐어요. 디저트도 꽤 괜찮았고, 전체적으로 가격 대비 만족스러움.',
    date: '2025.05.17',
  },
  {
    id: 6,
    imageUrl: storeImg,
    title: '혼카페하기 좋은 곳',
    rating: 4,
    content:
      '혼자만의 시간을 보내기 좋았고 조용해서 집중도 잘 됐어요. 디저트도 꽤 괜찮았고, 전체적으로 가격 대비 만족스러움.',
    date: '2025.05.17',
  },
  {
    id: 7,
    imageUrl: storeImg,
    title: '혼카페하기 좋은 곳',
    rating: 4,
    content:
      '혼자만의 시간을 보내기 좋았고 조용해서 집중도 잘 됐어요. 디저트도 꽤 괜찮았고, 전체적으로 가격 대비 만족스러움.',
    date: '2025.05.17',
  },
];

const MyReviewPage = () => {
  return (
    <div className="fixed max-w-[425px] w-full max-h-[calc(100vh-130px)] top-[60px] overflow-auto space-y-6 p-7">
      <div className="flex flex-col gap-5">
        {mockReviews.map(review => (
          <div
            key={review.id}
            className="bg-white rounded-2xl shadow-[0px_0px_3px_rgba(0,0,0,0.4)] p-4 flex gap-4"
          >
            <img
              src={review.imageUrl}
              alt={review.title}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex flex-col mr-3">
              <div className="flex flex-row justify-between mt-1 mb-2">
                <div className="font-bold text-xs text-black">{review.title}</div>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < review.rating ? (
                      <AiFillStar key={i} size={13} className="text-black" />
                    ) : (
                      <AiOutlineStar key={i} size={13} className="text-black" />
                    )
                  )}
                </div>
              </div>
              <div className="h-full text-[10px] text-gray-600 line-clamp-3">{review.content}</div>
              <div className="text-[10px] text-gray-400">{review.date}</div>
            </div>
          </div>
        ))}
      </div>
      <CreateReviewButton />
    </div>
  );
};

export default MyReviewPage;

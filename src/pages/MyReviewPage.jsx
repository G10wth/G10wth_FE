// import { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import storeImg from '@/assets/images/sample/storeImg.png';
import CreateReviewButton from '@/components/common/CreateReviewButton';
import ReviewCard from '@/components/review/ReviewCard';
import LoopLoading from '@/components/common/LoopLoading';
// import useRequireAuth from '@/hooks/useRequireAuth';
// import axios from '@/apis/axios-instance';

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
  // const [reviews, setReviews] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useRequireAuth();

  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     try {
  //       setIsLoading(true);
  //       const res = await axios.get('/api/reviews/me');
  //       const data = res.data;
  //
  //       const reviewsWithImage = data.map(review => ({
  //         ...review,
  //         imageUrl: review.imageUrl || storeImg,
  //       }));
  //
  //       setReviews(reviewsWithImage);
  //     } catch (err) {
  //       console.error('리뷰 불러오기 실패 : ', err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //
  //   fetchReviews().catch(console.error);
  // }, []);

  return (
    <div className="fixed max-w-[425px] w-full max-h-[calc(100vh-130px)] top-[60px] overflow-auto space-y-6 p-7">
      <div className="flex flex-col gap-5">
        {/*{reviews.map(review => (*/}
        {mockReviews.map(review => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
      <CreateReviewButton />
      {/*{isLoading && <LoopLoading />}*/}
    </div>
  );
};

export default MyReviewPage;

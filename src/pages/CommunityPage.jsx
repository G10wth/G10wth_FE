import CommunityCard from '@/components/community/CommunityCard';

export default function CommunityPage() {
  const mockData = [
    {
      username: '조용한 산책자',
      userHandle: '@fcxldxk_',
      profileImage: 'https://placehold.co/40x40',
      content:
        '솔담 커피는 조용한 주택가 골목에 위치한 한옥 감성 카페로, 소나무의 고요함과 담백한 공간미를 담아냈습니다. 직접 내린 드립커피와 전통 다과가 어우러지며, 나무창 너머로 햇살이 스며드는 아늑한 분위기 속에서 휴식을 즐길 수 있습니다. 혼자 머물기에도, 대화를 나누기에도 좋은 공간입니다.',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    },
    {
      username: '함께가는길',
      userHandle: '@oovfpw',
      profileImage: 'https://placehold.co/40x40',
      content:
        '혹시 마포 근처 조용한 카페 찾으시는 분들께 추천드립니다! 혹시 다른 접근성 좋은 맛집이나 문화시설 있으면 댓글로 공유해주세요~',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    },
    {
      username: '함께가는길',
      userHandle: '@oovfpw',
      profileImage: 'https://placehold.co/40x40',
      content:
        '혹시 마포 근처 조용한 카페 찾으시는 분들께 추천드립니다! 혹시 다른 접근성 좋은 맛집이나 문화시설 있으면 댓글로 공유해주세요~',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    },
  ];

  return (
    <div className="w-full mx-auto py-6 px-4 space-y-8">
      {mockData.map((data, idx) => (
        <CommunityCard key={idx} {...data} />
      ))}
    </div>
  );
}

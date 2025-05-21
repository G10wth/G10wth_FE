import { useLocation } from 'react-router-dom';

export default function AuthHeader({ step }) {
  const location = useLocation();
  const path = location.pathname;

  const getTexts = () => {
    if (path === '/login') {
      return ['EasyPlace와 함께', '쉽게 갈 수 있는 장소로 바로!'];
    }
    if (path === '/signup') {
      switch (step) {
        case 1:
          return ['이메일을', '입력해주세요'];
        case 2:
          return ['비밀번호를', '설정해주세요'];
        case 3:
          return ['EasyPlace에서 사용할', '닉네임을 입력해주세요'];
        default:
          return [];
      }
    }
    return [];
  };

  const lines = getTexts();

  if (lines.length === 0) return null;

  return (
    <div className="w-full space-y-1 mt-4">
      {lines.map((line, idx) => (
        <p key={idx} className="text-black text-2xl font-bold">
          {line}
        </p>
      ))}
    </div>
  );
}

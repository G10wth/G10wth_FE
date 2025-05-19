import ViewToggle from './ViewToggle';
import {
  PiWheelchair,
  PiToilet,
  PiDotsThreeCircle,
  PiSpeakerHigh,
  PiMountains,
} from 'react-icons/pi';

export default function BottomSheetFilter({ selected, onChange }) {
  const filters = [
    { icon: <PiWheelchair size={18} />, label: '휠체어 출입 가능' },
    { icon: <PiToilet size={18} />, label: '장애인 화장실' },
    { icon: <PiDotsThreeCircle size={18} />, label: '점자 메뉴' },
    { icon: <PiSpeakerHigh size={18} />, label: '오디오 가이드' },
    { icon: <PiMountains size={18} />, label: '경사로' },
  ];

  return (
    <div className="absolute bottom-0 w-full px-4 pt-6 pb-8 bg-white rounded-t-3xl shadow-[0px_-2px_4px_rgba(0,0,0,0.1)]">
      <h2 className="text-base font-bold mb-4">접근성 필터</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((item, i) => (
          <button
            key={i}
            className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-full text-sm text-black"
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
      <ViewToggle selected={selected} onChange={onChange} />
    </div>
  );
}

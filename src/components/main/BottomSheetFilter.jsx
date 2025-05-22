import { useState } from 'react';

import ViewToggle from './ViewToggle';
import AccessibilityFilterButton from './AccessibilityFilterButton';

import { PiWheelchair, PiToilet, PiSpeakerHigh, PiMountains } from 'react-icons/pi';

import { FiEye } from 'react-icons/fi';

export default function BottomSheetFilter({ selected, onChange }) {
  const [activeFilters, setActiveFilters] = useState([]);

  const filters = [
    { icon: <PiWheelchair size={18} />, label: '휠체어 출입 가능' },
    { icon: <PiToilet size={18} />, label: '장애인 화장실' },
    { icon: <FiEye size={18} />, label: '점자 메뉴' },
    { icon: <PiSpeakerHigh size={18} />, label: '오디오 가이드' },
    { icon: <PiMountains size={18} />, label: '경사로' },
  ];

  const toggleFilter = label => {
    setActiveFilters(
      prev =>
        prev.includes(label)
          ? prev.filter(item => item !== label) // 이미 선택되어 있으면 제거
          : [...prev, label] // 없으면 추가
    );
  };

  const shadowClass = selected === 'map' ? 'shadow-md' : 'shadow-[0px_-2px_4px_rgba(0,0,0,0.1)]';

  return (
    <div
      className={`fixed max-w-[425px] mx-auto bottom-[70px] px-6 pt-6 pb-8 bg-white rounded-t-3xl ${shadowClass}`}
    >
      <h2 className="text-base text-black font-bold mb-4">접근성 필터</h2>
      <div className="flex text-left flex-wrap gap-2 mb-6">
        {filters.map((item, i) => (
          <AccessibilityFilterButton
            key={i}
            icon={item.icon}
            label={item.label}
            isActive={activeFilters.includes(item.label)}
            onClick={() => toggleFilter(item.label)}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <ViewToggle selected={selected} onChange={onChange} />
      </div>
    </div>
  );
}

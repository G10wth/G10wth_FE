export default function ViewToggle({ selected = 'map', onChange }) {
  return (
    <div className="flex w-[316px] bg-[#F1F1F1] rounded-full p-1">
      <button
        onClick={() => onChange('map')}
        className={`w-1/2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
          selected === 'map'
            ? 'bg-white text-black shadow-[0px_1px_2px_rgba(0,0,0,0.1)]'
            : 'text-[#8E8E93]'
        }`}
      >
        지도로 보기
      </button>
      <button
        onClick={() => onChange('list')}
        className={`w-1/2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
          selected === 'list'
            ? 'bg-white text-black shadow-[0px_1px_2px_rgba(0,0,0,0.1)]'
            : 'text-[#8E8E93]'
        }`}
      >
        리스트로 보기
      </button>
    </div>
  );
}

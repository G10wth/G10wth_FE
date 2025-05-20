export default function AccessibilityFilterButton({ icon, label, onClick, isActive = false }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm transition-all
        ${isActive
          ? 'bg-black border border-black text-white'
          : 'bg-white border border-gray300 text-black'}
      `}
    >
      {icon}
      {label}
    </button>
  );
}


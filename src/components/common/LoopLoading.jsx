import { useMemo } from 'react';

export default function LoopLoading({ size = 40 }) {
  const bars = useMemo(() => Array.from({ length: 12 }, () => crypto.randomUUID()), []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 backdrop-blur-sm">
      <div className="relative" style={{ height: `${size}px`, width: `${size}px` }}>
        {bars.map((id, i) => (
          <div
            key={id}
            className="absolute left-1/2 top-1/2 origin-center"
            style={{
              transform: `rotate(${i * 30}deg) translate(0, -${size / 2.5}px)`,
            }}
          >
            <div
              className="w-1 h-3 rounded-sm bg-neutral-400 opacity-30"
              style={{
                animation: `fade 1.2s linear infinite`,
                animationDelay: `${(i * 0.1).toFixed(1)}s`,
              }}
            />
          </div>
        ))}

        <style>
          {`
            @keyframes fade {
              0% { opacity: 1; }
              100% { opacity: 0.2; }
            }
          `}
        </style>
      </div>
    </div>
  );
}

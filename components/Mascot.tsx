
import React from 'react';

interface MascotProps {
  state: 'idle' | 'happy' | 'thinking' | 'sad';
  dialogue: string;
}

const Mascot: React.FC<MascotProps> = ({ state, dialogue }) => {
  return (
    <div className="flex flex-col items-center gap-3 max-w-[280px]">
      <div className="relative group">
        {/* Simple Robot SVG */}
        <svg width="100" height="100" viewBox="0 0 100 100" className={`transition-all duration-500 ${state === 'happy' ? 'animate-bounce' : ''}`}>
          {/* Antenna */}
          <line x1="50" y1="20" x2="50" y2="10" stroke="#4f46e5" strokeWidth="4" />
          <circle cx="50" cy="8" r="4" fill="#fbbf24" className={state === 'happy' ? 'animate-pulse' : ''} />
          
          {/* Head */}
          <rect x="30" y="20" width="40" height="35" rx="8" fill="#4f46e5" />
          
          {/* Face Display */}
          <rect x="35" y="25" width="30" height="20" rx="4" fill="#1e1b4b" />
          
          {/* Eyes */}
          {state === 'happy' ? (
            <>
              <path d="M40 35 Q42 30 45 35" stroke="#fbbf24" strokeWidth="2" fill="none" />
              <path d="M55 35 Q57 30 60 35" stroke="#fbbf24" strokeWidth="2" fill="none" />
            </>
          ) : state === 'thinking' ? (
            <>
              <circle cx="42" cy="35" r="2" fill="#fbbf24" />
              <rect x="55" y="34" width="6" height="2" fill="#fbbf24" />
            </>
          ) : (
            <>
              <circle cx="42" cy="35" r="2.5" fill="#fbbf24" />
              <circle cx="58" cy="35" r="2.5" fill="#fbbf24" />
            </>
          )}

          {/* Body */}
          <rect x="35" y="55" width="30" height="30" rx="4" fill="#4f46e5" />
          <rect x="42" y="60" width="16" height="10" rx="2" fill="#818cf8" opacity="0.5" />
          
          {/* Arms */}
          <rect x="25" y="60" width="10" height="4" rx="2" fill="#4f46e5" />
          <rect x="65" y="60" width="10" height="4" rx="2" fill="#4f46e5" />
        </svg>
      </div>

      <div className="relative bg-white border-2 border-indigo-100 rounded-2xl p-3 shadow-sm">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l-2 border-t-2 border-indigo-100 rotate-45" />
        <p className="text-sm font-bold text-slate-700 text-center leading-relaxed">
          {dialogue}
        </p>
      </div>
    </div>
  );
};

export default Mascot;

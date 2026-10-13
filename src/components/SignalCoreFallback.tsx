import React from 'react';

export const SignalCoreFallback: React.FC = () => {
  return (
    <div
      className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center p-4"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full text-[#969BA3]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="fallbackGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C7FF3A" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#C7FF3A" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#0B0D10" stopOpacity="0" />
          </radialGradient>
          <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient background glow */}
        <circle cx="200" cy="200" r="170" fill="url(#fallbackGlow)" />

        {/* Outer orbital rings */}
        <circle cx="200" cy="200" r="150" stroke="#232834" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="200" cy="200" r="115" stroke="#232834" strokeWidth="1" />

        {/* Geometric Icosahedron Projection */}
        {/* Outer vertices */}
        <polygon
          points="200,60 320,125 320,275 200,340 80,275 80,125"
          stroke="#969BA3"
          strokeWidth="1.25"
          strokeOpacity="0.7"
        />

        {/* Inner intersecting diagonals and lattice lines */}
        <line x1="200" y1="60" x2="200" y2="340" stroke="#373E50" strokeWidth="1" />
        <line x1="80" y1="125" x2="320" y2="275" stroke="#373E50" strokeWidth="1" />
        <line x1="80" y1="275" x2="320" y2="125" stroke="#373E50" strokeWidth="1" />

        {/* Mid-tier inner polygon */}
        <polygon
          points="200,110 280,160 280,240 200,290 120,240 120,160"
          stroke="#969BA3"
          strokeWidth="1"
          strokeOpacity="0.5"
        />

        {/* Cross braces */}
        <line x1="200" y1="60" x2="280" y2="160" stroke="#969BA3" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="200" y1="60" x2="120" y2="160" stroke="#969BA3" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="320" y1="125" x2="280" y2="240" stroke="#969BA3" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="320" y1="275" x2="200" y2="290" stroke="#969BA3" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="200" y1="340" x2="120" y2="240" stroke="#969BA3" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="80" y1="275" x2="120" y2="160" stroke="#969BA3" strokeWidth="1" strokeOpacity="0.4" />

        {/* Cool grey lattice nodes */}
        <circle cx="200" cy="60" r="3" fill="#969BA3" />
        <circle cx="320" cy="125" r="3" fill="#969BA3" />
        <circle cx="320" cy="275" r="3" fill="#969BA3" />
        <circle cx="200" cy="340" r="3" fill="#969BA3" />
        <circle cx="80" cy="275" r="3" fill="#969BA3" />
        <circle cx="80" cy="125" r="3" fill="#969BA3" />

        <circle cx="200" cy="110" r="2.5" fill="#969BA3" />
        <circle cx="280" cy="160" r="2.5" fill="#969BA3" />
        <circle cx="280" cy="240" r="2.5" fill="#969BA3" />
        <circle cx="200" cy="290" r="2.5" fill="#969BA3" />
        <circle cx="120" cy="240" r="2.5" fill="#969BA3" />
        <circle cx="120" cy="160" r="2.5" fill="#969BA3" />

        {/* Accent Acid-Lime Signal Nodes */}
        <circle cx="200" cy="200" r="5" fill="#C7FF3A" filter="url(#nodeGlow)" />
        <circle cx="200" cy="60" r="4.5" fill="#C7FF3A" filter="url(#nodeGlow)" />
        <circle cx="280" cy="160" r="4" fill="#C7FF3A" filter="url(#nodeGlow)" />
        <circle cx="120" cy="240" r="4" fill="#C7FF3A" filter="url(#nodeGlow)" />
        <circle cx="320" cy="275" r="3.5" fill="#C7FF3A" filter="url(#nodeGlow)" />

        {/* Central signal crosshair */}
        <line x1="185" y1="200" x2="215" y2="200" stroke="#C7FF3A" strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="200" y1="185" x2="200" y2="215" stroke="#C7FF3A" strokeWidth="1.5" strokeOpacity="0.8" />
      </svg>
    </div>
  );
};

import React from 'react';

export const KrishiSahayakDiagram: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-[#13161C] border border-[#232834] p-5 my-6">
      {/* Visual Badge & Label */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#232834]">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#C7FF3A]" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#C7FF3A]">
            Agronomic Architecture
          </span>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#181C25] border border-[#232834] text-[#969BA3]">
          Illustrative diagram
        </span>
      </div>

      <svg
        viewBox="0 0 840 250"
        className="w-full h-auto text-[#969BA3]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tier 1: Multilingual Farmer Client */}
        <g>
          <rect x="15" y="25" width="170" height="175" rx="8" fill="#181C25" stroke="#232834" strokeWidth="1.5" />
          <circle cx="100" cy="55" r="16" fill="#232834" />
          <path d="M94 58l6-6 6 6" stroke="#C7FF3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="100" y="90" textAnchor="middle" fill="#F5F5F0" fontSize="12" fontWeight="600" fontFamily="Space Grotesk">
            Farmer Interface
          </text>
          <text x="100" y="110" textAnchor="middle" fill="#969BA3" fontSize="10" fontFamily="Inter">
            मराठी (Marathi)
          </text>
          <text x="100" y="125" textAnchor="middle" fill="#969BA3" fontSize="10" fontFamily="Inter">
            हिंदी (Hindi) • English
          </text>
          <rect x="30" y="150" width="140" height="26" rx="4" fill="#0B0D10" stroke="#232834" />
          <text x="100" y="167" textAnchor="middle" fill="#C7FF3A" fontSize="9" fontFamily="JetBrains Mono">
            Mobile &amp; Web UI
          </text>
        </g>

        {/* Connect 1 */}
        <path d="M185 112h35" stroke="#C7FF3A" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="220,112 213,108 213,116" fill="#C7FF3A" />

        {/* Tier 2: Express REST API & Security */}
        <g>
          <rect x="225" y="25" width="180" height="175" rx="8" fill="#181C25" stroke="#232834" strokeWidth="1.5" />
          <circle cx="315" cy="55" r="16" fill="#232834" />
          <path d="M309 52h12v7h-12z" stroke="#C7FF3A" strokeWidth="1.5" strokeLinejoin="round" />
          <text x="315" y="90" textAnchor="middle" fill="#F5F5F0" fontSize="12" fontWeight="600" fontFamily="Space Grotesk">
            Express.js Server
          </text>
          <text x="315" y="110" textAnchor="middle" fill="#969BA3" fontSize="10" fontFamily="Inter">
            JWT Auth &amp; Helmet
          </text>
          <text x="315" y="125" textAnchor="middle" fill="#969BA3" fontSize="10" fontFamily="Inter">
            Express-Validator &amp; Winston
          </text>
          <rect x="245" y="150" width="140" height="26" rx="4" fill="#0B0D10" stroke="#232834" />
          <text x="315" y="167" textAnchor="middle" fill="#969BA3" fontSize="9" fontFamily="JetBrains Mono">
            REST Controllers
          </text>
        </g>

        {/* Connect 2 */}
        <path d="M405 112h35" stroke="#C7FF3A" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="440,112 433,108 433,116" fill="#C7FF3A" />

        {/* Tier 3: Agronomic Engine Modules */}
        <g>
          <rect x="445" y="25" width="200" height="175" rx="8" fill="#181C25" stroke="#232834" strokeWidth="1.5" />
          <text x="545" y="55" textAnchor="middle" fill="#C7FF3A" fontSize="11" fontWeight="600" fontFamily="JetBrains Mono">
            DOMAIN MODULES
          </text>
          <rect x="460" y="70" width="170" height="30" rx="4" fill="#0B0D10" stroke="#232834" />
          <text x="545" y="89" textAnchor="middle" fill="#F5F5F0" fontSize="10" fontFamily="Inter">
            111 Guides (37 Crops)
          </text>
          <rect x="460" y="108" width="170" height="30" rx="4" fill="#0B0D10" stroke="#232834" />
          <text x="545" y="127" textAnchor="middle" fill="#F5F5F0" fontSize="10" fontFamily="Inter">
            Agromet &amp; Weather Engine
          </text>
          <rect x="460" y="146" width="170" height="30" rx="4" fill="#0B0D10" stroke="#232834" />
          <text x="545" y="165" textAnchor="middle" fill="#F5F5F0" fontSize="10" fontFamily="Inter">
            PM-KISAN / PMFBY Schemes
          </text>
        </g>

        {/* Connect 3 */}
        <path d="M645 112h35" stroke="#C7FF3A" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="680,112 673,108 673,116" fill="#C7FF3A" />

        {/* Tier 4: Database & Testing */}
        <g>
          <rect x="685" y="25" width="140" height="175" rx="8" fill="#181C25" stroke="#232834" strokeWidth="1.5" />
          <circle cx="755" cy="55" r="16" fill="#232834" />
          <path d="M748 50h14v10h-14z" stroke="#C7FF3A" strokeWidth="1.5" />
          <text x="755" y="90" textAnchor="middle" fill="#F5F5F0" fontSize="12" fontWeight="600" fontFamily="Space Grotesk">
            Persistence
          </text>
          <text x="755" y="110" textAnchor="middle" fill="#969BA3" fontSize="10" fontFamily="Inter">
            MongoDB &amp; Mongoose
          </text>
          <text x="755" y="125" textAnchor="middle" fill="#969BA3" fontSize="10" fontFamily="Inter">
            Jest &amp; Supertest
          </text>
          <rect x="700" y="150" width="110" height="26" rx="4" fill="#0B0D10" stroke="#232834" />
          <text x="755" y="167" textAnchor="middle" fill="#C7FF3A" fontSize="9" fontFamily="JetBrains Mono">
            Verified Tests
          </text>
        </g>

        <text x="420" y="230" textAnchor="middle" fill="#686D76" fontSize="11" fontFamily="Inter">
          Agronomic cycle strictly adheres to 10 sequential scientific phases per crop with regional Maharashtra calibration.
        </text>
      </svg>
    </div>
  );
};

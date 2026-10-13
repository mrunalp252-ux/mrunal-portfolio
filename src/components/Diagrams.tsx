import React from 'react';

export const SwasthyaAiDiagram: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-[#13161C] border border-[#232834] p-5 my-6">
      {/* Visual Badge & Label */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#232834]">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#C7FF3A]" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#C7FF3A]">
            Architecture Pipeline
          </span>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#181C25] border border-[#232834] text-[#969BA3]">
          Illustrative diagram
        </span>
      </div>

      <svg
        viewBox="0 0 840 260"
        className="w-full h-auto text-[#969BA3]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="swasthyaFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#232834" />
            <stop offset="50%" stopColor="#C7FF3A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#232834" />
          </linearGradient>
        </defs>

        {/* Step 1: Multilingual Voice Intake */}
        <g>
          <rect x="10" y="30" width="145" height="180" rx="8" fill="#181C25" stroke="#232834" strokeWidth="1.5" />
          <circle cx="82" cy="65" r="18" fill="#232834" />
          <path d="M78 60v10M86 60v10M74 65h16" stroke="#C7FF3A" strokeWidth="1.5" strokeLinecap="round" />
          <text x="82" y="105" textAnchor="middle" fill="#F5F5F0" fontSize="12" fontWeight="600" fontFamily="Space Grotesk">
            Voice Intake
          </text>
          <text x="82" y="125" textAnchor="middle" fill="#969BA3" fontSize="10" fontFamily="Inter">
            Marathi • Hindi
          </text>
          <text x="82" y="140" textAnchor="middle" fill="#969BA3" fontSize="10" fontFamily="Inter">
            English (en-IN)
          </text>
          <rect x="25" y="165" width="115" height="26" rx="4" fill="#0B0D10" stroke="#232834" />
          <text x="82" y="182" textAnchor="middle" fill="#C7FF3A" fontSize="9" fontFamily="JetBrains Mono">
            Audio / STT
          </text>
        </g>

        {/* Arrow 1 */}
        <path d="M155 120h30" stroke="#C7FF3A" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="185,120 178,116 178,124" fill="#C7FF3A" />

        {/* Step 2: Clinical Parser & Adaptive Questions */}
        <g>
          <rect x="190" y="30" width="155" height="180" rx="8" fill="#181C25" stroke="#232834" strokeWidth="1.5" />
          <circle cx="267" cy="65" r="18" fill="#232834" />
          <path d="M261 65l4 4 8-8" stroke="#C7FF3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="267" y="105" textAnchor="middle" fill="#F5F5F0" fontSize="12" fontWeight="600" fontFamily="Space Grotesk">
            Clinical Parser
          </text>
          <text x="267" y="125" textAnchor="middle" fill="#969BA3" fontSize="10" fontFamily="Inter">
            Adaptive Questions
          </text>
          <text x="267" y="140" textAnchor="middle" fill="#969BA3" fontSize="10" fontFamily="Inter">
            Missing Context Check
          </text>
          <rect x="205" y="165" width="125" height="26" rx="4" fill="#0B0D10" stroke="#232834" />
          <text x="267" y="182" textAnchor="middle" fill="#969BA3" fontSize="9" fontFamily="JetBrains Mono">
            Entities &amp; Vitals
          </text>
        </g>

        {/* Arrow 2 */}
        <path d="M345 120h30" stroke="#C7FF3A" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="375,120 368,116 368,124" fill="#C7FF3A" />

        {/* Step 3: Structured SOAP Draft */}
        <g>
          <rect x="380" y="30" width="145" height="180" rx="8" fill="#181C25" stroke="#232834" strokeWidth="1.5" />
          <circle cx="452" cy="65" r="18" fill="#232834" />
          <rect x="444" y="58" width="16" height="14" rx="2" stroke="#C7FF3A" strokeWidth="1.5" />
          <line x1="447" y1="63" x2="457" y2="63" stroke="#C7FF3A" strokeWidth="1" />
          <text x="452" y="105" textAnchor="middle" fill="#F5F5F0" fontSize="12" fontWeight="600" fontFamily="Space Grotesk">
            SOAP Case Note
          </text>
          <text x="452" y="125" textAnchor="middle" fill="#969BA3" fontSize="10" fontFamily="Inter">
            S: Subjective
          </text>
          <text x="452" y="140" textAnchor="middle" fill="#969BA3" fontSize="10" fontFamily="Inter">
            O • A • P Format
          </text>
          <rect x="395" y="165" width="115" height="26" rx="4" fill="#0B0D10" stroke="#232834" />
          <text x="452" y="182" textAnchor="middle" fill="#969BA3" fontSize="9" fontFamily="JetBrains Mono">
            Status: AI Draft
          </text>
        </g>

        {/* Arrow 3 */}
        <path d="M525 120h30" stroke="#C7FF3A" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="555,120 548,116 548,124" fill="#C7FF3A" />

        {/* Step 4: Doctor Verification Gateway */}
        <g>
          <rect x="560" y="30" width="140" height="180" rx="8" fill="#181C25" stroke="#C7FF3A" strokeWidth="1.5" />
          <circle cx="630" cy="65" r="18" fill="#C7FF3A" fillOpacity="0.15" />
          <path d="M624 65l4 4 8-8" stroke="#C7FF3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="630" y="105" textAnchor="middle" fill="#F5F5F0" fontSize="12" fontWeight="600" fontFamily="Space Grotesk">
            Doctor Gateway
          </text>
          <text x="630" y="125" textAnchor="middle" fill="#C7FF3A" fontSize="10" fontWeight="500" fontFamily="Inter">
            Human-in-the-Loop
          </text>
          <text x="630" y="140" textAnchor="middle" fill="#969BA3" fontSize="10" fontFamily="Inter">
            Review &amp; Edit
          </text>
          <rect x="575" y="165" width="110" height="26" rx="4" fill="#0B0D10" stroke="#C7FF3A" />
          <text x="630" y="182" textAnchor="middle" fill="#C7FF3A" fontSize="9" fontWeight="600" fontFamily="JetBrains Mono">
            ✓ APPROVED
          </text>
        </g>

        {/* Arrow 4 */}
        <path d="M700 120h25" stroke="#C7FF3A" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="725,120 718,116 718,124" fill="#C7FF3A" />

        {/* Step 5: Export / FHIR Bundle */}
        <g>
          <rect x="730" y="30" width="100" height="180" rx="8" fill="#181C25" stroke="#232834" strokeWidth="1.5" />
          <circle cx="780" cy="65" r="18" fill="#232834" />
          <path d="M775 62h10M775 67h7M775 72h10" stroke="#C7FF3A" strokeWidth="1.5" strokeLinecap="round" />
          <text x="780" y="105" textAnchor="middle" fill="#F5F5F0" fontSize="12" fontWeight="600" fontFamily="Space Grotesk">
            FHIR R4
          </text>
          <text x="780" y="125" textAnchor="middle" fill="#969BA3" fontSize="10" fontFamily="Inter">
            ABDM Bundle
          </text>
          <text x="780" y="140" textAnchor="middle" fill="#969BA3" fontSize="10" fontFamily="Inter">
            JSON Records
          </text>
          <rect x="738" y="165" width="84" height="26" rx="4" fill="#0B0D10" stroke="#232834" />
          <text x="780" y="182" textAnchor="middle" fill="#969BA3" fontSize="9" fontFamily="JetBrains Mono">
            Export
          </text>
        </g>

        {/* Base annotation */}
        <text x="420" y="240" textAnchor="middle" fill="#686D76" fontSize="11" fontFamily="Inter">
          AI assists with intake transcription &amp; structure. Clinician retains absolute clinical decision authority.
        </text>
      </svg>
    </div>
  );
};

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

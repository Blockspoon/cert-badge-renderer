"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconFrame4 = createIconFrame4;
function createIconFrame4({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 342 294"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal;"
      >
        <rect
          x="3.02928"
          y="167.733"
          width="173.758"
          height="173.758"
          transform="rotate(-45 3.02928 167.733)"
          stroke="url(#${paintId0})"
          stroke-width="4.10451"
        />
        <rect
          x="64.5976"
          y="65.4092"
          width="87.0954"
          height="87.0954"
          transform="rotate(-45 64.5976 65.4092)"
          stroke="url(#${paintId1})"
          stroke-width="4.10451"
        />
        <rect
          x="213.729"
          y="167.312"
          width="88.0261"
          height="88.0261"
          transform="rotate(-45 213.729 167.312)"
          stroke="url(#${paintId2})"
          stroke-width="4.10451"
        />
        <defs>
          <linearGradient
            id="${paintId0}"
            x1="178.063"
            y1="167.807"
            x2="0.0533184"
            y2="345.817"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="${subColor}" />
            <stop offset="1" stop-color="${mainColor}" />
          </linearGradient>
          <linearGradient
            id="${paintId1}"
            x1="152.933"
            y1="65.4469"
            x2="61.6576"
            y2="156.722"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="${subColor}" />
            <stop offset="1" stop-color="${mainColor}" />
          </linearGradient>
          <linearGradient
            id="${paintId2}"
            x1="302.995"
            y1="167.35"
            x2="210.788"
            y2="259.557"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="${subColor}" />
            <stop offset="1" stop-color="${mainColor}" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  `;
}

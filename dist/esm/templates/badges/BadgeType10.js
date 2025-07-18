"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBadgeType10 = createBadgeType10;
function createBadgeType10({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 488 488"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        width: 100%;
        height: 100%;
        object-fit: contain;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <path
        d="M244 0C109.25 0 0 109.25 0 244C0 378.75 109.25 488 244 488C378.75 488 488 378.75 488 244V20C488 8.95431 479.046 0 468 0H244Z"
        fill="url(#${paintId0})"
      />
      <circle cx="244" cy="250" r="220" fill="black" fill-opacity="0.2" />
      <circle cx="244" cy="244" r="214" fill="${mainColor}" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M453.679 201H34.3223C54.2274 103.42 140.54 30 244.001 30C347.462 30 433.774 103.42 453.679 201Z"
        fill="white"
      />
      <circle cx="244" cy="244" r="212" stroke="white" stroke-width="4" />
      <mask
        id="mask0_2384_135"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="34"
        y="34"
        width="420"
        height="420"
      >
        <circle cx="244" cy="244" r="210" fill="${mainColor}" />
      </mask>
      <g mask="url(#mask0_2384_135)">
        <rect x="25" y="201" width="440" height="140" fill="${subColor}" />
        <rect
          x="25"
          y="201"
          width="440"
          height="140"
          fill="white"
          fill-opacity="0.3"
        />
      </g>
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="244"
          y1="0"
          x2="244"
          y2="488"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

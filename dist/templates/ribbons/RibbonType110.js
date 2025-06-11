"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRibbonType110 = createRibbonType110;
function createRibbonType110({ mainColor = "#96A6B4", subColor = "#96A6B4", extraColor1 = "#96A6B4", extraColor2 = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 584 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <path d="M0 0H63V93H0L27 46.5L0 0Z" fill="${extraColor1}" />
      <path d="M584 0H521V93H584L557 46.5L584 0Z" fill="${extraColor1}" />
      <path d="M517 3L547 19.8511V25H517V3Z" fill="#281700" />
      <path d="M67 3L37 19.8511V25H67V3Z" fill="#281700" />
      <rect
        x="37"
        y="20"
        width="510"
        height="113"
        fill="url(#${paintId0})"
      />
      <defs>
        <linearGradient
          id={paintId0}
          x1="-33"
          y1="65.5"
          x2="194.388"
          y2="-234.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.296774" stopColor="${subColor}" />
          <stop offset="0.736337" stopColor="${mainColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

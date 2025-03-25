"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRibbonType8 = createRibbonType8;
function createRibbonType8({ mainColor = "#96A6B4", subColor = "#96A6B4" }) {
    const container = document.createElement('div');
    container.style.cssText = `
    width: 100%;
    height: 100%;
    isolation: isolate;
    display: flex;
    align-items: center;
    justify-content: center;
    will-change: transform, contents;
    transform: translateZ(0);
    backface-visibility: hidden;
  `;
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;
    const svgContent = `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 528 177"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <path d="M495 177L522 151L499.909 152.3L495 177Z" fill="#FF1B64" />
      <path
        opacity="0.4"
        d="M495 177L522 151L499.909 152.3L495 177Z"
        fill="black"
      />
      <path d="M33 177L6 151L28.0909 152.3L33 177Z" fill="#FF1B64" />
      <path
        opacity="0.4"
        d="M33 177L6 151L28.0909 152.3L33 177Z"
        fill="black"
      />
      <rect
        width="528"
        height="154"
        rx="14"
        fill="url(#${paintId0})"
      />
      <rect
        y="9.25781"
        width="528"
        height="135.59"
        fill="url(#paint1_linear_2364_627)"
        fill-opacity="0.3"
      />
      <mask
        id="mask0_2364_627"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="528"
        height="154"
      >
        <rect
          width="528"
          height="154"
          rx="14"
          fill="url(#${paintId2})"
        />
      </mask>
      <g mask="url(#mask0_2364_627)">
        <path d="M-3 9H531" stroke="${mainColor}" stroke-width="3" />
        <path d="M-3 145L531 145" stroke="${mainColor}" stroke-width="3" />
      </g>
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="-5.75303e-07"
          y1="3.5"
          x2="528"
          y2="148"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2364_627"
          x1="264"
          y1="9.25781"
          x2="264"
          y2="144.848"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.34088" stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.5" />
        </linearGradient>
        <linearGradient
          id="${paintId2}"
          x1="-5.75303e-07"
          y1="3.5"
          x2="528"
          y2="148"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
    container.innerHTML = svgContent;
    return container;
}

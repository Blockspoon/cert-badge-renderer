"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRibbonType13 = createRibbonType13;
function createRibbonType13({ mainColor = "#96A6B4", subColor = "#96A6B4" }) {
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
    const svgContent = `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 528 197"
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
      <path
        d="M524.814 30.5384L497 2.21204L499.823 26.6293L524.814 30.5384Z"
        fill="#691BC2"
      />
      <path
        opacity="0.4"
        d="M524.814 30.5384L497 2.21204L499.823 26.6293L524.814 30.5384Z"
        fill="black"
      />
      <path
        d="M4.00053 30.5384L31.8145 2.21204L28.9917 26.6293L4.00053 30.5384Z"
        fill="#691BC2"
      />
      <path
        opacity="0.4"
        d="M4.00053 30.5384L31.8145 2.21204L28.9917 26.6293L4.00053 30.5384Z"
        fill="black"
      />
      <path
        d="M501.5 196.595H26.5C23 188.095 22.9999 180.095 22.8105 174.595H505C505 183.095 503.5 193.095 501.5 196.595Z"
        fill="black"
        fill-opacity="0.4"
      />
      <rect
        y="25.5948"
        width="528"
        height="154"
        rx="14"
        fill="url(#${paintId0})"
      />
      <rect
        y="38.2902"
        width="528"
        height="128.608"
        fill="white"
        fill-opacity="0.3"
      />
      <path d="M0 37.3019L528 37.3019" stroke="white" stroke-width="3" />
      <path d="M0 167.888L528 167.888" stroke="white" stroke-width="3" />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="-5.75303e-07"
          y1="29.0949"
          x2="528"
          y2="173.595"
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

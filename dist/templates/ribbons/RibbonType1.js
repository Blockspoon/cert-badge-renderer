"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRibbonType1 = createRibbonType1;
function createRibbonType1({ mainColor = "#96A6B4", subColor = "#96A6B4" }) {
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
    position: relative;
  `;
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    const svgContent = `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 536 183"
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
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <path d="M456 183L528 153L467.189 145L456 183Z" fill="${mainColor}" />
      <path
        opacity="0.3"
        d="M456 183L528 153L467.189 145L456 183Z"
        fill="black"
      />
      <path d="M80 183L8 153L68.8108 145L80 183Z" fill="${mainColor}" />
      <path
        opacity="0.3"
        d="M80 183L8 153L68.8108 145L80 183Z"
        fill="black"
      />
      <rect width="536" height="154" rx="10" fill="url(#${paintId0})" />
      <rect
        y="10.0547"
        width="536"
        height="133.891"
        fill="white"
        fill-opacity="0.3"
      />
      <path
        d="M0.0185547 10.0547H536.004"
        stroke="${mainColor}"
        stroke-width="3"
      />
      <path
        d="M0 143.945L536.307 143.945"
        stroke="${mainColor}"
        stroke-width="3"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="3.33645e-07"
          y1="17.6647"
          x2="528.572"
          y2="170.613"
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

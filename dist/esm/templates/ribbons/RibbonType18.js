"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRibbonType18 = createRibbonType18;
function createRibbonType18({ mainColor = "#96A6B4", subColor = "#96A6B4", extraColor1 = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 536 192"
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
      <path
        d="M479 184.5L528 161L488.5 161.5L479 184.5Z"
        fill="${extraColor1}"
      />
      <path
        opacity="0.3"
        d="M479 184.5L529 160.5L488.5 161.5L479 184.5Z"
        fill="black"
      />
      <path
        d="M57 184.5L8.00037 161L47.5 161.5L57 184.5Z"
        fill="${extraColor1}"
      />
      <path
        opacity="0.3"
        d="M57 184.5L7 160.5L47.5 161.5L57 184.5Z"
        fill="black"
      />
      <rect
        width="536"
        height="162"
        rx="10"
        fill="url(#${paintId0})"
      />
      <path d="M0 12L536 12" stroke="white" />
      <path d="M0 150L536 150" stroke="white" />
      <rect
        y="12.5547"
        width="536"
        height="137.145"
        fill="white"
        fill-opacity="0.3"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="3.33645e-07"
          y1="18.5824"
          x2="532.535"
          y2="165.067"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

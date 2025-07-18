"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRibbonType24 = createRibbonType24;
function createRibbonType24({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 501 183"
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
        d="M50.4961 149H476.496C471.113 162.848 467.873 170.338 461.496 183H65.723C58.1698 169.968 55.1254 163.245 50.4961 149Z"
        fill="black"
        fill-opacity="0.3"
      />
      <path
        d="M484.844 30.0006L13.4967 30L25.5963 9.53674e-06H475.445L484.844 30.0006Z"
        fill="white"
      />
      <rect
        x="0.496094"
        y="6"
        width="500"
        height="162"
        rx="10"
        fill="url(#${paintId0})"
      />
      <rect
        x="0.496094"
        y="17.5234"
        width="500"
        height="138.953"
        fill="white"
        fill-opacity="0.3"
      />
      <path
        d="M-20.7969 23.9938C-16.1165 18.8998 -12.6654 17.5951 -5.38263 17.4417L501.746 17.4417C511.549 17.3086 516.173 18.7676 521.785 26.0101"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M-20.7969 150.811C-16.1165 155.905 -12.6654 157.21 -5.38263 157.363L501.746 157.363C511.549 157.496 516.173 156.037 521.785 148.795"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="0.496094"
          y1="19.1029"
          x2="518.305"
          y2="135.095"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

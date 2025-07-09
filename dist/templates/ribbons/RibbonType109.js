"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRibbonType109 = createRibbonType109;
function createRibbonType109({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 450 169"
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
        d="M0 91L83.8358 4.99549L167.672 77.9373L83.8358 163.942L63.0946 103.132L0 91Z"
        fill="${mainColor}"
      />
      <path
        d="M117 129.5L158 88L85 4.5L30 60L117 129.5Z"
        fill="url(#paint0_linear_3488_8546)"
      />
      <path
        d="M449.672 91L365.836 4.99549L282 77.9373L365.836 163.942L386.577 103.132L449.672 91Z"
        fill="${mainColor}"
      />
      <path
        d="M332.5 129.5L291.5 88L364.5 4.5L419.5 60L332.5 129.5Z"
        fill="url(#paint1_linear_3488_8546)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3488_8546"
          x1="85.234"
          y1="95.2858"
          x2="123"
          y2="42.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.218267" stop-opacity="0" />
          <stop offset="1" stop-opacity="0.4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3488_8546"
          x1="364.266"
          y1="95.2858"
          x2="331.5"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.218267" stop-opacity="0" />
          <stop offset="1" stop-opacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

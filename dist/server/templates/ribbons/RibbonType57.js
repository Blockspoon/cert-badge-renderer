"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRibbonType57 = createRibbonType57;
function createRibbonType57({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 176 204"
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
      <path d="M20 6H156L176 204L88 166.834L0 204L20 6Z" fill="${mainColor}" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M169.999 143.408C162.315 144.053 154.676 144.764 147.591 146.454C140.448 148.433 133.305 151.636 126.066 154.881C113.805 160.379 101.27 166 87.999 166C74.9378 166 62.8275 160.556 50.7854 155.142C43.3687 151.808 35.9779 148.486 28.4068 146.454C21.2743 144.753 13.6617 144.044 6 143.396L16.7338 42H159.264L169.999 143.408Z"
        fill="url(#paint0_linear_2407_468)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M54 175.194V0H121V174.771L88 160.834L54 175.194Z"
        fill="${subColor}"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2407_468"
          x1="87.9997"
          y1="58"
          x2="87.9997"
          y2="146"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0.4" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

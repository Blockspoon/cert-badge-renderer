"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRibbonType22 = createRibbonType22;
function createRibbonType22({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 507 184"
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
        d="M36.6309 154H490.496V184H38.0612C36.3356 179.296 36.3646 170.675 36.6309 154Z"
        fill="url(#paint0_linear_2399_1178)"
        fill-opacity="0.4"
      />
      <rect
        x="0.496094"
        y="3"
        width="506"
        height="162"
        rx="10"
        fill="${mainColor}"
      />
      <rect
        x="0.496094"
        y="3"
        width="506"
        height="162"
        rx="10"
        fill="white"
        fill-opacity="0.3"
      />
      <path
        d="M0.496094 11C0.496094 6.58172 4.07782 3 8.49609 3H498.496C502.914 3 506.496 6.58172 506.496 11V15H0.496094V11Z"
        fill="${mainColor}"
      />
      <path
        d="M0.496094 157C0.496094 161.418 4.07782 165 8.49609 165H498.496C502.914 165 506.496 161.418 506.496 157V153H0.496094V157Z"
        fill="${mainColor}"
      />
      <path d="M0.496094 15H506.496" stroke="white" stroke-width="4" />
      <path d="M0.496094 153H506.496" stroke="white" stroke-width="4" />
      <defs>
        <linearGradient
          id="paint0_linear_2399_1178"
          x1="263.496"
          y1="164.751"
          x2="263.496"
          y2="184"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

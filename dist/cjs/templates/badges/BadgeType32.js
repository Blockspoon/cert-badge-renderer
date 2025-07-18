"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBadgeType32 = createBadgeType32;
function createBadgeType32({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 528 552"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        max-width: 100%;
        max-height: 100%;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <g filter="url(#filter0_d_2407_143)">
        <path
          d="M12 264C12 124.824 124.824 12 264 12C403.176 12 516 124.824 516 264V500C516 522.091 498.091 540 476 540H52C29.9086 540 12 522.091 12 500V264Z"
          fill="white"
        />
      </g>
      <path
        d="M32 265C32 136.87 135.87 33 264 33C392.13 33 496 136.87 496 265V483C496 502.882 479.882 519 460 519H68C48.1178 519 32 502.882 32 483V265Z"
        fill="#101113"
      />
      <path
        d="M45.5 265C45.5 144.326 143.326 46.5 264 46.5C384.674 46.5 482.5 144.326 482.5 265V476C482.5 492.292 469.292 505.5 453 505.5H75C58.7076 505.5 45.5 492.292 45.5 476V265Z"
        fill="${mainColor}"
        stroke="${subColor}"
        stroke-width="5"
      />
      <path
        d="M43 328.457H485V476C485 493.673 470.673 508 453 508H75C57.3269 508 43 493.673 43 476V328.457Z"
        fill="${subColor}"
      />
      <circle cx="263.5" cy="195.5" r="92.5" fill="white" />
      <circle cx="263.5" cy="195.5" r="84.5" fill="#101113" />
      <circle cx="263.5" cy="195.5" r="79.5" fill="${subColor}" />
      <rect
        x="48.1797"
        y="304.777"
        width="431.634"
        height="153"
        fill="#101113"
      />
      <path
        d="M48.1797 312.777L479.789 312.777"
        stroke="${mainColor}"
        stroke-width="5"
      />
      <path
        d="M48.1797 449.777L479.789 449.777"
        stroke="${mainColor}"
        stroke-width="5"
      />
      <defs>
        <filter
          id="filter0_d_2407_143"
          x="0"
          y="0"
          width="528"
          height="552"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2407_143"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2407_143"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  `;
}

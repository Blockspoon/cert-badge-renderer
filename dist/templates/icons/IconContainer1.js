"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconContainer1 = createIconContainer1;
function createIconContainer1({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1047 719"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <g filter="url(#filter0_d_2546_427)">
          <rect
            x="24.3926"
            y="24.1572"
            width="998"
            height="670"
            rx="8"
            fill="white"
          />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M997.784 24.1572H973.176V50.1377H24.3926V74.7499H973.176V694.157H997.784V74.7499H1022.39V50.1377H997.784V24.1572Z"
          fill="url(#${paintId0})"
        />
        <defs>
          <filter
            id="filter0_d_2546_427"
            x="0.392578"
            y="0.157227"
            width="1046"
            height="717.999"
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
            <feGaussianBlur stdDeviation="12" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2546_427"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2546_427"
              result="shape"
            />
          </filter>
          <linearGradient
            id="${paintId0}"
            x1="413.339"
            y1="-130.353"
            x2="792.139"
            y2="812.39"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="${mainColor}" />
            <stop offset="1" stop-color="${subColor}" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  `;
}

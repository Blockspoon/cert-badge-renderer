"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBadgeType11 = createBadgeType11;
function createBadgeType11({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 540 560"
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
        z-index: 1;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <g filter="url(#filter0_d_2384_1366)">
        <path
          d="M270 12C412.398 12 528 132.083 528 280V507.484C528 529.843 510.52 548 488.996 548H51.0041C29.4795 548 12 529.843 12 507.484V280C12 132.083 127.602 12 270 12Z"
          fill="white"
        />
      </g>
      <path
        d="M270 28C404.119 28 513 140.914 513 280V493.903C513 514.927 496.537 532 476.264 532H63.7364C43.4633 532 27 514.927 27 493.903V280C27 140.914 135.881 28 270 28Z"
        fill="${subColor}"
      />
      <path
        d="M270 40C397.495 40 501 147.537 501 280V483.717C501 503.74 485.35 520 466.078 520H73.9223C54.6503 520 39 503.74 39 483.717V280C39 147.537 142.505 40 270 40Z"
        fill="${subColor}"
      />
      <path
        d="M270 40C397.495 40 501 147.537 501 280V483.717C501 503.74 485.35 520 466.078 520H73.9223C54.6503 520 39 503.74 39 483.717V280C39 147.537 142.505 40 270 40Z"
        fill="${mainColor}"
      />
      <rect
        x="42.9902"
        y="316"
        width="454.018"
        height="153"
        fill="${subColor}"
      />
      <path
        d="M42.9902 324L496.982 324"
        stroke="${mainColor}"
        stroke-width="4"
      />
      <path
        d="M42.9902 461L496.982 461"
        stroke="${mainColor}"
        stroke-width="4"
      />
      <path
        d="M270 43C395.732 43 498 149.085 498 280V483.717C498 502.192 483.586 517 466.078 517H73.9223C56.4141 517 42 502.192 42 483.717V280C42 149.085 144.268 43 270 43Z"
        stroke="white"
        stroke-width="6"
      />
      <defs>
        <filter
          id="filter0_d_2384_1366"
          x="0"
          y="0"
          width="540"
          height="560"
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
            result="effect1_dropShadow_2384_1366"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2384_1366"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  `;
}

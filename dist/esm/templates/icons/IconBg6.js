"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconBg6 = createIconBg6;
function createIconBg6({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 292 244"
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
        d="M59.028 134.367L5.34351 156.071C2.38243 157.235 1.29086 160.884 3.12978 163.489L30.3748 183.055C30.8454 183.739 31.152 184.528 31.2432 185.356L31.7798 216.243C32.1781 219.86 36.1999 221.813 39.2675 219.888L97.2717 181.351C99.7782 179.782 100.339 176.368 98.4905 174.072L64.6541 135.864C63.313 134.189 61.0359 133.587 59.028 134.367Z"
        fill="${mainColor}"
      />
      <path
        d="M56.4687 208.446C44.425 198.825 29.1313 178.886 22.4863 149.155L41.0678 141.561L75.276 196.179L56.4687 208.446Z"
        fill="url(#paint0_linear_2384_1365)"
        fill-opacity="0.3"
      />
      <path
        d="M232.972 134.367L286.656 156.071C289.618 157.235 290.709 160.884 288.87 163.489L261.625 183.055C261.155 183.739 260.848 184.528 260.757 185.356L260.22 216.243C259.822 219.86 255.8 221.813 252.733 219.888L194.728 181.351C192.222 179.782 191.661 176.368 193.509 174.072L227.346 135.864C228.687 134.189 230.964 133.587 232.972 134.367Z"
        fill="${mainColor}"
      />
      <path
        d="M235.912 208.631C247.956 199.01 263.25 179.07 269.895 149.34L251.313 141.745L217.105 196.364L235.912 208.631Z"
        fill="url(#paint1_linear_2384_1365)"
        fill-opacity="0.3"
      />
      <g filter="url(#filter0_d_2384_1365)">
        <circle cx="146" cy="118" r="110" fill="${subColor}" />
        <circle cx="146" cy="118" r="103.016" fill="${mainColor}" />
        <circle cx="146" cy="118" r="96.0317" fill="${subColor}" />
      </g>
      <defs>
        <filter
          id="filter0_d_2384_1365"
          x="24"
          y="0"
          width="244"
          height="244"
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
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2384_1365"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2384_1365"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2384_1365"
          x1="59.7029"
          y1="169.241"
          x2="39.9194"
          y2="181.686"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2384_1365"
          x1="232.678"
          y1="169.426"
          x2="252.461"
          y2="181.87"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

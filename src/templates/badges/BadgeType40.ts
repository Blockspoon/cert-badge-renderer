import { ISvgProps } from "../../interface/index.js"; 

export function createBadgeType40({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 520 544"
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
      <g filter="url(#filter0_d_2407_342)">
        <path
          d="M508 284C508 420.967 396.967 532 260 532C123.033 532 12 420.967 12 284L12 68C12 37.0721 37.0721 12 68 12L452 12.0001C482.928 12.0001 508 37.0721 508 68.0001L508 284Z"
          fill="${mainColor}"
        />
      </g>
      <path
        d="M260 506C382.607 506 482 406.607 482 284L482 84C482 58.5949 461.405 38 436 38L84 38C58.5949 38 38 58.5949 38 84L38 284C38 406.607 137.393 506 260 506Z"
        stroke="white"
        stroke-width="12"
      />
      <path
        d="M260 514C387.025 514 490 411.025 490 284L490 84C490 54.1766 465.823 30 436 30L84 30C54.1766 30 30 54.1766 30 84L30 284C30 411.025 132.974 514 260 514Z"
        stroke="#101113"
        stroke-opacity="0.5"
        stroke-width="4"
      />
      <path
        d="M479.867 284.215C479.867 405.645 381.428 504.084 259.998 504.084C138.568 504.084 40.129 405.645 40.129 284.215L40.129 79.9159C40.129 57.8245 58.0376 39.9159 80.129 39.9159L439.867 39.9159C461.959 39.9159 479.867 57.8246 479.867 79.9159L479.867 284.215Z"
        fill="#101113"
      />
      <path
        d="M179.007 67.6569C179.007 68.2091 241.516 68.6569 243.232 68.6569C244.948 68.6569 246.34 68.2091 246.34 67.6569C246.34 67.1046 244.948 66.6569 243.232 66.6569C241.516 66.6569 179.007 67.1046 179.007 67.6569Z"
        fill="${mainColor}"
      />
      <path
        d="M258.423 64.0017C259.224 62.9825 260.768 62.9825 261.569 64.0017L263.47 66.4212C264.04 67.1465 264.04 68.1673 263.47 68.8925L261.569 71.312C260.768 72.3312 259.224 72.3312 258.423 71.312L256.522 68.8925C255.953 68.1673 255.953 67.1465 256.522 66.4213L258.423 64.0017Z"
        fill="${mainColor}"
      />
      <path
        d="M340.99 67.6569C340.99 68.2091 278.48 68.6569 276.764 68.6569C275.048 68.6569 273.656 68.2091 273.656 67.6569C273.656 67.1046 275.048 66.6569 276.764 66.6569C278.48 66.6569 340.99 67.1046 340.99 67.6569Z"
        fill="${mainColor}"
      />
      <path
        d="M450.406 285.594C450.406 390.752 365.159 476 260 476C154.842 476 69.5938 390.752 69.5939 285.594L69.5939 248.091C69.5939 236.995 78.5889 228 89.6848 228L430.315 228C441.411 228 450.406 236.995 450.406 248.091L450.406 285.594Z"
        fill="${mainColor}"
        stroke="${subColor}"
        stroke-width="6"
      />
      <mask
        id="mask0_2407_342"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="66"
        y="225"
        width="388"
        height="254"
      >
        <path
          d="M453.406 285.594C453.406 392.409 366.815 479 260 479C153.185 479 66.5938 392.409 66.5939 285.594L66.5939 248.091C66.5939 235.338 76.932 225 89.6848 225L430.315 225C443.068 225 453.406 235.338 453.406 248.091L453.406 285.594Z"
          fill="${mainColor}"
        />
      </mask>
      <g mask="url(#mask0_2407_342)">
        <ellipse
          cx="260.823"
          cy="475.656"
          rx="268.144"
          ry="152.656"
          fill="${subColor}"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2407_342"
          x="0"
          y="0"
          width="520"
          height="544"
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
            result="effect1_dropShadow_2407_342"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2407_342"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  `;
}
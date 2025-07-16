import { ISvgProps } from "../../interface/index.js"; 

export function createBadgeType39({
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
      <g filter="url(#filter0_d_2407_341)">
        <path
          d="M508 284C508 420.967 396.967 532 260 532C123.033 532 12 420.967 12 284L12 52C12 29.9086 29.9086 12 52 12L468 12.0001C490.091 12.0001 508 29.9087 508 52.0001L508 284Z"
          fill="white"
        />
      </g>
      <path
        d="M488 284C488 409.921 385.921 512 260 512C134.079 512 32 409.921 32 284L32 76C32 51.6995 51.6995 32 76 32L444 32C468.301 32 488 51.6995 488 76L488 284Z"
        fill="#101113"
      />
      <path
        d="M475 283C475 401.741 378.741 498 260 498C141.259 498 45 401.741 45 283L45 83C45 62.5655 61.5655 46 82 46L438 46C458.435 46 475 62.5655 475 83L475 283Z"
        fill="${mainColor}"
        stroke="${subColor}"
        stroke-width="6"
      />
      <path
        d="M178.999 98.6569C178.999 99.2091 241.508 99.6569 243.224 99.6569C244.941 99.6569 246.332 99.2091 246.332 98.6569C246.332 98.1046 244.941 97.6569 243.224 97.6569C241.508 97.6569 178.999 98.1046 178.999 98.6569Z"
        fill="${subColor}"
      />
      <path
        d="M258.416 95.0017C259.216 93.9825 260.76 93.9825 261.561 95.0017L263.462 97.4212C264.032 98.1465 264.032 99.1673 263.462 99.8925L261.561 102.312C260.76 103.331 259.216 103.331 258.416 102.312L256.515 99.8925C255.945 99.1673 255.945 98.1465 256.515 97.4213L258.416 95.0017Z"
        fill="${subColor}"
      />
      <path
        d="M340.982 98.6569C340.982 99.2091 278.472 99.6569 276.756 99.6569C275.04 99.6569 273.648 99.2091 273.648 98.6569C273.648 98.1046 275.04 97.6569 276.756 97.6569C278.472 97.6569 340.982 98.1046 340.982 98.6569Z"
        fill="${subColor}"
      />
      <path
        d="M445.002 336.772C423.668 419.131 348.934 476.337 263.862 475.429L255.808 475.343C171.898 474.447 98.6086 418.378 75.7926 337.625C72.8686 327.277 80.6439 317 91.3977 317L429.7 317C440.039 317 447.595 326.763 445.002 336.772Z"
        fill="white"
        stroke="${subColor}"
        stroke-width="6"
      />
      <rect x="48" y="120" width="424" height="130" fill="${mainColor}" />
      <rect
        x="48"
        y="120"
        width="424"
        height="130"
        fill="white"
        fill-opacity="0.3"
      />
      <defs>
        <filter
          id="filter0_d_2407_341"
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
            result="effect1_dropShadow_2407_341"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2407_341"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  `;
} 
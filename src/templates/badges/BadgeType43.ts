import { ISvgProps } from "../../interface/index.js"; 

export function createBadgeType43({
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
      <g filter="url(#filter0_d_2407_406)">
        <path
          d="M508 284C508 420.967 396.967 532 260 532C123.033 532 12 420.967 12 284L12 52C12 29.9086 29.9086 12 52 12L468 12.0001C490.091 12.0001 508 29.9087 508 52.0001L508 284Z"
          fill="#1E1C21"
        />
      </g>
      <path
        d="M488 284C488 409.921 385.921 512 260 512C134.079 512 32 409.921 32 284L32 72C32 49.9086 49.9086 32 72 32L448 32C470.091 32 488 49.9086 488 72L488 284Z"
        fill="${mainColor}"
      />
      <path
        d="M478 284C478 404.398 380.398 502 260 502C139.602 502 42 404.398 42 284L42 80C42 59.0132 59.0132 42 80 42L440 42C460.987 42 478 59.0132 478 80L478 284Z"
        stroke="#1E1C21"
        stroke-width="4"
      />
      <path
        d="M476 121L44 121L44 80C44 60.1177 60.1177 44 80 44L440 44C459.882 44 476 60.1178 476 80L476 121Z"
        fill="${subColor}"
      />
      <rect x="44" y="121" width="432" height="161" fill="#101113" />
      <path d="M44 133L476 133" stroke="${mainColor}" stroke-width="5" />
      <path d="M44 270L476 270" stroke="${mainColor}" stroke-width="5" />
      <defs>
        <filter
          id="filter0_d_2407_406"
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
            result="effect1_dropShadow_2407_406"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2407_406"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  `;
}
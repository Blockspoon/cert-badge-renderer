import { ISvgProps } from "../../interface/index.js"; 

export function createRibbonType103({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 274 147"
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
        d="M271 147C274.2 143.8 274 134.667 273.5 130.5L270.5 125.5L260.5 119L261.5 128L271 147Z"
        fill="#636363"
      />
      <g opacity="0.7" filter="url(#filter0_f_3488_6905)">
        <path
          d="M11.5 51L36.5 42.5H68.5L259.5 116.5L267.5 140.5C202.7 106.5 103 123.5 58 134L61 72L11.5 51Z"
          fill="${mainColor}"
        />
      </g>
      <path
        d="M48.5 120.5C189.7 92.1002 259.333 114.5 273.5 130.5C268.5 118.5 263 107 252.5 66.5C244.391 35.2231 232.333 18.8338 215 12.0005C115.5 -16.9998 32.3333 16.5 0.5 32L53.5 55.0005L48.5 120.5Z"
        fill="${subColor}"
      />
      <path
        d="M269 121C255.819 106.1 176.5 85 55.5 113.5L60 52.0001L15 31.5001C44.6178 17.0652 132.5 -13 229.5 22.5"
        stroke="url(#${paintId0})"
        stroke-width="2"
      />
      <rect
        x="92"
        y="11"
        width="80"
        height="80"
        fill="url(#pattern0_3488_6905)"
      />
      <path
        d="M271 147C274.2 143.8 274 134.667 273.5 130.5L270.5 125.5L260.5 119L261.5 128L271 147Z"
        fill="#636363"
      />
      <g opacity="0.7" filter="url(#filter1_f_3488_6905)">
        <path
          d="M11.5 51L36.5 42.5H68.5L259.5 116.5L267.5 140.5C202.7 106.5 103 123.5 58 134L61 72L11.5 51Z"
          fill="${mainColor}"
        />
      </g>
      <path
        d="M48.5 120.5C189.7 92.1002 259.333 114.5 273.5 130.5C268.5 118.5 263 107 252.5 66.5C244.391 35.2231 232.333 18.8338 215 12.0005C115.5 -16.9998 32.3333 16.5 0.5 32L53.5 55.0005L48.5 120.5Z"
        fill="${subColor}"
      />
      <path
        d="M269 121C255.819 106.1 176.5 85 55.5 113.5L60 52.0001L15 31.5001C44.6178 17.0652 132.5 -13 229.5 22.5"
        stroke="url(#${paintId1})"
        stroke-width="2"
      />
      <defs>
        <filter
          id="filter0_f_3488_6905"
          x="7.5"
          y="38.5"
          width="264"
          height="106"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_3488_6905"
          />
        </filter>
        <pattern
          id="pattern0_3488_6905"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            transform="translate(-0.131198 -0.126971) scale(0.00353698)"
          />
        </pattern>
        <filter
          id="filter1_f_3488_6905"
          x="7.5"
          y="38.5"
          width="264"
          height="106"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_3488_6905"
          />
        </filter>
        <linearGradient
          id={paintId0}
          x1="47.5"
          y1="96.5"
          x2="237.5"
          y2="57.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0C1A39" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id={paintId1}
          x1="47.5"
          y1="96.5"
          x2="237.5"
          y2="57.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0C1A39" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <image
          id="image0_3488_6905"
          width="360"
          height="360"
          preserveAspectRatio="none"
        />
      </defs>
    </svg>
  `;
}
import { ISvgProps } from "../../interface/index.js"; 

export function createRibbonType26({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId4 = `paint4_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 546 166"
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
        d="M485 4C485 1.79086 486.791 0 489 0H540.59C543.279 0 545.202 2.60126 544.414 5.1727L529.647 53.3273C529.413 54.0915 529.413 54.9085 529.647 55.6727L544.414 103.827C545.202 106.399 543.279 109 540.59 109H489C486.791 109 485 107.209 485 105V4Z"
        fill="${subColor}"
      />
      <path d="M490.848 8L544.01 8.00001" stroke="white" stroke-width="3" />
      <path
        d="M490.848 100.5L544.01 100.5"
        stroke="white"
        stroke-width="3"
      />
      <rect
        x="485"
        width="45"
        height="109"
        fill="url(#paint0_linear_2399_1191)"
      />
      <path
              d="M62 4C62 1.79086 60.2091 0 58 0H6.41035C3.72086 0 1.79807 2.60126 2.58621 5.1727L17.3527 53.3273C17.5871 54.0915 17.5871 54.9085 17.3527 55.6727L2.58621 103.827C1.79807 106.399 3.72086 109 6.41035 109H58C60.2091 109 62 107.209 62 105V4Z"
        fill="${subColor}"
      />
      <path d="M2.99023 8L56.1523 8.00001" stroke="white" stroke-width="3" />
      <path
        d="M2.99023 100.5L56.1523 100.5"
        stroke="white"
        stroke-width="3"
      />
      <rect
        width="45"
        height="109"
        transform="matrix(-1 0 0 1 62 0)"
        fill="url(#paint1_linear_2399_1191)"
      />
      <rect x="62" y="4" width="423" height="105" rx="4" fill="${mainColor}" />
      <rect
        x="62"
        y="14"
        width="423"
        height="85"
        fill="white"
        fill-opacity="0.3"
      />
      <path d="M62 14L485 14" stroke="white" stroke-width="3" />
      <path d="M62 99L485 99" stroke="white" stroke-width="3" />
      <rect
        x="62"
        y="109"
        width="423"
        height="57"
        fill="url(#${paintId4})"
        fill-opacity="0.4"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2399_1191"
          x1="530"
          y1="0"
          x2="485"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0.4" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2399_1191"
          x1="45"
          y1="0"
          x2="0"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0.4" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="${paintId4}"
          x1="273.5"
          y1="109"
          x2="273.5"
          y2="166"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  `;
}
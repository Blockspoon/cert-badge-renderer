import { ISvgProps } from "../../interface/index.js"; 

export function createRibbonType45({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 546 197"
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
        d="M485 0H540.59C543.279 0 545.202 2.60126 544.414 5.1727L529.647 53.3273C529.413 54.0915 529.413 54.9085 529.647 55.6727L544.414 103.827C545.202 106.399 543.279 109 540.59 109H489C486.791 109 485 107.209 485 105V0Z"
        fill="${mainColor}"
      />
      <rect
        x="485"
        width="43"
        height="109"
        fill="url(#paint0_linear_2407_453)"
      />
      <path
        d="M60 0H5.38448C2.70255 0 0.780418 2.58741 1.55488 5.15509L16.09 53.3449C16.3172 54.0982 16.3172 54.9018 16.09 55.6551L1.55488 103.845C0.780415 106.413 2.70254 109 5.38448 109H56C58.2091 109 60 107.209 60 105V0Z"
        fill="${mainColor}"
      />
      <rect
        width="47"
        height="109"
        transform="matrix(-1 0 0 1 60 0)"
        fill="url(#paint1_linear_2407_453)"
      />
      <rect
        x="33"
        y="24"
        width="480"
        height="148.797"
        rx="4"
        fill="url(#${paintId2})"
      />
      <rect
        x="33"
        y="34"
        width="480"
        height="129"
        fill="white"
        fill-opacity="0.3"
      />
      <path d="M486 24V0L509 24H486Z" fill="${mainColor}" />
      <path d="M486 24V0L509 24H486Z" fill="black" fill-opacity="0.4" />
      <path d="M60 24V0L35 24H60Z" fill="${mainColor}" />
      <path d="M60 24V0L35 24H60Z" fill="black" fill-opacity="0.4" />
      <path d="M33 34L513 34" stroke="white" stroke-width="3" />
      <path d="M33 162.797L513 162.797" stroke="white" stroke-width="3" />
      <rect
        x="486"
        y="24"
        width="426"
        height="24"
        transform="rotate(180 486 24)"
        fill="url(#paint3_linear_2407_453)"
        fill-opacity="0.3"
      />
      <path
        d="M62.8047 172.797H483.308C477.931 184.02 468.604 187.88 454.267 196.797H91.6191C73.109 185.053 67.1222 182.906 62.8047 172.797Z"
        fill="url(#paint4_linear_2407_453)"
        fill-opacity="0.3"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2407_453"
          x1="444.905"
          y1="48"
          x2="517.303"
          y2="32.6415"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2407_453"
          x1="-43.8243"
          y1="48"
          x2="34.65"
          y2="29.8038"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="${paintId2}"
          x1="33"
          y1="98.3984"
          x2="513"
          y2="98.3984"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="0.215" stop-color="${subColor}" />
          <stop offset="0.75" stop-color="${subColor}" />
          <stop offset="1" stop-color="${mainColor}" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2407_453"
          x1="704.849"
          y1="30"
          x2="704.849"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_2407_453"
          x1="280.213"
          y1="178.797"
          x2="280.213"
          y2="196.797"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  `;
}
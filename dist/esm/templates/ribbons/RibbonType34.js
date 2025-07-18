"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRibbonType34 = createRibbonType34;
function createRibbonType34({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId4 = `paint4_linear_${Math.random().toString(36).substr(2, 9)}`;
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
        d="M485 4.20313C485 1.99399 486.791 0.203125 489 0.203125H540.59C543.279 0.203125 545.202 2.80438 544.414 5.37582L529.647 53.5304C529.413 54.2947 529.413 55.1116 529.647 55.8758L544.414 104.03C545.202 106.602 543.279 109.203 540.59 109.203H489C486.791 109.203 485 107.412 485 105.203V4.20313Z"
        fill="${mainColor}"
      />
      <path
        d="M485 4.20313C485 1.99399 486.791 0.203125 489 0.203125H540.59C543.279 0.203125 545.202 2.80438 544.414 5.37582L529.647 53.5304C529.413 54.2947 529.413 55.1116 529.647 55.8758L544.414 104.03C545.202 106.602 543.279 109.203 540.59 109.203H489C486.791 109.203 485 107.412 485 105.203V4.20313Z"
        fill="black"
        fill-opacity="0.2"
      />
      <rect
        x="485"
        width="46"
        height="109"
        fill="url(#paint0_linear_2407_190)"
      />
      <path
        d="M62 4.20313C62 1.99399 60.2091 0.203125 58 0.203125H5.43648C2.73918 0.203125 0.815063 2.81823 1.61767 5.39335L16.6153 53.5129C16.8569 54.288 16.8569 55.1183 16.6153 55.8934L1.61767 104.013C0.815063 106.588 2.73918 109.203 5.43648 109.203H58C60.2091 109.203 62 107.412 62 105.203V4.20313Z"
        fill="${mainColor}"
      />
      <path
        d="M62 4.20313C62 1.99399 60.2091 0.203125 58 0.203125H5.43648C2.73918 0.203125 0.815063 2.81823 1.61767 5.39335L16.6153 53.5129C16.8569 54.288 16.8569 55.1183 16.6153 55.8934L1.61767 104.013C0.815063 106.588 2.73918 109.203 5.43648 109.203H58C60.2091 109.203 62 107.412 62 105.203V4.20313Z"
        fill="black"
        fill-opacity="0.2"
      />
      <rect
        width="48"
        height="109"
        transform="matrix(-1 0 0 1 62 0)"
        fill="url(#paint1_linear_2407_190)"
      />
      <path
        d="M63.3829 173H482.255C478.396 183.094 474.898 188.471 466.279 197H79.9829C71.6664 189.461 68.3305 184.142 63.3829 173Z"
        fill="url(#paint2_linear_2407_190)"
        fill-opacity="0.4"
      />
      <rect
        x="485"
        y="24.2031"
        width="423"
        height="24"
        transform="rotate(180 485 24.2031)"
        fill="url(#paint3_linear_2407_190)"
        fill-opacity="0.3"
      />
      <rect
        x="33"
        y="24.2031"
        width="480"
        height="148.797"
        rx="4"
        fill="url(#${paintId4})"
      />
      <rect
        x="33"
        y="34"
        width="480"
        height="129"
        fill="white"
        fill-opacity="0.3"
      />
      <path d="M485 24.2031V0.203125L508 24.2031H485Z" fill="${mainColor}" />
      <path
        d="M485 24.2031V0.203125L508 24.2031H485Z"
        fill="black"
        fill-opacity="0.6"
      />
      <path d="M62 24.2031V0.203125L35 24.2031H62Z" fill="${mainColor}" />
      <path
        d="M62 24.2031V0.203125L35 24.2031H62Z"
        fill="black"
        fill-opacity="0.6"
      />
      <path d="M33 34.2031L513 34.2031" stroke="white" stroke-width="3" />
      <path d="M33 163L513 163" stroke="white" stroke-width="3" />
      <defs>
        <linearGradient
          id="paint0_linear_2407_190"
          x1="442.108"
          y1="48"
          x2="519.078"
          y2="30.5323"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2407_190"
          x1="-44.7568"
          y1="48"
          x2="35.2118"
          y2="29.0628"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2407_190"
          x1="279.88"
          y1="179"
          x2="279.88"
          y2="197"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2407_190"
          x1="702.308"
          y1="30.2031"
          x2="702.308"
          y2="48.2031"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="${paintId4}"
          x1="33"
          y1="98.6016"
          x2="513"
          y2="98.6016"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="0.215" stop-color="${subColor}" />
          <stop offset="0.75" stop-color="${subColor}" />
          <stop offset="1" stop-color="${mainColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

import { ISvgProps } from "../../interface/index.js"; 

export function createBadgeType38({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 480 410"
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
      <g filter="url(#filter0_d_2407_340)">
        <path
          d="M453.15 261.005L255.731 393.142C246.053 399.62 233.947 399.62 224.269 393.142L26.8497 261.005C17.6372 254.842 12 243.724 12 231.734L12 47.0003C12 28.1422 25.6857 12.8663 42.5807 12.8663L437.419 12.8663C454.314 12.8663 468 28.1422 468 47.0003V231.715C468 243.706 462.363 254.824 453.15 260.986V261.005Z"
          fill="white"
        />
      </g>
      <path
        d="M438.192 257.835L254.627 377.597C245.628 383.468 234.372 383.468 225.373 377.597L41.8076 257.835C33.2416 252.249 28 242.173 28 231.305L28 59.9371C28 42.8452 40.7253 29 56.4347 29L423.565 29C439.275 29 452 42.8452 452 59.9371V231.288C452 242.156 446.758 252.233 438.192 257.818V257.835Z"
        fill="${mainColor}"
      />
      <circle cx="375" cy="95" r="43" fill="white" />
      <circle cx="375" cy="95" r="40" fill="${subColor}" />
      <circle cx="375" cy="95" r="38" fill="white" />
      <mask
        id="mask0_2407_340"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="28"
        y="29"
        width="424"
        height="353"
      >
        <path
          d="M438.192 257.835L254.627 377.597C245.628 383.468 234.372 383.468 225.373 377.597L41.8076 257.835C33.2416 252.249 28 242.173 28 231.305L28 59.9371C28 42.8452 40.7253 29 56.4347 29L423.565 29C439.275 29 452 42.8452 452 59.9371V231.288C452 242.156 446.758 252.233 438.192 257.818V257.835Z"
          fill="${mainColor}"
        />
      </mask>
      <g mask="url(#mask0_2407_340)">
        <rect
          y="149"
          width="480"
          height="233"
          fill="url(#paint0_linear_2407_340)"
          fill-opacity="0.3"
        />
      </g>
      <path
        d="M52.2506 253.788L52.2501 253.788C44.6961 248.853 40 239.888 40 230.135L40 66.5349C40 51.1563 51.3885 39 65.0934 39L414.907 39C428.612 39 440 51.1563 440 66.5349V230.119C440 239.871 435.304 248.837 427.75 253.772L426.844 254.364V254.381L252.843 368.122C244.933 373.293 235.067 373.293 227.157 368.122L52.2506 253.788Z"
        stroke="black"
        stroke-opacity="0.6"
        stroke-width="4"
      />
      <defs>
        <filter
          id="filter0_d_2407_340"
          x="0"
          y="0.866333"
          width="480"
          height="409.134"
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
            result="effect1_dropShadow_2407_340"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2407_340"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2407_340"
          x1="240"
          y1="149"
          x2="240"
          y2="382"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.37" />
        </linearGradient>
      </defs>
    </svg>
  `;
} 
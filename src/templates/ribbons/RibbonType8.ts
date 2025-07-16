import { ISvgProps } from "../../interface/index.js"; 

export function createRibbonType8({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 528 177"
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
        d="M501.5 170.5L522 151L505 154C504.667 157.167 503.5 164.9 501.5 170.5Z"
        fill="#FF1B64"
      />
      <path
        opacity="0.4"
        d="M501.5 170.5L522 151L505 154C504.833 155.667 504.4 159.5 504 161.5C503.6 163.5 502.167 168.333 501.5 170.5Z"
        fill="black"
      />
      <path
        d="M26.5 170.5L6 151L23 154C23.3333 157.167 24.5 164.9 26.5 170.5Z"
        fill="#FF1B64"
      />
      <path
        opacity="0.4"
        d="M26.5 170.5L6 151L23 154C23.1667 155.667 23.6 159.5 24 161.5C24.4 163.5 25.8333 168.333 26.5 170.5Z"
        fill="black"
      />
      <rect width="528" height="154" rx="14" fill="url(#${paintId0})" />
      <rect
        y="9.25781"
        width="528"
        height="135.59"
        fill="url(#paint1_linear_2481_331)"
        fill-opacity="0.3"
      />
      <mask
        id="mask0_2481_331"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="528"
        height="154"
      >
        <rect width="528" height="154" rx="14" fill="url(#${paintId2})" />
      </mask>
      <g mask="url(#mask0_2481_331)">
        <path d="M-3 9H531" stroke="${mainColor}" stroke-width="3" />
        <path d="M-3 145L531 145" stroke="${mainColor}" stroke-width="3" />
      </g>
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="-5.75303e-07"
          y1="3.5"
          x2="528"
          y2="148"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2481_331"
          x1="264"
          y1="9.25781"
          x2="264"
          y2="144.848"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.34088" stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.5" />
        </linearGradient>
        <linearGradient
          id="${paintId2}"
          x1="-5.75303e-07"
          y1="3.5"
          x2="528"
          y2="148"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}
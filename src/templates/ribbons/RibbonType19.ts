import { ISvgProps } from "../../interface/index.js"; 

export function createRibbonType19({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
  extraColor1 = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 464 207"
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
        d="M437 186.595L461 186.595L443 206.595L437 186.595Z"
        fill="${extraColor1}"
      />
      <path
        d="M437 186.595L461 186.595L443 206.595L437 186.595Z"
        fill="black"
        fill-opacity="0.7"
      />
      <path
        d="M27 186.595L3 186.595L21 206.595L27 186.595Z"
        fill="${extraColor1}"
      />
      <path
        d="M27 186.595L3 186.595L21 206.595L27 186.595Z"
        fill="black"
        fill-opacity="0.7"
      />
      <rect
        y="18.5948"
        width="464"
        height="170"
        rx="8"
        fill="url(#${paintId0})"
      />
      <mask
        id="mask0_2384_1402"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="18"
        width="464"
        height="171"
      >
        <path
          d="M0 32.5948C0 24.8629 6.26801 18.5948 14 18.5948H450C457.732 18.5948 464 24.8629 464 32.5948V188.595H0V32.5948Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_2384_1402)">
        <path
          d="M-20 37.479C-15.6524 32.1335 -12.4468 30.7643 -5.68182 30.6033L465.386 30.6034C474.492 30.4637 478.787 31.9948 484 39.5948"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M-20 170.711C-15.6524 176.056 -12.4468 177.425 -5.68182 177.586L465.386 177.586C474.492 177.726 478.787 176.195 484 168.595"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </g>
      <rect
        x="21"
        y="188.595"
        width="422"
        height="18"
        fill="url(#paint1_linear_2384_1402)"
        fill-opacity="0.4"
      />
      <rect
        width="422"
        height="18"
        transform="matrix(1 0 0 -1 21 18.5948)"
        fill="url(#paint2_linear_2384_1402)"
        fill-opacity="0.4"
      />
      <rect
        y="31.6613"
        width="464"
        height="144.766"
        fill="white"
        fill-opacity="0.3"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="-5.0557e-07"
          y1="22.4585"
          x2="476.152"
          y2="126.196"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2384_1402"
          x1="280"
          y1="188.595"
          x2="280"
          y2="206.595"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0.4" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2384_1402"
          x1="259"
          y1="0"
          x2="259"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0.4" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  `;
}
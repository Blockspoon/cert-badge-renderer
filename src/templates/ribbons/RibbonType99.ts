import { ISvgProps } from "../../interface/index.js"; 

export function createRibbonType99({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 158 166"
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
      <path d="M0 1V166L79 130.98L158 166V1H0Z" fill="${mainColor}" />
      <path d="M143 160V1H15.2324L15 160" stroke="white" stroke-width="2" />
      <path
        d="M0 32H158V96.5L79 102L0 96.5V32Z"
        fill="url(#paint0_linear_3488_6871)"
      />
      <path d="M0 1V166L79 130.98L158 166V1H0Z" fill="${mainColor}" />
      <path d="M143 160V1H15.2324L15 160" stroke="white" stroke-width="2" />
      <path
        d="M0 32H158V96.5L79 102L0 96.5V32Z"
        fill="url(#paint1_linear_3488_6871)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3488_6871"
          x1="74.9338"
          y1="45"
          x2="74.9338"
          y2="91"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3488_6871"
          x1="74.9338"
          y1="45"
          x2="74.9338"
          y2="91"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  `;
}
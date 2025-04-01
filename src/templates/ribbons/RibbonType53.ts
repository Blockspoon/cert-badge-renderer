export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createRibbonType53({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 536 187"
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
        d="M30 169L506.5 169L499.5 187H36.5L30 169Z"
        fill="url(#paint0_linear_2407_463)"
        fill-opacity="0.4"
      />
      <path
        d="M506.5 18.0001L30 18L37 1.99902e-05L500 6.04669e-05L506.5 18.0001Z"
        fill="url(#paint1_linear_2407_463)"
        fill-opacity="0.4"
      />
      <rect y="18" width="536" height="151" rx="4" fill="${mainColor}" />
      <defs>
        <linearGradient
          id="paint0_linear_2407_463"
          x1="322.756"
          y1="169"
          x2="322.756"
          y2="187"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0.5" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2407_463"
          x1="213.744"
          y1="18"
          x2="213.744"
          y2="3.54416e-05"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0.5" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  `;
}
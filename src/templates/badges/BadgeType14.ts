export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBadgeType14({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 488 488"
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
      <path
        d="M244 488C109.25 488 0 378.75 0 244C0 109.25 109.25 0 244 0C378.75 0 488 109.25 488 244V468C488 479.046 479.046 488 468 488H244Z"
        fill="url(#${paintId0})"
      />
      <ellipse
        cx="244"
        cy="250"
        rx="220"
        ry="226"
        fill="black"
        fill-opacity="0.2"
      />
      <circle cx="244" cy="244" r="212" fill="${mainColor}" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.6489 187.319H452.35C456.855 204.493 459.253 222.508 459.253 241.077C459.253 279.081 449.211 314.762 431.612 345.659H56.3872C38.7879 314.762 28.7461 279.081 28.7461 241.077C28.7461 222.508 31.1436 204.493 35.6489 187.319Z"
        fill="url(#paint1_linear_2390_128)"
        fill-opacity="0.3"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M452.349 187.32H35.6484C59.7067 95.6138 143.869 27.9062 243.999 27.9062C344.129 27.9062 428.291 95.6138 452.349 187.32Z"
        fill="white"
      />
      <circle cx="244" cy="244" r="216" stroke="white" stroke-width="8" />
      <circle cx="244" cy="244" r="210" stroke="#FF8C53" stroke-width="4" />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="244"
          y1="488"
          x2="244"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2390_128"
          x1="243.999"
          y1="187.319"
          x2="243.999"
          y2="345.659"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>
  `;
} 
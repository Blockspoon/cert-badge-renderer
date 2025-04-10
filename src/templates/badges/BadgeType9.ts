import { ISvgProps } from "../../interface"; 

export function createBadgeType9({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 542 542"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        width: 100%;
        height: 100%;
        object-fit: contain;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <circle cx="271" cy="271" r="263" fill="#101113" />
      <circle
        cx="271"
        cy="271"
        r="250"
        fill="url(#${paintId0})"
      />
      <circle
        cx="271"
        cy="271"
        r="267"
        stroke="${mainColor}"
        stroke-width="8"
      />
      <ellipse
        cx="271"
        cy="280.5"
        rx="203"
        ry="196.5"
        fill="black"
        fill-opacity="0.3"
      />
      <circle cx="271" cy="271" r="197" fill="#101113" />
      <circle cx="271" cy="271" r="186" stroke="white" stroke-width="2" />
      <line
        x1="1.5"
        y1="-1.5"
        x2="30.1226"
        y2="-1.5"
        transform="matrix(0.987644 0.156715 -0.123525 0.992342 30.5371 256)"
        stroke="${subColor}"
        stroke-width="3"
        stroke-linecap="round"
      />
      <line
        x1="1.5"
        y1="-1.5"
        x2="30.0599"
        y2="-1.5"
        transform="matrix(0.996898 0.078705 -0.0618165 0.998088 30.5371 266.516)"
        stroke="${subColor}"
        stroke-width="3"
        stroke-linecap="round"
      />
      <line
        x1="31.5"
        y1="274.527"
        x2="60.0388"
        y2="274.527"
        stroke="${subColor}"
        stroke-width="3"
        stroke-linecap="round"
      />
      <line
        x1="1.5"
        y1="-1.5"
        x2="30.0599"
        y2="-1.5"
        transform="matrix(0.996898 -0.078705 0.0618165 0.998088 30.5371 285.598)"
        stroke="${subColor}"
        stroke-width="3"
        stroke-linecap="round"
      />
      <line
        x1="1.5"
        y1="-1.5"
        x2="30.1226"
        y2="-1.5"
        transform="matrix(0.987644 -0.156715 0.123525 0.992342 30.5371 296.148)"
        stroke="${subColor}"
        stroke-width="3"
        stroke-linecap="round"
      />
      <line
        x1="1.5"
        y1="-1.5"
        x2="30.1226"
        y2="-1.5"
        transform="matrix(-0.987644 0.156715 0.123525 0.992342 511.463 256)"
        stroke="${subColor}"
        stroke-width="3"
        stroke-linecap="round"
      />
      <line
        x1="1.5"
        y1="-1.5"
        x2="30.0599"
        y2="-1.5"
        transform="matrix(-0.996898 0.078705 0.0618165 0.998088 511.463 266.516)"
        stroke="${subColor}"
        stroke-width="3"
        stroke-linecap="round"
      />
      <line
        x1="1.5"
        y1="-1.5"
        x2="30.0388"
        y2="-1.5"
        transform="matrix(-1 0 0 1 512 276.027)"
        stroke="${subColor}"
        stroke-width="3"
        stroke-linecap="round"
      />
      <line
        x1="1.5"
        y1="-1.5"
        x2="30.0599"
        y2="-1.5"
        transform="matrix(-0.996898 -0.078705 -0.0618165 0.998088 511.463 285.598)"
        stroke="${subColor}"
        stroke-width="3"
        stroke-linecap="round"
      />
      <line
        x1="1.5"
        y1="-1.5"
        x2="30.1226"
        y2="-1.5"
        transform="matrix(-0.987644 -0.156715 -0.123525 0.992342 511.463 296.148)"
        stroke="${subColor}"
        stroke-width="3"
        stroke-linecap="round"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="271"
          y1="21"
          x2="271"
          y2="521"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
} 
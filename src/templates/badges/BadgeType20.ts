export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBadgeType20({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 536 536"
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
      <circle
        cx="268"
        cy="268"
        r="268"
        fill="url(#${paintId0})"
      />
      <circle cx="268" cy="268" r="248" fill="${mainColor}" />
      <circle
        cx="268"
        cy="268"
        r="245.5"
        stroke="black"
        stroke-opacity="0.5"
        stroke-width="5"
      />
      <ellipse
        cx="268"
        cy="279"
        rx="216"
        ry="211"
        fill="black"
        fill-opacity="0.3"
      />
      <circle
        cx="268"
        cy="268"
        r="209"
        fill="url(#${paintId1})"
      />
      <circle cx="268" cy="267" r="199" stroke="white" stroke-width="2" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M75.8994 185H460.102C470.978 211.204 477.001 240.078 477.001 270.409C477.001 290.661 474.316 310.264 469.294 328.855H66.7077C61.6855 310.264 59 290.661 59 270.409C59 240.078 65.0236 211.204 75.8994 185Z"
        fill="url(#paint2_linear_2384_1404)"
        fill-opacity="0.3"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="268"
          y1="0"
          x2="268"
          y2="536"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id="${paintId1}"
          x1="268"
          y1="59"
          x2="268"
          y2="477"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${subColor}" />
          <stop offset="1" stop-color="${mainColor}" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2384_1404"
          x1="268.001"
          y1="215.822"
          x2="268.001"
          y2="376.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>
  `;
} 
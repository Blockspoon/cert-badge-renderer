import { ISvgProps } from "../../interface"; 

export function createBadgeType4({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 454 454"
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
      <circle
        cx="227"
        cy="227"
        r="227"
        fill="url(#${paintId0})"
      />
      <circle
        cx="227"
        cy="227"
        r="212"
        stroke="white"
        stroke-opacity="0.3"
        stroke-width="4"
      />
      <circle cx="227" cy="227" r="182" fill="#EFEFEF" />
      <circle cx="227" cy="227" r="164" fill="white" />
      <circle
        cx="227"
        cy="227"
        r="220.5"
        stroke="black"
        stroke-opacity="0.5"
        stroke-width="13"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="227"
          y1="0"
          x2="227"
          y2="454"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
} 
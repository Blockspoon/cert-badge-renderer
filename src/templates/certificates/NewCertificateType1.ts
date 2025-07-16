import { ISvgProps } from "../../interface/index.js";

export function createNewCertificateType1({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1152 810"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width="1152" height="810" fill="white" />
      <rect x="50" y="50" width="1052" height="710" rx="18" fill="#FDFDFF" />
      <rect
        x="50"
        y="50"
        width="1052"
        height="710"
        rx="18"
        stroke="url(#${paintId0})"
        stroke-width="12"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="576"
          y1="56"
          x2="576"
          y2="754"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

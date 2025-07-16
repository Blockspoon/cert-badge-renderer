import { ISvgProps } from "../../interface/index.js"; 

export function createIconBg9({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
  extraColor1 = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 94 94"
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
      <circle cx="47" cy="47" r="47" fill="${extraColor1}" />
      <circle
        cx="47"
        cy="47"
        r="44"
        fill="url(#${paintId0})"
      />
      <circle cx="47" cy="47" r="42" fill="${extraColor1}" />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="47"
          y1="3"
          x2="47"
          y2="91"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="0.595" stop-color="${subColor}" />
          <stop offset="1" stop-color="${mainColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}
import { ISvgProps } from "../../interface/index.js"; 

export function createBadgeType30({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
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
        r="260"
        fill="white"
        stroke="${mainColor}"
        stroke-width="16"
      />
      <circle
        cx="267.999"
        cy="267.999"
        r="200.729"
        transform="rotate(-0.0769217 267.999 267.999)"
        fill="white"
        stroke="${mainColor}"
        stroke-width="12"
      />
    </svg>
  `;
} 
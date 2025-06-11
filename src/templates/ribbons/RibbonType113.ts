import { ISvgProps } from "../../interface"; 

export function createRibbonType113({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 577 76"
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
        d="M171.598 75.151H0.732422L39.0701 37.5593L0.732422 0H171.598V75.151Z"
        fill="${mainColor}"
      />
      <path
        d="M406.135 75.151H577L538.695 37.5593L577 0H406.135V75.151Z"
        fill="${mainColor}"
      />
    </svg>
  `;
}
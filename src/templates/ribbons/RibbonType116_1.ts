import { ISvgProps } from "../../interface";

export function createRibbonType116_1({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 488 180"
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
        opacity="0.2"
        d="M75.9963 82.8737H379.768C399.244 62.0068 414.483 37.1246 424.095 9.61816H31.6699C41.2814 37.1562 56.5205 62.0068 75.9963 82.8737Z"
        fill="black"
      />
      <path d="M455 0H0V76H455V0Z" fill="${mainColor}" />
    </svg>
  `;
}

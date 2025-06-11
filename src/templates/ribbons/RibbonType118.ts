import { ISvgProps } from "../../interface";

export function createRibbonType118({
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
        d="M409.865 128C296.042 58.4007 152.928 58.4007 39.105 128C27.4247 120.368 15.2326 113.22 2.58894 106.587C1.11384 92.322 0.240831 77.8449 0 63.2163C137.846 -21.0721 311.154 -21.0721 449 63.2163C448.759 77.8449 447.886 92.322 446.411 106.587C433.767 113.22 421.605 120.368 409.895 128H409.865Z"
        fill="${mainColor}"
      />
    </svg>
  `;
}

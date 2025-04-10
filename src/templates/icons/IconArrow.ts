import { ISvgProps } from "../../interface"; 

export function createIconArrow({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 150 299"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <path
          d="M0.338971 66.3969L83.1087 149.444L0.242188 232.589L0.338971 298.775L149.034 149.444L0.338971 0.210938V66.3969Z"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
} 
import { ISvgProps } from "../../interface"; 

export function createIconFrame2({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 128 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <path
          d="M127.242 0.210938H0.242188C32.2422 29.4109 43.2422 63.0443 44.7422 76.2109H127.242V0.210938Z"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
} 
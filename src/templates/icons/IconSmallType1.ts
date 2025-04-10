import { ISvgProps } from "../../interface"; 

export function createIconSmallType1({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 71 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <rect
          width="61"
          height="61"
          rx="20"
          transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 35.291 78.2266)"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
} 
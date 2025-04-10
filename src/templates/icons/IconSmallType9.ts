import { ISvgProps } from "../../interface"; 

export function createIconSmallType9({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 42 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <path
          d="M18.2424 11.1172L21.0318 0.707204L24.1829 12.709L41.2145 13.0542L26.6749 19.2611L28.6312 27.779L18.4347 21.7324L0.394459 26.2481L13.1273 18.3429L6.08839 9.51776L18.2424 11.1172Z"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
} 
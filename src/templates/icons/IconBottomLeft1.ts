export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createIconBottomLeft1({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 307 237"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <path
          d="M307 237C291.5 175.491 160.947 185.416 129 139.639C84 62.9997 55.5 8.72737 2.0158e-05 -1.83939e-06L3.05176e-05 237L307 237Z"
          fill="${mainColor}"
          fill-opacity="0.9"
        />
      </svg>
    </div>
  `;
} 
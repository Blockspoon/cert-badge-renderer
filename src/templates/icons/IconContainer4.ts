export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createIconContainer4({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1041 699"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <rect
          x="0.742188"
          y="0.314453"
          width="1040"
          height="698"
          rx="12"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
} 
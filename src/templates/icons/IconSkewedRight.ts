export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createIconSkewedRight({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 509 283"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <path
          d="M0.255859 282.211L508.256 162.211L508.256 282.211L0.255859 282.211Z"
          fill="${subColor}"
        />
        <path
          d="M508.256 0.210938L508.256 282.211L381.256 282.211L508.256 0.210938Z"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
} 
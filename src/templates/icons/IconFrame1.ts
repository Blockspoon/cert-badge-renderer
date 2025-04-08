export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createIconFrame1({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 212 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal;"
      >
        <path
          d="M0.242188 42.2109V0.210938H211.742V129.711H181.242V42.2109H0.242188Z"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
} 
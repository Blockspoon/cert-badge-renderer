export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createIconSmallType2({
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
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal;"
      >
        <rect
          y="-1.41421"
          width="59"
          height="59"
          rx="19"
          transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 34.291 75.8123)"
          stroke="${mainColor}"
          stroke-width="2"
        />
      </svg>
    </div>
  `;
} 
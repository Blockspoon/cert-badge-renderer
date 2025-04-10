import { ISvgProps } from "../../interface"; 

export function createIconDonut({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 196 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M97.7422 195.211C151.59 195.211 195.242 151.559 195.242 97.7109C195.242 43.8632 151.59 0.210938 97.7422 0.210938C43.8944 0.210938 0.242188 43.8632 0.242188 97.7109C0.242188 151.559 43.8944 195.211 97.7422 195.211ZM97.7422 152.211C127.842 152.211 152.242 127.81 152.242 97.7109C152.242 67.6114 127.842 43.2109 97.7422 43.2109C67.6427 43.2109 43.2422 67.6114 43.2422 97.7109C43.2422 127.81 67.6427 152.211 97.7422 152.211Z"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
} 
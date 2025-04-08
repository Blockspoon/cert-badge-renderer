export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createIconTopRight1({
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
          d="M0 0C15.5 61.5086 146.053 51.5843 178 97.3612C223 174 251.5 228.273 307 237L307 2.2798e-05L0 0Z"
          fill="${mainColor}"
          fillOpacity="0.9"
        />
      </svg>
    </div>
  `;
} 
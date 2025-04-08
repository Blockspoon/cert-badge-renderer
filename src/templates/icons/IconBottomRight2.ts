export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createIconBottomRight2({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 297 237"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <path
          d="M0 237C14.9951 175.491 141.296 185.416 172.202 139.639C215.736 62.9997 243.308 8.72737 297 -2.27651e-06L297 237L0 237Z"
          fill="url(#${paintId0})"
        />
        <defs>
          <linearGradient
            id="${paintId0}"
            x1="148.5"
            y1="237"
            x2="148.5"
            y2="-8.76765e-06"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="${subColor}" />
            <stop offset="1" stop-color="${mainColor}" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  `;
} 
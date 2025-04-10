import { ISvgProps } from "../../interface"; 

export function createIconSpring1({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 263 331"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <path
          opacity="0.6"
          d="M131.896 330.211C203.693 330.211 261.896 307.377 261.896 279.211C261.896 251.044 203.693 228.211 131.896 228.211C60.0995 228.211 1.89648 251.044 1.89648 279.211C1.89648 307.377 60.0995 330.211 131.896 330.211Z"
          fill="white"
        />
        <path
          d="M131.896 165.211C203.693 165.211 261.896 142.601 261.896 114.711C261.896 86.8206 203.693 64.2109 131.896 64.2109C60.0995 64.2109 1.89648 86.8206 1.89648 114.711C1.89648 142.601 60.0995 165.211 131.896 165.211Z"
          stroke="${mainColor}"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M261.896 184.711C261.896 156.825 203.695 134.211 131.892 134.211C60.0888 134.211 1.89648 156.816 1.89648 184.711C1.89648 212.606 60.098 235.211 131.901 235.211"
          stroke="${mainColor}"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M134.289 229.211L129.896 236.211H140.896L134.289 229.211Z"
          fill="${mainColor}"
        />
        <path
          d="M1.89648 244.857C1.89648 243.601 2.01648 242.363 2.23802 241.126"
          stroke="${mainColor}"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M4.82227 234.105C17.4592 211.253 69.5301 194.118 131.856 194.118C203.626 194.118 261.817 216.83 261.817 244.856C261.817 272.883 207.595 294.011 139.269 295.51"
          stroke="${mainColor}"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeDasharray="8.04 8.04"
        />
        <path
          d="M135.55 295.576C134.322 295.586 133.094 295.595 131.857 295.595"
          stroke="${mainColor}"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M130.007 289.211L133.396 296.711H122.396L130.007 289.211Z"
          fill="${mainColor}"
        />
        <path
          opacity="0.8"
          d="M131.896 102.211C203.693 102.211 261.896 79.3775 261.896 51.2109C261.896 23.0444 203.693 0.210938 131.896 0.210938C60.0995 0.210938 1.89648 23.0444 1.89648 51.2109C1.89648 79.3775 60.0995 102.211 131.896 102.211Z"
          fill="white"
        />
      </svg>
    </div>
  `;
} 
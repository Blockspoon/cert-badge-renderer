"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconSpring2 = createIconSpring2;
function createIconSpring2({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 263 268"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <path
          opacity="0.6"
          d="M131.896 267.211C203.693 267.211 261.896 244.377 261.896 216.211C261.896 188.044 203.693 165.211 131.896 165.211C60.0995 165.211 1.89648 188.044 1.89648 216.211C1.89648 244.377 60.0995 267.211 131.896 267.211Z"
          fill="white"
        />
        <path
          d="M131.896 102.211C203.693 102.211 261.896 79.6013 261.896 51.7109C261.896 23.8206 203.693 1.21094 131.896 1.21094C60.0995 1.21094 1.89648 23.8206 1.89648 51.7109C1.89648 79.6013 60.0995 102.211 131.896 102.211Z"
          stroke="${mainColor}"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M261.896 121.711C261.896 93.8254 203.695 71.2109 131.892 71.2109C60.0888 71.2109 1.89648 93.816 1.89648 121.711C1.89648 149.606 60.098 172.211 131.901 172.211"
          stroke="${mainColor}"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M134.289 166.211L129.896 173.211H140.896L134.289 166.211Z"
          fill="${mainColor}"
        />
        <path
          d="M1.89648 181.857C1.89648 180.601 2.01648 179.363 2.23802 178.126"
          stroke="${mainColor}"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M4.82227 171.105C17.4592 148.253 69.5301 131.118 131.856 131.118C203.626 131.118 261.817 153.83 261.817 181.856C261.817 209.883 207.595 231.011 139.269 232.51"
          stroke="${mainColor}"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeDasharray="8.04 8.04"
        />
        <path
          d="M135.55 232.576C134.322 232.586 133.094 232.595 131.857 232.595"
          stroke="${mainColor}"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M130.007 226.211L133.396 233.711H122.396L130.007 226.211Z"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
}

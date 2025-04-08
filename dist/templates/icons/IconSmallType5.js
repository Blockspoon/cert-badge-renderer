"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconSmallType5 = createIconSmallType5;
function createIconSmallType5({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 66 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal;"
      >
        <path
          d="M39.0514 0.292363L52.2622 16.5084L65.4188 32.7686L54.08 50.3473L42.6826 67.8879L22.464 62.536L2.26336 57.1165L1.10634 36.2302L0.01917 15.3402L19.5227 7.78362L39.0514 0.292363Z"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
}

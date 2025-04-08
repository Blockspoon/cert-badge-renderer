"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconSmallType3 = createIconSmallType3;
function createIconSmallType3({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal;"
      >
        <path
          d="M21.5102 8.45018C27.3629 15.341 25.442 22.0303 16.8581 23.7884C8.29213 25.5221 0.724183 22.9322 0.262878 17.9614C-0.237583 13.0181 2.20173 6.03501 5.39428 2.35694C8.58682 -1.32113 15.6363 1.56251 21.5102 8.45018Z"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
}

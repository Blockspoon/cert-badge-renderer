"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconBottomRight1 = createIconBottomRight1;
function createIconBottomRight1({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
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
          d="M0 237C15.5 175.491 146.053 185.416 178 139.639C223 62.9997 251.5 8.72737 307 -1.83939e-06L307 237L0 237Z"
          fill="${mainColor}"
          fill-opacity="0.9"
        />
      </svg>
    </div>
  `;
}

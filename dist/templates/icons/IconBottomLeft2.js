"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconBottomLeft2 = createIconBottomLeft2;
function createIconBottomLeft2({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
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
          d="M307 237C291.5 175.491 160.947 185.416 129 139.639C84 62.9997 55.5 8.72737 2.0158e-05 -1.83939e-06L3.05176e-05 237L307 237Z"
          fill="url(#${paintId0})"
        />
        <defs>
          <linearGradient
            id="${paintId0}"
            x1="153.5"
            y1="237"
            x2="153.5"
            y2="-8.54909e-06"
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

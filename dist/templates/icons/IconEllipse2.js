"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconEllipse2 = createIconEllipse2;
function createIconEllipse2({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_radial_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 750 595"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <ellipse
          cx="374.756"
          cy="297.378"
          rx="374.5"
          ry="297"
          fill="url(#${paintId0})"
        />
        <defs>
          <radialGradient
            id="${paintId0}"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(374.756 297.378) rotate(90) scale(297 374.5)"
          >
            <stop stop-color="${mainColor}" stop-opacity="0.2" />
            <stop offset="1" stop-color="${subColor}" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  `;
}

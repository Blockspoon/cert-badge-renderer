"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBackgroundType1 = createBackgroundType1;
function createBackgroundType1({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <div
      style="
        width: 100%;
        height: 100%;
        isolation: isolate;
        display: flex;
        align-items: center;
        justify-content: center;
        will-change: transform, contents;
        transform: translateZ(0);
        backface-visibility: hidden;
        position: relative;
      "
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1064 722"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="6"
          width="1052"
          height="710"
          rx="18"
          stroke="url(#${paintId0})"
          stroke-width="12"
        />
        <defs>
          <linearGradient
            id="${paintId0}"
            x1="532"
            y1="12"
            x2="532"
            y2="710"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="${mainColor}" />
            <stop offset="1" stop-color="${subColor}" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  `;
}

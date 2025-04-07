"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBackgroundEmptyHorizontal = createBackgroundEmptyHorizontal;
function createBackgroundEmptyHorizontal({ mainColor = "#96A6B4", }) {
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
        viewBox="0 0 811 1153"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="810"
          height="1152"
          transform="translate(0.5 0.74707)"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
}

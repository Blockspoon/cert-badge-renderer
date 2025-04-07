"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBackgroundType2Single = createBackgroundType2Single;
function createBackgroundType2Single({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
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
        viewBox="0 0 1096 755"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="6.21094"
          width="1084"
          height="742"
          rx="18"
          stroke="${mainColor}"
          stroke-width="12"
        />
      </svg>
    </div>
  `;
}

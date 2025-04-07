"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBackgroundType21 = createBackgroundType21;
function createBackgroundType21({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
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
        viewBox="0 0 1073 735"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="2.16016"
          width="1069"
          height="730"
          rx="10"
          stroke="${mainColor}"
          stroke-width="4"
        />
      </svg>
    </div>
  `;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBackgroundType9_1 = createBackgroundType9_1;
function createBackgroundType9_1({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
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
          x="6.47852"
          y="6.83984"
          width="798"
          height="1140"
          stroke="${mainColor}"
          stroke-width="12"
        />
        <path
          d="M754 0.210905L754 1096.21L0.000860579 1096.21L0.000846217 767.646L2.88807 767.646L2.88809 1093.45L751.113 1093.45L751.113 2.97189L2.88804 2.97192L2.88721 782.924L-1.36942e-05 782.924L0.000812671 0.210937L754 0.210905Z"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
}

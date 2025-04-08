"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconContainer3 = createIconContainer3;
function createIconContainer3({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 747 1081"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M711.261 1080.37L36.0827 1080.37C34.2789 1080.37 32.76 1078.84 32.76 1077.02C32.76 1060.94 19.8488 1047.93 3.89967 1047.93C2.09596 1047.93 0.67189 1046.4 0.67189 1044.58L0.671934 36.1576C0.671935 34.3394 2.09601 32.8083 3.89972 32.8083C19.8488 32.8083 32.76 19.794 32.76 3.71741C32.76 1.89923 34.279 0.368133 36.0828 0.368133L711.261 0.368163C713.065 0.368163 714.584 1.89926 714.584 3.71744C714.584 19.794 727.495 32.8084 743.444 32.8084C745.248 32.8084 746.672 34.3395 746.672 36.1576L746.672 1044.58C746.672 1046.4 745.248 1047.93 743.444 1047.93C727.495 1047.93 714.584 1060.94 714.584 1077.02C714.584 1078.84 713.065 1080.37 711.261 1080.37Z"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
}

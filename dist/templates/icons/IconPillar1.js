"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconPillar1 = createIconPillar1;
function createIconPillar1({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 193 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <path
          d="M192.582 28.8379H0.582031V798.838H192.582V28.8379Z"
          fill="${mainColor}"
        />
        <path
          d="M147.909 317.296V0.837891H45.8438V317.296L96.8765 288.701L147.909 317.296Z"
          fill="#002333"
        />
        <rect
          x="0.582031"
          y="566.838"
          width="192"
          height="74"
          fill="${subColor}"
        />
        <rect
          x="0.582031"
          y="492.838"
          width="32"
          height="74"
          fill="#FEFEFE"
        />
        <rect x="53.582" y="492.838" width="32" height="74" fill="#FEFEFE" />
        <rect x="107.582" y="492.838" width="32" height="74" fill="#FEFEFE" />
        <rect x="160.582" y="492.838" width="32" height="74" fill="#FEFEFE" />
        <rect
          x="0.582031"
          y="639.838"
          width="192"
          height="98"
          fill="#002333"
        />
        <rect
          x="0.582031"
          y="446.838"
          width="192"
          height="46"
          fill="#002333"
        />
        <path
          d="M96.582 641.838L192.582 739.117V799.338H0.582031V739.117L96.582 641.838Z"
          fill="white"
        />
        <path
          d="M96.582 700.838L192.582 798.838H0.582031L96.582 700.838Z"
          fill="${mainColor}"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M96.582 346.838C43.5627 346.838 0.582036 389.819 0.582032 442.838C0.582031 444.178 0.609482 445.511 0.663849 446.838L192.5 446.838C192.555 445.511 192.582 444.178 192.582 442.838C192.582 389.819 149.601 346.838 96.582 346.838Z"
          fill="${subColor}"
        />
      </svg>
    </div>
  `;
}

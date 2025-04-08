"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconSmallType7 = createIconSmallType7;
function createIconSmallType7({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden;">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; z-index: 1; mix-blend-mode: normal; pointer-events: none; display: block;"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.4941 2.77344C12.4941 1.39273 11.3749 0.273438 9.99414 0.273438C8.61343 0.273438 7.49414 1.39273 7.49414 2.77344L7.49414 7.27344H2.99414C1.61343 7.27344 0.494141 8.39273 0.494141 9.77344C0.494141 11.1541 1.61343 12.2734 2.99414 12.2734H7.49414L7.49414 16.7734C7.49414 18.1542 8.61343 19.2734 9.99414 19.2734C11.3749 19.2734 12.4941 18.1542 12.4941 16.7734V12.2734H16.9941C18.3749 12.2734 19.4941 11.1541 19.4941 9.77344C19.4941 8.39273 18.3749 7.27344 16.9941 7.27344H12.4941V2.77344Z"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
}

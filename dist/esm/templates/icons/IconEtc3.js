"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconEtc3 = createIconEtc3;
function createIconEtc3({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 188 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <path
        d="M0 5.65685C0 6.31303 74.2685 6.84497 76.3077 6.84497C78.3469 6.84497 80 6.31303 80 5.65685C80 5.00067 78.3469 4.46873 76.3077 4.46873C74.2685 4.46873 0 5.00067 0 5.65685Z"
        fill="${mainColor}"
      />
      <path
        d="M92.0836 2.00168C92.8843 0.982486 94.4282 0.982484 95.2289 2.00168L97.1299 4.42125C97.6997 5.14646 97.6997 6.16725 97.1299 6.89246L95.2289 9.31203C94.4282 10.3312 92.8843 10.3312 92.0836 9.31203L90.1826 6.89246C89.6128 6.16725 89.6128 5.14646 90.1826 4.42125L92.0836 2.00168Z"
        fill="${mainColor}"
      />
      <path
        d="M187.312 5.65685C187.312 6.31303 113.044 6.84497 111.005 6.84497C108.966 6.84497 107.312 6.31303 107.312 5.65685C107.312 5.00067 108.966 4.46873 111.005 4.46873C113.044 4.46873 187.312 5.00067 187.312 5.65685Z"
        fill="${mainColor}"
      />
    </svg>
  `;
}

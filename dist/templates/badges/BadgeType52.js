"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBadgeType52 = createBadgeType52;
function createBadgeType52({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 544 541"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        max-width: 100%;
        max-height: 100%;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <circle
        cx="271"
        cy="270"
        r="264"
        fill="${subColor}"
        stroke="${mainColor}"
        stroke-width="8"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M271 0C121.5 0 0 121.5 0 271C0 420.5 121.5 541 271 541C420.5 541 541 420.5 541 271C541 121.5 420.5 0 271 0ZM271 40C397.5 40 500 142.5 500 271C500 399.5 397.5 500 271 500C142.5 500 40 399.5 40 271C40 142.5 142.5 40 271 40Z"
        fill="${mainColor}"
      />
      <path
        d="M271 80C165.5 80 80 165.5 80 271C80 376.5 165.5 460 271 460C376.5 460 460 376.5 460 271C460 165.5 376.5 80 271 80Z"
        fill="${subColor}"
      />
      <path
        d="M271 120C209.5 120 160 169.5 160 231C160 292.5 209.5 340 271 340C332.5 340 380 292.5 380 231C380 169.5 332.5 120 271 120Z"
        fill="${mainColor}"
      />
      <path
        d="M271 160C253.5 160 240 173.5 240 191C240 208.5 253.5 220 271 220C288.5 220 300 208.5 300 191C300 173.5 288.5 160 271 160Z"
        fill="${subColor}"
      />
    </svg>
  `;
}

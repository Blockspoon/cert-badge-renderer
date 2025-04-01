"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconEtc2 = createIconEtc2;
function createIconEtc2({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 129 67"
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
      <circle cx="3.27344" cy="40.1077" r="2.42188" fill="${mainColor}" />
      <circle cx="126.578" cy="40.1077" r="2.42188" fill="${mainColor}" />
      <rect
        x="19.4883"
        y="4.00003"
        width="91.0267"
        height="58.924"
        fill="${subColor}"
        stroke="${mainColor}"
        stroke-width="7"
        stroke-linejoin="round"
      />
      <path
        d="M37.6484 29.4719L51.2279 29.4719L51.2279 50.7321L46.4362 47.9692C45.1996 47.2563 43.6768 47.2563 42.4402 47.9692L37.6484 50.7321L37.6484 29.4719Z"
        fill="${subColor}"
        stroke="${mainColor}"
        stroke-width="4"
      />
      <circle
        cx="44.4389"
        cy="26.5522"
        r="10.8217"
        fill="${subColor}"
        stroke="${mainColor}"
        stroke-width="6"
      />
      <path
        d="M69.0195 24.2188L89.4785 24.2154"
        stroke="${mainColor}"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M68.7422 37.2891H96.7383"
        stroke="${mainColor}"
        stroke-width="6"
        stroke-linecap="round"
      />
    </svg>
  `;
}

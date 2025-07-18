"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRibbonType2 = createRibbonType2;
function createRibbonType2({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 552 174"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        width: 100%;
        height: 100%;
        object-fit: contain;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <path opacity="0.3" d="M37 33H515L514.608 174H37V33Z" fill="black" />
      <path
        d="M1.74812 9.45452C0.838874 4.53695 4.61386 0 9.61478 0H542.385C547.386 0 551.161 4.53696 550.252 9.45453L537.292 79.5455C537.114 80.507 537.114 81.493 537.292 82.4545L550.252 152.545C551.161 157.463 547.386 162 542.385 162H9.61482C4.61389 162 0.838875 157.463 1.74812 152.545L14.7078 82.4545C14.8856 81.493 14.8856 80.507 14.7078 79.5455L1.74812 9.45452Z"
        fill="url(#${paintId0})"
      />
      <path d="M2 12L550 12" stroke="${mainColor}" />
      <path d="M2 150L550 150" stroke="${mainColor}" />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="0"
          y1="81"
          x2="552"
          y2="81"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="0.5" stop-color="${subColor}" />
          <stop offset="1" stop-color="${mainColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBadgeType24 = createBadgeType24;
function createBadgeType24({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 475 474"
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
        cx="237.496"
        cy="237"
        r="237"
        fill="url(#${paintId0})"
      />
      <circle cx="237.496" cy="237" r="214" fill="${subColor}" />
      <circle
        cx="237.496"
        cy="237"
        r="215.5"
        stroke="black"
        stroke-opacity="0.2"
        stroke-width="3"
      />
      <circle cx="237.496" cy="237" r="199" fill="white" />
      <path
        d="M237.496 436C347.401 436 436.496 346.905 436.496 237H38.4961C38.4961 346.905 127.591 436 237.496 436Z"
        fill="${mainColor}"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="52.2609"
          y1="88.8975"
          x2="295.143"
          y2="460.529"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${subColor}" />
          <stop offset="0.325" stop-color="${subColor}" stop-opacity="0" />
          <stop offset="0.515" stop-color="${subColor}" stop-opacity="0" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

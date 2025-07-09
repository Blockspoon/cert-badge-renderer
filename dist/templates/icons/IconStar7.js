"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIconStar7 = createIconStar7;
function createIconStar7({ mainColor = "#96A6B4", subColor = "#96A6B4", extraColor1 = "#96A6B4", extraColor2 = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 42 36"
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
        d="M64.5533 31.809L54.3786 36.9688L56.1426 25.6992L48.0898 17.6166L59.3552 15.8143L64.5533 5.65673L69.7513 15.8143L81.0166 17.6166L72.9639 25.6992L74.7279 36.9688L64.5533 31.809Z"
        fill="url(#${paintId0})"
      />
      <path
        d="M119.785 17.2598L113.07 20.6641L114.233 13.2249L108.92 7.89044L116.355 6.70178L119.785 -0.000421524L123.215 6.70178L130.65 7.89044L125.332 13.2249L126.5 20.6641L119.785 17.2598Z"
        fill="url(#${paintId1})"
      />
      <path
        d="M10.8648 17.2598L4.15004 20.6641L5.31737 13.2249L0 7.89044L7.43504 6.70178L10.8648 -0.000421524L14.2948 6.70178L21.734 7.89044L16.4167 13.2249L17.584 20.6641L10.8648 17.2598Z"
        fill="url(#${paintId2})"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="64.8983"
          y1="-14.4198"
          x2="63.9999"
          y2="69.1316"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${extraColor1}" />
          <stop offset="0.192458" stop-color="${extraColor1}" />
          <stop offset="0.402404" stop-color="${mainColor}" />
          <stop offset="0.614201" stop-color="${subColor}" />
          <stop offset="0.807016" stop-color="${extraColor1}" />
          <stop offset="1" stop-color="${extraColor1}" />
        </linearGradient>
        <linearGradient
          id="${paintId1}"
          x1="120.011"
          y1="-13.2513"
          x2="119.418"
          y2="41.8944"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${extraColor1}" />
          <stop offset="0.192458" stop-color="${extraColor1}" />
          <stop offset="0.402404" stop-color="${mainColor}" />
          <stop offset="0.614201" stop-color="${subColor}" />
          <stop offset="0.807016" stop-color="${extraColor1}" />
          <stop offset="1" stop-color="${extraColor1}" />
        </linearGradient>
        <linearGradient
          id="${paintId2}"
          x1="11.095"
          y1="-13.2513"
          x2="10.502"
          y2="41.8944"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${extraColor1}" />
          <stop offset="0.192458" stop-color="${extraColor1}" />
          <stop offset="0.402404" stop-color="${mainColor}" />
          <stop offset="0.614201" stop-color="${subColor}" />
          <stop offset="0.807016" stop-color="${extraColor1}" />
          <stop offset="1" stop-color="${extraColor1}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

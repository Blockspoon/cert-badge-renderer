"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBackgroundType3 = createBackgroundType3;
function createBackgroundType3({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint_linear_${Math.random().toString(36).substr(2, 9)}`;
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
        viewBox="0 0 1152 811"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1152 0.537109H0V810.537H1152V0.537109ZM40 30.0684C33.3726 30.0684 28 35.4409 28 42.0683V769.006C28 775.633 33.3726 781.006 40 781.006H1112C1118.63 781.006 1124 775.633 1124 769.006V42.0684C1124 35.4409 1118.63 30.0684 1112 30.0684H40Z"
          fill="url(#${paintId0})"
        />
        <path
          opacity="0.4"
          d="M1124 287.537L1152 308.037V468.537L1124 448.037V287.537Z"
          fill="white"
        />
        <path
          opacity="0.2"
          d="M1124 515.537L1152 536.037V587.537L1124 567.037V515.537Z"
          fill="white"
        />
        <path
          opacity="0.4"
          d="M526.5 0.537109H746L784.5 28.5371H565L526.5 0.537109Z"
          fill="white"
        />
        <path
          opacity="0.2"
          d="M374.5 0.537109L445.5 0.537109L484 28.5371H413L374.5 0.537109Z"
          fill="white"
        />
        <path
          opacity="0.2"
          d="M299 780.537H357.602L399 810.537H340.398L299 780.537Z"
          fill="white"
        />
        <path
          opacity="0.2"
          d="M0 510.037L28 530.537V569.537L0 549.537V510.037Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="${paintId0}"
            x1="1152"
            y1="0.537061"
            x2="5.67622e-05"
            y2="810.537"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="${mainColor}" />
            <stop offset="1" stop-color="${subColor}" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  `;
}

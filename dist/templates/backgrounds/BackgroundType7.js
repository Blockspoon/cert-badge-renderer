"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBackgroundType7 = createBackgroundType7;
function createBackgroundType7({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;
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
          viewBox="0 0 1152 810"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2628_430)">
            <path
              d="M967 831.564L1154.82 661.289H1241.16L1053.34 831.564H967Z"
              fill="url(#${paintId0})"
            />
            <path
              d="M924 840.782L1051.17 725.144L1208.77 582.188H1213.66L1056.06 725.144L928.941 840.782H924Z"
              fill="${mainColor}"
            />
            <path
              d="M781.108 866.411L908.486 750.938H967L839.674 866.411H781.108Z"
              fill="${subColor}"
            />
            <path
              d="M402.479 -56.4121L275.153 59.0611H216.64L343.966 -56.4121H402.479Z"
              fill="${subColor}"
            />
            <path
            d="M225.307 -24.4414L-6.99954 192.758H-93.3398L138.967 -24.4414H225.307Z"
            fill="url(#${paintId1})"
          />
          <path
            d="M190.929 43.418L143.546 86.4256H121.753L169.136 43.418H190.929Z"
            fill="${subColor}"
          />
          <path
            d="M324.606 -58.7793L197.488 56.8585L39.8914 199.815H34.9502L192.599 56.8585L319.717 -58.7793H324.606Z"
            fill="url(#${paintId2})"
          />
          <path
            d="M1069 625.195L1116.38 582.188H1138.18L1090.79 625.195H1069Z"
            fill="${subColor}"
          />
          <path
            d="M324.01 60H1084C1090.63 60 1096 65.3726 1096 72V543.879M56 249.625V738.938C56 745.565 61.3726 750.938 68 750.938H862.312"
            stroke="${mainColor}"
            stroke-width="3"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-138 920.342L80.0633 750.537H86.7651L-135 920.342H-138ZM971.606 59.5371L1171 -98.4863H1166.6L964.733 59.5371H971.606Z"
            fill="${mainColor}"
          />
        </g>
        <defs>
          <linearGradient
            id="${paintId0}"
            x1="1104.08"
            y1="661.289"
            x2="1104.08"
            y2="831.564"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="${subColor}" />
            <stop offset="1" stop-color="${mainColor}" />
          </linearGradient>
          <linearGradient
            id="${paintId1}"
            x1="65.9835"
            y1="-24.4414"
            x2="65.9835"
            y2="192.758"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="${subColor}" />
            <stop offset="1" stop-color="${mainColor}" />
          </linearGradient>
          <linearGradient
            id="${paintId2}"
            x1="179.778"
            y1="-58.7793"
            x2="179.778"
            y2="199.815"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="${subColor}" />
            <stop offset="1" stop-color="${mainColor}" />
          </linearGradient>
          <clipPath id="clip0_2628_430">
            <rect width="1152" height="810" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  `;
}

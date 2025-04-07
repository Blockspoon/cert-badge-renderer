"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBackgroundType20 = createBackgroundType20;
function createBackgroundType20({ mainColor = "#96A6B4", subColor = "#96A6B4", extraColor1 = "#96A6B4", extraColor2 = "#96A6B4", }) {
    return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden; position: relative;">
      <svg width="100%" height="100%" viewBox="0 0 1152 814" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2628_163)">
          <rect width="300" height="814" transform="matrix(1 0 0 -1 0 814)" fill="${mainColor}" fill-opacity="0.1"/>
          <path d="M300 0V814" stroke="black" stroke-width="2"/>
          <rect width="59" height="205" transform="matrix(1 0 0 -1 206 97)" fill="${extraColor1}"/>
          <rect width="59" height="207" transform="matrix(1 0 0 -1 86 832)" fill="${extraColor2}"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M188 624.619V575.784C188 521.243 147.258 477.028 97 477.028H-45C-95.2579 477.028 -136 521.243 -136 575.784L-136 823.216C-136 877.757 -95.2579 921.972 -45 921.972L97 921.972C147.258 921.972 188 877.757 188 823.216V709.267H247V823.216C247 913.119 179.843 986 97 986L-45 986C-127.843 986 -195 913.119 -195 823.216L-195 575.784C-195 485.881 -127.843 413 -45 413H97C179.843 413 247 485.881 247 575.784V624.619H188Z" fill="${subColor}"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M112 -19.5V227.5C112 270.854 76.8544 306 33.5 306C-9.85435 306 -55 270.854 -55 227.5V-19.5C-55 -62.8543 -9.85435 -98 33.5 -98C76.8544 -98 112 -62.8543 112 -19.5ZM33.5 365C-42.4391 365 -114 303.439 -114 227.5V-19.5C-114 -95.4391 -42.4391 -157 33.5 -157C109.439 -157 171 -95.4391 171 -19.5V227.5C171 303.439 109.439 365 33.5 365Z" fill="${mainColor}"/>
          <rect width="61" height="61" rx="20" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 222.133 422.266)" fill="${extraColor2}"/>
          <rect y="-1.41421" width="59" height="59" rx="19" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 228.133 398.851)" stroke="black" stroke-width="2"/>
          <rect y="-1.41421" width="39.6247" height="39.6247" rx="13" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 84.4336 701.453)" stroke="black" stroke-width="2"/>
          <rect width="51.1951" height="51.1951" rx="16" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 50.1992 596)" fill="${extraColor1}"/>
          <path d="M259 853.5L259 771.5" stroke="black" stroke-width="2"/>
          <path d="M235 831.5V757" stroke="black" stroke-width="2"/>
          <path d="M225 174.5L299.5 174.5" stroke="black" stroke-width="2"/>
          <path d="M245 150L299 150" stroke="black" stroke-width="2"/>
          <rect width="59" height="196" transform="matrix(1 0 0 -1 -29 196)" fill="${extraColor1}" fill-opacity="0.4"/>
          <path d="M53 90L53 -5" stroke="black" stroke-width="2"/>
          <path d="M29 67.5V-7" stroke="black" stroke-width="2"/>
        </g>
        <defs>
          <clipPath id="clip0_2628_163">
            <rect width="1152" height="814" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  `;
}

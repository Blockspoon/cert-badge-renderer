"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBackgroundType4Single = createBackgroundType4Single;
function createBackgroundType4Single({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
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
        <g clip-path="url(#clip0_2628_41)">
          <rect
            x="-31.1082"
            y="-120.261"
            width="284.905"
            height="343.008"
            transform="rotate(40.2844 -31.1082 -120.261)"
            stroke="${mainColor}"
            stroke-width="25"
          />
          <rect
            x="1161.99"
            y="468.618"
            width="284.905"
            height="343.008"
            transform="rotate(40.2844 1161.99 468.618)"
            stroke="${mainColor}"
            stroke-width="25"
          />
        </g>
        <defs>
          <clipPath id="clip0_2628_41">
            <rect width="1152" height="810" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  `;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBackgroundType5Single = createBackgroundType5Single;
function createBackgroundType5Single({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
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
        viewBox="0 0 779 1124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M737.45 1116.21L40.5501 1116.21C38.6882 1116.21 37.1204 1114.63 37.1204 1112.76C37.1204 1096.21 23.7939 1082.81 7.33168 1082.81C5.46986 1082.81 4.00001 1081.23 4.00001 1079.36L4.00006 41.0608C4.00006 39.1888 5.46991 37.6123 7.33172 37.6123C23.7939 37.6123 37.1205 24.2123 37.1205 7.65943C37.1205 5.78737 38.6883 4.21091 40.5501 4.21091L737.45 4.21094C739.312 4.21094 740.88 5.7874 740.88 7.65946C740.88 24.2124 754.206 37.6123 770.668 37.6123C772.53 37.6123 774 39.1888 774 41.0608L774 1079.36C774 1081.23 772.53 1082.81 770.668 1082.81C754.206 1082.81 740.88 1096.21 740.88 1112.76C740.88 1114.63 739.312 1116.21 737.45 1116.21ZM734.216 1109.31C735.784 1091.78 749.797 1077.69 767.239 1076.11L767.239 44.3123C749.797 42.7358 735.784 28.6462 734.216 11.108L43.7838 11.1079C42.2159 28.6461 28.2034 42.7358 10.7614 44.3123L10.7613 1076.11C28.2034 1077.69 42.2159 1091.78 43.7837 1109.31L734.216 1109.31Z"
          fill="${mainColor}"
          stroke="${mainColor}"
          stroke-width="6"
        />
        <rect
          x="11.3145"
          y="0.210938"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 11.3145 0.210938)"
          fill="${mainColor}"
        />
        <rect
          x="11.3145"
          y="1097.21"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 11.3145 1097.21)"
          fill="${mainColor}"
        />
        <rect
          x="767"
          y="0.210938"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 767 0.210938)"
          fill="${mainColor}"
        />
        <rect
          x="767"
          y="1097.21"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 767 1097.21)"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
}

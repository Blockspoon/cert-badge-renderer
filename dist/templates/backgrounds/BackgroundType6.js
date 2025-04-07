"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBackgroundType6 = createBackgroundType6;
function createBackgroundType6({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
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
        viewBox="0 0 747 1081"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M700.414 1068.46L46.9572 1068.46C45.2115 1068.46 43.7414 1066.96 43.7414 1065.19C43.7414 1049.47 31.2455 1036.74 15.8096 1036.74C14.0638 1036.74 12.6856 1035.25 12.6856 1033.47L12.6856 47.4558C12.6856 45.678 14.0639 44.1809 15.8096 44.1809C31.2456 44.1809 43.7414 31.4558 43.7414 15.7365C43.7414 13.9587 45.2115 12.4616 46.9572 12.4616L700.414 12.4617C702.16 12.4617 703.63 13.9587 703.63 15.7365C703.63 31.4558 716.126 44.181 731.562 44.181C733.307 44.181 734.686 45.6781 734.686 47.4558L734.686 1033.47C734.686 1035.25 733.307 1036.74 731.562 1036.74C716.126 1036.74 703.63 1049.47 703.63 1065.19C703.63 1066.96 702.16 1068.46 700.414 1068.46ZM697.382 1061.91C698.852 1045.26 711.991 1031.88 728.346 1030.38L728.346 50.5435C711.991 49.0465 698.852 35.6663 697.382 19.0114L49.9893 19.0113C48.5192 35.6663 35.3802 49.0464 19.0254 50.5435L19.0254 1030.38C35.3802 1031.88 48.5192 1045.26 49.9892 1061.91L697.382 1061.91Z"
          fill="${mainColor}"
        />
        <rect
          x="12"
          y="0.46167"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 12 0.46167)"
          fill="${mainColor}"
        />
        <rect
          x="12"
          y="1057.83"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 12 1057.83)"
          fill="${mainColor}"
        />
        <rect
          x="735"
          y="1057.83"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 735 1057.83)"
          fill="${mainColor}"
        />
        <rect
          x="735"
          y="0.46167"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 735 0.46167)"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewCertificateType51 = createNewCertificateType51;
function createNewCertificateType51({ mainColor = "#96A6B4", subColor = "#96A6B4", extraColor1 = "#96A6B4", extraColor2 = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId3 = `paint3_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1152 814"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3305_1165)">
          <rect width="1152" height="814" fill="white" />
          <path
            d="M365.5 77.5L0 289H-30.5V-38H798.5L589 77.5H365.5Z"
            fill="${mainColor}"
          />
          <path
            d="M785 737.5L1150.5 526L1181 526L1181 853L352 853L561.5 737.5L785 737.5Z"
            fill="${mainColor}"
          />
          <path
            d="M441.5 114L413 -2.78241e-05L644 -7.62939e-06L441.5 114Z"
            fill="black"
            fill-opacity="0.1"
          />
          <path
            d="M709 701L737.5 815L506.5 815L709 701Z"
            fill="black"
            fill-opacity="0.1"
          />
          <path
            d="M427.5 58L296 -2.20743e-05L548.5 0L427.5 58Z"
            fill="black"
            fill-opacity="0.1"
          />
          <path
            d="M723 757L854.5 815L602 815L723 757Z"
            fill="black"
            fill-opacity="0.1"
          />
          <rect x="56" y="56" width="1040" height="702" fill="#F4F4F4" />
          <path
            d="M1096 224V56H757M372.5 758H56V610"
            stroke="${mainColor}"
            stroke-width="4"
          />
          <path
            d="M61.2222 397.873L75.1238 345.157L127.698 359.493L154.152 344.22L59.7072 318.454L34.7681 413.146L61.2222 397.873Z"
            fill="${subColor}"
          />
          <path
            d="M153.602 331.26L129.203 289L88 312.789L153.602 331.26Z"
            fill="${mainColor}"
          />
          <path
            d="M1148.6 438.26L1124.2 396L1083 419.789L1148.6 438.26Z"
            fill="${mainColor}"
          />
          <path
            d="M45.2601 327L3.00039 351.398L26.7891 392.602L45.2601 327Z"
            fill="${mainColor}"
          />
          <path
            d="M1053 426.526L1073.03 471.024L1116.41 451.498L1053 426.526Z"
            fill="${mainColor}"
          />
        </g>
        <defs>
          <pattern
            id="pattern0_3305_1165"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use transform="scale(0.00280112)" />
          </pattern>
          <pattern
            id="pattern1_3305_1165"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use transform="translate(-0.131198 -0.126971) scale(0.00353698)" />
          </pattern>
          <clipPath id="clip0_3305_1165">
            <rect width="1152" height="814" fill="white" />
          </clipPath>
          <image
            id="image0_3305_1165"
            width="357"
            height="357"
            preserveAspectRatio="none"
          />
          <image
            id="image1_3305_1165"
            width="360"
            height="360"
            preserveAspectRatio="none"
          />
        </defs>
      </svg>
  `;
}

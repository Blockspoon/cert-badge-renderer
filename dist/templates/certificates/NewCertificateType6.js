"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewCertificateType6 = createNewCertificateType6;
function createNewCertificateType6({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId3 = `paint3_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId4 = `paint4_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 810 1152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1606_83)">
        <rect
          width="1152"
          height="810"
          transform="translate(810) rotate(90)"
          fill="white"
        />
        <path
          d="M307 1152C291.5 1090.49 160.947 1100.42 129 1054.64C84 978 55.5 923.727 2.0158e-05 915L3.05176e-05 1152L307 1152Z"
          fill="url(#${paintId0})"
        />
        <path
          d="M503 1152C518.5 1090.49 649.053 1100.42 681 1054.64C726 978 754.5 923.727 810 915L810 1152L503 1152Z"
          fill="url(#${paintId1})"
        />
        <path
          d="M307 0C291.5 61.5086 160.947 51.5843 129 97.3612C84 174 55.5 228.273 2.0158e-05 237L3.05176e-05 2.2798e-05L307 0Z"
          fill="url(#${paintId2})"
        />
        <path
          d="M503 0C518.5 61.5086 649.053 51.5843 681 97.3612C726 174 754.5 228.273 810 237L810 2.2798e-05L503 0Z"
          fill="url(#${paintId3})"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M742.589 1116L67.4108 1116C65.6071 1116 64.0881 1114.47 64.0881 1112.65C64.0881 1096.57 51.1769 1083.56 35.2278 1083.56C33.4241 1083.56 32 1082.03 32 1080.21L32.0001 71.7894C32.0001 69.9713 33.4241 68.4402 35.2278 68.4402C51.1769 68.4402 64.0881 55.4258 64.0881 39.3493C64.0881 37.5311 65.6071 36 67.4109 36L742.589 36C744.393 36 745.912 37.5311 745.912 39.3493C745.912 55.4258 758.823 68.4402 774.772 68.4402C776.576 68.4402 778 69.9713 778 71.7895L778 1080.21C778 1082.03 776.576 1083.56 774.772 1083.56C758.823 1083.56 745.912 1096.57 745.912 1112.65C745.912 1114.47 744.393 1116 742.589 1116Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M731.728 1104L78.2716 1104C76.5259 1104 75.0558 1102.5 75.0558 1100.73C75.0558 1085.01 62.56 1072.28 47.124 1072.28C45.3783 1072.28 44 1070.78 44 1069.01L44.0001 82.9941C44.0001 81.2163 45.3783 79.7193 47.124 79.7193C62.5601 79.7193 75.0558 66.9941 75.0558 51.2748C75.0558 49.497 76.5259 48 78.2717 48L731.728 48C733.474 48 734.944 49.4971 734.944 51.2749C734.944 66.9941 747.44 79.7193 762.876 79.7193C764.622 79.7193 766 81.2164 766 82.9942L766 1069.01C766 1070.78 764.622 1072.28 762.876 1072.28C747.44 1072.28 734.944 1085.01 734.944 1100.73C734.944 1102.5 733.474 1104 731.728 1104Z"
          fill="${mainColor}"
        />
        <rect
          x="43.3135"
          y="36"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 43.3135 36)"
          fill="${mainColor}"
        />
        <rect
          x="766.313"
          y="36"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 766.313 36)"
          fill="${mainColor}"
        />
        <rect
          x="43.3135"
          y="1093.37"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 43.3135 1093.37)"
          fill="${mainColor}"
        />
        <rect
          x="766.313"
          y="1093.37"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 766.313 1093.37)"
          fill="${mainColor}"
        />
      </g>
      <defs>
        <pattern
          id="pattern0_1606_83"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.000833333)" />
        </pattern>
        <pattern
          id="pattern1_1606_83"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.00130071 0.00198413)" />
        </pattern>
        <pattern
          id="pattern2_1606_83"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.001)" />
        </pattern>
        <linearGradient
          id="${paintId0}"
          x1="153.5"
          y1="1152"
          x2="153.5"
          y2="915"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${subColor}" />
          <stop offset="1" stop-color="${mainColor}" />
        </linearGradient>
        <linearGradient
          id="${paintId1}"
          x1="656.5"
          y1="1152"
          x2="656.5"
          y2="915"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${subColor}" />
          <stop offset="1" stop-color="${mainColor}" />
        </linearGradient>
        <linearGradient
          id="${paintId2}"
          x1="153.5"
          y1="-6.7097e-06"
          x2="153.5"
          y2="237"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${subColor}" />
          <stop offset="1" stop-color="${mainColor}" />
        </linearGradient>
        <linearGradient
          id="${paintId3}"
          x1="656.5"
          y1="-6.7097e-06"
          x2="656.5"
          y2="237"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${subColor}" />
          <stop offset="1" stop-color="${mainColor}" />
        </linearGradient>
        <linearGradient
          id="${paintId4}"
          x1="405"
          y1="249"
          x2="405"
          y2="248"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${subColor}" />
          <stop offset="1" stop-color="${mainColor}" />
        </linearGradient>
        <clipPath id="clip0_1606_83">
          <rect
            width="1152"
            height="810"
            fill="white"
            transform="translate(810) rotate(90)"
          />
        </clipPath>
        <image id="image0_1606_83" width="1200" height="1200" />
        <image id="image1_1606_83" width="769" height="504" />
        <image id="image2_1606_83" width="1000" height="1000" />
      </defs>
    </svg>
  `;
}

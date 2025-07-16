import { ISvgProps } from "../../interface/index.js";

export function createNewCertificateType3({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1152 810"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      
    >
      <g clip-path="url(#clip0_1819_465)">
        <rect width="1152" height="810" fill="#FDFDFF" />
        <rect
          x="461"
          y="49"
          width="230"
          height="230"
          fill="url(#pattern0_1819_465)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1152 0H0V810H1152V0ZM40 29.5312C33.3726 29.5312 28 34.9038 28 41.5312V768.469C28 775.096 33.3726 780.469 40 780.469H1112C1118.63 780.469 1124 775.096 1124 768.469V41.5312C1124 34.9038 1118.63 29.5312 1112 29.5312H40Z"
          fill="url(#${paintId0})"
        />
        <path
          opacity="0.4"
          d="M1124 287L1152 307.5V468L1124 447.5V287Z"
          fill="white"
        />
        <path
          opacity="0.2"
          d="M1124 515L1152 535.5V587L1124 566.5V515Z"
          fill="white"
        />
        <path
          opacity="0.4"
          d="M526.5 0H746L784.5 28H565L526.5 0Z"
          fill="white"
        />
        <path
          opacity="0.2"
          d="M374.5 0L445.5 2.11003e-10L484 28H413L374.5 0Z"
          fill="white"
        />
        <path
          opacity="0.2"
          d="M297 779H351.5L390 807H335.5L297 779Z"
          fill="white"
        />
        <path
          opacity="0.2"
          d="M0 509.5L28 530V569L0 549V509.5Z"
          fill="white"
        />
      </g>
      <defs>
        <pattern
          id="pattern0_1819_465"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="translate(-2.07143 -0.3) scale(0.00767167)" />
        </pattern>
        <pattern
          id="pattern1_1819_465"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.001)" />
        </pattern>
        <pattern
          id="pattern2_1819_465"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.001)" />
        </pattern>
        <pattern
          id="pattern3_1819_465"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.001)" />
        </pattern>
        <pattern
          id="pattern4_1819_465"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.00280112)" />
        </pattern>
        <linearGradient
          id="${paintId0}"
          x1="1152"
          y1="-4.88281e-05"
          x2="5.67622e-05"
          y2="810"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${subColor}" />
          <stop offset="1" stop-color="${mainColor}" />
        </linearGradient>
        <clipPath id="clip0_1819_465">
          <rect width="1152" height="810" fill="white" />
        </clipPath>
        <image id="image0_1819_465" width="672" height="466" />
        <image id="image1_1819_465" width="1000" height="1000" />
        <image id="image2_1819_465" width="357" height="357" />
      </defs>
    </svg>
  `;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewCertificateType4 = createNewCertificateType4;
function createNewCertificateType4({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1152 810"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1819_615)">
        <rect
          width="1152"
          height="810"
          transform="translate(0 -0.000488281)"
          fill="#FDFDFF"
        />
        <rect
          x="-31.1082"
          y="-120.261"
          width="284.905"
          height="343.008"
          transform="rotate(40.2844 -31.1082 -120.261)"
          stroke="url(#${paintId0})"
          stroke-width="25"
        />
        <rect
          x="1161.99"
          y="468.617"
          width="284.905"
          height="343.008"
          transform="rotate(40.2844 1161.99 468.617)"
          stroke="url(#${paintId1})"
          stroke-width="25"
        />
        <g filter="url(#filter0_d_1819_615)">
          <rect
            x="56"
            y="56"
            width="1040"
            height="698"
            rx="12"
            fill="#FDFDFF"
            shape-rendering="crispEdges"
          />
          <path
            d="M811.5 454.5L899 407.5L910 405L916 407.5L1006 457.5L1012.5 465.5V578L1008.5 583.5L910 640.5H903.5L806.5 583.5L803.5 578V465.5L811.5 454.5Z"
            fill="white"
          />
          <rect
            x="984"
            y="88"
            width="80"
            height="80"
            fill="url(#pattern0_1819_615)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_1819_615"
          x="24"
          y="28"
          width="1104"
          height="762"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="16" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1819_615"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1819_615"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0_1819_615"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.00280112)" />
        </pattern>
        <pattern
          id="pattern1_1819_615"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="translate(-2.07143 -0.3) scale(0.00767167)" />
        </pattern>
        <pattern
          id="pattern2_1819_615"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.001)" />
        </pattern>
        <pattern
          id="pattern3_1819_615"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.001)" />
        </pattern>
        <pattern
          id="pattern4_1819_615"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.001)" />
        </pattern>
        <linearGradient
          id="${paintId0}"
          x1="122.391"
          y1="-137.879"
          x2="122.391"
          y2="230.129"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${subColor}" />
          <stop offset="1" stop-color="${mainColor}" />
        </linearGradient>
        <linearGradient
          id="${paintId1}"
          x1="1315.49"
          y1="451"
          x2="1315.49"
          y2="819.007"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <clipPath id="clip0_1819_615">
          <rect
            width="1152"
            height="810"
            fill="white"
            transform="translate(0 -0.000488281)"
          />
        </clipPath>
        <image id="image0_1819_615" width="357" height="357" />
        <image id="image1_1819_615" width="672" height="466" />
        <image id="image2_1819_615" width="1000" height="1000" />
      </defs>
    </svg>
  `;
}

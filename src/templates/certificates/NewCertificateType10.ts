import { ISvgProps } from "../../interface/index.js"; 

export function createNewCertificateType10({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const pattern0Id = `pattern0_${Math.random().toString(36).substr(2, 9)}`;
  const pattern1Id = `pattern1_${Math.random().toString(36).substr(2, 9)}`;
  const filterId = `filter0_dd_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1185 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#${filterId})">
        <rect
          width="1152"
          height="768"
          transform="translate(16.8477 8)"
          fill="white"
        />
        <rect
          x="1070.85"
          y="134"
          width="80"
          height="80"
          transform="rotate(-180 1070.85 134)"
          fill="url(#${pattern0Id})"
        />
        <rect x="114.848" y="600" width="80" height="80" />
        <rect x="223.848" y="600" width="80" height="80" />
        <rect x="332.848" y="600" width="80" height="80" />
      </g>
      <defs>
        <filter
          id="${filterId}"
          x="0.847656"
          y="0"
          width="1184"
          height="800"
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
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1917_4264"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1917_4264"
            result="effect2_dropShadow_1917_4264"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1917_4264"
            result="shape"
          />
        </filter>
        <pattern
          id="${pattern0Id}"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        ></pattern>
        <pattern
          id="${pattern1Id}"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="translate(-0.131198 -0.126971) scale(0.00353698)" />
        </pattern>
        <image id="image0_1917_4264" width="357" height="357" />
        <image id="image1_1917_4264" width="360" height="360" />
      </defs>
    </svg>
  `;
} 
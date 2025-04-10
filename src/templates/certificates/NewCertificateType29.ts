import { ISvgProps } from "../../interface"; 


export function createNewCertificateType29({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
  extraColor1 = "#96A6B4",
  extraColor2 = "#96A6B4",
}: ISvgProps): string {

  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId3 = `paint3_linear_${Math.random().toString(36).substr(2, 9)}`;


  return `
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1152 815"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2086_934)">
          <rect
            width="1152"
            height="814"
            transform="translate(0 0.499512)"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M167.737 24.4995L149.062 53.4521L121.228 96.2883L71.8518 83.2183L22.5196 69.9833L20 24.4995H167.737Z"
            fill="${subColor}"
          />
          <path
            d="M1016.36 168.627L1029.57 184.843L1042.73 201.103L1031.39 218.682L1020 236.222L999.776 230.87L979.576 225.451L978.419 204.565L977.332 183.675L996.835 176.118L1016.36 168.627Z"
            fill="${subColor}"
          />

          <rect x="140" y="633.5" width="80" height="80" />

          <rect x="249" y="633.5" width="80" height="80" />

          <rect
            x="1112"
            y="164.5"
            width="60"
            height="60"
            transform="rotate(-180 1112 164.5)"
            fill="url(#pattern0_2086_934)"
          />

          <path
            d="M1021.63 -215.054L1079.07 -115.119L1136.19 -14.9922L1058.9 70.5447L981.326 155.823L876.112 108.752L771.056 61.3299L783.317 -53.2981L795.962 -167.885L908.755 -191.658L1021.63 -215.054Z"
            fill="${mainColor}"
          />
          <path
            d="M-14.0886 547.205L34.1429 607.852L82.1714 668.659L39.4022 733.283L-3.58291 797.764L-78.2473 777.057L-152.842 756.101L-156.218 678.68L-159.335 601.247L-86.757 574.105L-14.0886 547.205Z"
            fill="${mainColor}"
          />

          <path
            d="M532 640.333V704.664L587.766 737.032L643.733 704.664V640.333L587.766 607.966L532 640.333Z"
            fill="white"
          />

          <rect
            x="577.334"
            y="620.766"
            width="21.3333"
            height="21.3333"
            fill="url(#pattern1_2086_934)"
          />

          <mask
            id="mask0_2086_934"
            maskUnits="userSpaceOnUse"
            x="534"
            y="695"
            width="108"
            height="40"
          ></mask>
          <g mask="url(#mask0_2086_934)"></g>

          <rect
            x="23"
            y="23.4995"
            width="1106"
            height="768"
            stroke="${mainColor}"
            strokeWidth="6"
          />
        </g>
        <defs>
          <pattern
            id="pattern0_2086_934"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          ></pattern>
          <pattern
            id="pattern1_2086_934"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use transform="translate(-0.131198 -0.126971) scale(0.00353698)" />
          </pattern>
          <clipPath id="clip0_2086_934">
            <rect
              width="1152"
              height="814"
              fill="white"
              transform="translate(0 0.499512)"
            />
          </clipPath>
          <image id="image0_2086_934" width="357" height="357" />
          <image id="image1_2086_934" width="360" height="360" />
        </defs>
      </svg>
  `;
} 
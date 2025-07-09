import { ISvgProps } from "../../interface";

export function createNewCertificateType49({
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
        viewBox="0 0 1152 814"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3305_588)">
          <rect width="1152" height="814" fill="white" />
          <path
            d="M950.219 -9.50002L1178.78 -9.5L1064.5 103.298L950.219 -9.50002Z"
            fill="${mainColor}"
            stroke="${mainColor}"
          />
          <path
            d="M1265 -57L1064.5 143L1014.5 93"
            stroke="${mainColor}"
            stroke-width="2"
          />
          <path
            d="M866.418 -71L1262.58 -71L1064.5 126.588L866.418 -71Z"
            stroke="${mainColor}"
            stroke-width="2"
          />
          <path
            d="M217.781 825.5L-10.7813 825.5L103.5 712.702L217.781 825.5Z"
            fill="${mainColor}"
            stroke="${mainColor}"
          />
          <path
            d="M301.582 875L-94.5821 875L103.5 677.412L301.582 875Z"
            stroke="${mainColor}"
            stroke-width="2"
          />
          <path
            d="M-97 858L103.5 658L144 698.5"
            stroke="${mainColor}"
            stroke-width="2"
          />
          <path
            d="M1113 183L1113 834M1220 779.5L313 779.5"
            stroke="${mainColor}"
            stroke-width="2"
          />
          <path
            d="M41.0001 654L41.0001 -20M-65.9999 34.5L857 34.5001"
            stroke="${mainColor}"
            stroke-width="2"
          />
        </g>
        <defs>
          <pattern
            id="pattern0_3305_588"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use transform="scale(0.00280112)" />
          </pattern>
          <pattern
            id="pattern1_3305_588"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use transform="translate(-0.131198 -0.126971) scale(0.00353698)" />
          </pattern>
          <clipPath id="clip0_3305_588">
            <rect width="1152" height="814" fill="white" />
          </clipPath>
          <image
            id="image0_3305_588"
            width="357"
            height="357"
            preserveAspectRatio="none"
          />
          <image
            id="image1_3305_588"
            width="360"
            height="360"
            preserveAspectRatio="none"
          />
        </defs>
      </svg>
  `;
}

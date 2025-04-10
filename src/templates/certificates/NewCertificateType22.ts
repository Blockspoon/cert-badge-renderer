import { ISvgProps } from "../../interface"; 


export function createNewCertificateType22({
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
        viewBox="0 0 1153 814"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1917_746)">
          <rect
            width="1152"
            height="814"
            transform="translate(0.847656)"
            fill="white"
          />
          <rect
            x="41.8477"
            y="42"
            width="1069"
            height="730"
            rx="10"
            stroke="black"
            strokeWidth="4"
          />
          <path
            d="M412.848 0L0.847656 124V0H412.848Z"
            fill="${subColor}"
          />
          <path
            d="M644.848 814L1152.85 694L1152.85 814L644.848 814Z"
            fill="${subColor}"
          />
          <path
            d="M1152.85 532L1152.85 814L1025.85 814L1152.85 532Z"
            fill="${mainColor}"
          />

          <rect
            x="1092.85"
            y="404"
            width="60"
            height="60"
            transform="rotate(-180 1092.85 404)"
            fill="url(#pattern0_1917_746)"
          />

          <rect x="87.8477" y="614" width="80" height="80" />

          <rect x="196.848" y="614" width="80" height="80" />

          <rect x="305.848" y="614" width="80" height="80" />

          <path
            d="M1050.85 706H899.848"
            stroke="${mainColor}"
            strokeWidth="2"
          /> */}
          <path
            d="M0.847656 291V0H103.848L0.847656 291Z"
            fill="${mainColor}"
          />

          <mask
            id="mask0_1917_746"
            maskUnits="userSpaceOnUse"
            x="523"
            y="622"
            width="108"
            height="108"
          >
            <rect
              x="523.248"
              y="622.4"
              width="107.2"
              height="107.2"
              rx="7.2"
              fill="white"
            />
          </mask>
        </g>
        <defs>
          <pattern
            id="pattern0_1917_746"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          ></pattern>
          <pattern
            id="pattern1_1917_746"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use transform="translate(-0.131198 -0.126971) scale(0.00353698)" />
          </pattern>
          <clipPath id="clip0_1917_746">
            <rect
              width="1152"
              height="814"
              fill="white"
              transform="translate(0.847656)"
            />
          </clipPath>
          <image id="image0_1917_746" width="357" height="357" />
          <image id="image1_1917_746" width="360" height="360" />
        </defs>
      </svg>
  `;
} 
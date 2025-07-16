import { ISvgProps } from "../../interface/index.js"; 

export function createNewCertificateType8({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId3 = `paint3_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1152 810"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1819_947)">
        <rect width="1152" height="810" fill="white" />
        <path
          d="M103.266 810.297C-10.7543 46.4457 306.376 54.7319 313.832 0.000244141H0V810.297H103.266Z"
          fill="${mainColor}"
          fill-opacity="0.3"
        />
        <path
          d="M1048.73 810.297C1162.75 46.4457 845.624 54.7319 838.168 0.000244141H1152V810.297H1048.73Z"
          fill="${mainColor}"
          fill-opacity="0.3"
        />
        <mask
          id="mask0_1819_947"
          maskUnits="userSpaceOnUse"
          x="0"
          y="164"
          width="1152"
          height="647"
        >
          <path d="M1152 810.295H0V164.531H1152V810.295Z" fill="white" />
        </mask>
        <g mask="url(#mask0_1819_947)">
          <path
            d="M-242.635 464.253C-127.152 417.003 -59.0161 339.061 12.3393 375.764C105.96 424.069 9.79086 488.51 11.4004 541.034C14.4853 639.225 117.36 609.694 138.552 734.358C151.965 813.776 10.4615 839.721 10.4615 839.721C10.4615 839.721 -360.801 512.557 -242.635 464.253Z"
            fill="url(#${paintId0})"
          />
          <path
            d="M1394.65 464.253C1279.16 417.003 1211.03 339.061 1139.67 375.764C1046.05 424.069 1142.22 488.51 1140.61 541.034C1137.53 639.225 1034.65 609.694 1013.46 734.358C1000.05 813.776 1141.55 839.721 1141.55 839.721C1141.55 839.721 1512.68 512.557 1394.65 464.253Z"
            fill="url(#${paintId1})"
          />
          <path
            d="M1377.48 757.141C1142.36 732.989 1211.97 577.633 1105.61 566.875C932.314 549.262 976.173 695.231 904.147 732.039C834.669 767.688 766.265 741.742 701.348 764.207C692.227 767.371 683.911 770.957 676.4 774.86C628.5 792.598 611.617 799.223 575.939 799.223C540.262 799.223 547.5 801.035 475.613 774.86C468.102 770.957 459.786 767.371 450.665 764.207C385.748 741.742 317.343 767.688 247.732 732.039C175.84 695.231 219.699 549.262 46.4075 566.875C-59.9549 577.633 9.65683 732.989 -225.467 757.141C-396.076 774.649 553.138 922.621 553.138 922.621C553.138 922.621 556.625 899.735 549.919 870.52C558.503 870.731 567.176 870.836 575.939 870.836C584.792 870.836 593.51 870.731 602.094 870.52C595.388 899.735 598.875 922.621 598.875 922.621C598.875 922.621 1548.09 774.649 1377.48 757.141Z"
            fill="url(#${paintId2})"
          />
        </g>
        <rect
          x="50"
          y="50"
          width="1052"
          height="710"
          rx="18"
          fill="#FDFDFF"
        />
        <rect
          x="50"
          y="50"
          width="1052"
          height="710"
          rx="18"
          stroke="url(#${paintId3})"
          stroke-width="12"
        />
      </g>
      <defs>
        <pattern
          id="pattern0_1819_947"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.001)" />
        </pattern>
        <pattern
          id="pattern1_1819_947"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.001)" />
        </pattern>
        <pattern
          id="pattern2_1819_947"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.001)" />
        </pattern>
        <pattern
          id="pattern3_1819_947"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="translate(-2.07143 -0.3) scale(0.00767167)" />
        </pattern>
        <pattern
          id="pattern4_1819_947"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.00280112)" />
        </pattern>
        <linearGradient
          id="${paintId0}"
          x1="-63.2037"
          y1="366.24"
          x2="-63.2037"
          y2="839.721"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id="${paintId1}"
          x1="1215.2"
          y1="366.24"
          x2="1215.2"
          y2="839.721"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id="${paintId2}"
          x1="576.006"
          y1="565.407"
          x2="576.006"
          y2="922.621"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id="${paintId3}"
          x1="576"
          y1="56"
          x2="576"
          y2="754"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <clipPath id="clip0_1819_947">
          <rect width="1152" height="810" fill="white" />
        </clipPath>
        <image id="image0_1819_947" width="1000" height="1000" />
        <image id="image1_1819_947" width="672" height="466" />
        <image id="image2_1819_947" width="357" height="357" />
      </defs>
    </svg>
  `;
} 
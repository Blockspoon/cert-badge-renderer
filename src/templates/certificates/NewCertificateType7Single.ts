import { ISvgProps } from "../../interface"; 

export function createNewCertificateType7Single({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1152 810"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1395_348)">
        <rect width="1152" height="810" fill="white" />
        <path
          d="M-138 920.742L450.5 462.48L1166.6 -98.0859H1171L469 458.262L-135 920.742H-138Z"
          fill="${mainColor}"
        />
        <path
          d="M967 831.564L1154.82 661.289H1241.16L1053.34 831.564H967Z"
          fill="${mainColor}"
        />
        <path
          d="M924 840.782L1051.17 725.144L1208.77 582.188H1213.66L1056.06 725.144L928.941 840.782H924Z"
          fill="${mainColor}"
        />
        <rect
          x="56"
          y="60"
          width="1040"
          height="691"
          rx="12"
          fill="#FDFDFF"
        />
        <rect
          x="989"
          y="639"
          width="90"
          height="90"
          fill="url(#pattern0_1395_348)"
        />
        <rect
          x="784"
          y="306"
          width="280"
          height="280"
          fill="url(#pattern1_1395_348)"
        />
        <rect
          x="549"
          y="583"
          width="80"
          height="80"
          fill="url(#pattern2_1395_348)"
        />
        <rect
          x="629"
          y="583"
          width="80"
          height="80"
          fill="url(#pattern3_1395_348)"
        />
        <rect
          x="709"
          y="583"
          width="80"
          height="80"
          fill="url(#pattern4_1395_348)"
        />
        <path
          d="M781.108 866.411L908.486 750.938H967L839.674 866.411H781.108Z"
          fill="${subColor}"
        />
        <path
          d="M402.479 -56.4121L275.153 59.0611H216.64L343.966 -56.4121H402.479Z"
          fill="${subColor}"
        />
        <path
          d="M225.307 -24.4414L-6.99954 192.758H-93.3398L138.967 -24.4414H225.307Z"
          fill="${mainColor}"
        />
        <path
          d="M190.929 43.418L143.546 86.4256H121.753L169.136 43.418H190.929Z"
          fill="${subColor}"
        />
        <path
          d="M324.606 -58.7793L197.488 56.8585L39.8914 199.815H34.9502L192.599 56.8585L319.717 -58.7793H324.606Z"
          fill="${mainColor}"
        />
        <path
          d="M1069 625.195L1116.38 582.188H1138.18L1090.79 625.195H1069Z"
          fill="${subColor}"
        />
        <path
          d="M324.01 60H1084C1090.63 60 1096 65.3726 1096 72V543.879M56 249.625V738.938C56 745.565 61.3726 750.938 68 750.938H862.312"
          stroke="${mainColor}"
          stroke-width="3"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <pattern
          id="pattern0_1395_348"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.00280112)" />
        </pattern>
        <pattern
          id="pattern1_1395_348"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="translate(-2.07143 -0.3) scale(0.00767167)" />
        </pattern>
        <pattern
          id="pattern2_1395_348"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.001)" />
        </pattern>
        <pattern
          id="pattern3_1395_348"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.001)" />
        </pattern>
        <pattern
          id="pattern4_1395_348"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.001)" />
        </pattern>
        <clipPath id="clip0_1395_348">
          <rect width="1152" height="810" fill="white" />
        </clipPath>
        <image id="image0_1395_348" width="357" height="357" />
        <image id="image1_1395_348" width="672" height="466" />
        <image id="image2_1395_348" width="1000" height="1000" />
      </defs>
    </svg>
  `;
} 
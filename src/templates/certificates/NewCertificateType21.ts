import { ISvgProps } from "../../interface"; 


export function createNewCertificateType21({
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
        <g clipPath="url(#clip0_1917_600)">
          <rect
            width="1152"
            height="814"
            transform="translate(0.847656)"
            fill="white"
          />
          <rect
            width="300"
            height="814"
            transform="matrix(1 0 0 -1 0.847656 814)"
            fill="${mainColor}"
            fill-opacity="0.1"
          />
          <path d="M300.848 0V814" stroke="black" stroke-width="2" />

          <path
            d="M364 214.5C364 215.6 363.1 216.5 362 216.5C360.9 216.5 360 215.6 360 214.5C360 213.4 360.9 212.5 362 212.5C363.1 212.5 364 213.4 364 214.5Z"
            fill="black"
          />
          <path
            d="M374 214.5C374 215.6 373.1 216.5 372 216.5C370.9 216.5 370 215.6 370 214.5C370 213.4 370.9 212.5 372 212.5C373.1 212.5 374 213.4 374 214.5Z"
            fill="black"
          />
          <path
            d="M384 214.5C384 215.6 383.1 216.5 382 216.5C380.9 216.5 380 215.6 380 214.5C380 213.4 380.9 212.5 382 212.5C383.1 212.5 384 213.4 384 214.5Z"
            fill="black"
          />
          <path
            d="M394 214.5C394 215.6 393.1 216.5 392 216.5C390.9 216.5 390 215.6 390 214.5C390 213.4 390.9 212.5 392 212.5C393.1 212.5 394 213.4 394 214.5Z"
            fill="black"
          />
          <path
            d="M404 214.5C404 215.6 403.1 216.5 402 216.5C400.9 216.5 400 215.6 400 214.5C400 213.4 400.9 212.5 402 212.5C403.1 212.5 404 213.4 404 214.5Z"
            fill="black"
          />

          <rect
            width="59"
            height="196"
            transform="matrix(1 0 0 -1 -28.1523 196)"
            fill="${extraColor1}"
            fill-opacity="0.4"
          />

          <rect
            width="51.1951"
            height="51.1951"
            rx="16"
            transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 51.0488 596)"
            fill="${extraColor1}"
          />

          <rect
            width="61"
            height="61"
            rx="20"
            transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 222.98 422.267)"
            fill="${extraColor2}"
          />

          <rect
            y="-1.41421"
            width="59"
            height="59"
            rx="19"
            transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 228.98 398.852)"
            stroke="black"
            stroke-width="2"
          />

          <rect x="360.848" y="641" width="80" height="80" />

          <rect x="469.848" y="641" width="80" height="80" />

          <rect x="578.848" y="641" width="80" height="80" />

          <rect
            width="59"
            height="205"
            transform="matrix(1 0 0 -1 206.848 97)"
            fill="${extraColor1}"
          />
          <rect
            width="59"
            height="207"
            transform="matrix(1 0 0 -1 86.8477 832)"
            fill="${extraColor2}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M188.848 624.619V575.784C188.848 521.243 148.106 477.028 97.8476 477.028H-44.1524C-94.4103 477.028 -135.152 521.243 -135.152 575.784L-135.152 823.216C-135.152 877.757 -94.4102 921.972 -44.1523 921.972L97.8477 921.972C148.106 921.972 188.848 877.757 188.848 823.216V709.267H247.848V823.216C247.848 913.119 180.69 986 97.8477 986L-44.1523 986C-126.995 986 -194.152 913.119 -194.152 823.216L-194.152 575.784C-194.152 485.881 -126.995 413 -44.1524 413H97.8476C180.69 413 247.848 485.881 247.848 575.784V624.619H188.848Z"
            fill="${subColor}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M112.848 -19.5V227.5C112.848 270.854 77.702 306 34.3477 306C-9.00669 306 -54.1523 270.854 -54.1523 227.5V-19.5C-54.1523 -62.8543 -9.00669 -98 34.3477 -98C77.702 -98 112.848 -62.8543 112.848 -19.5ZM34.3477 365C-41.5915 365 -113.152 303.439 -113.152 227.5V-19.5C-113.152 -95.4391 -41.5915 -157 34.3477 -157C110.287 -157 171.848 -95.4391 171.848 -19.5V227.5C171.848 303.439 110.287 365 34.3477 365Z"
            fill="${mainColor}"
          />
          <rect
            width="61"
            height="61"
            rx="20"
            transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 222.98 422.267)"
            fill="${extraColor2}"
          />
          <rect
            y="-1.41421"
            width="59"
            height="59"
            rx="19"
            transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 228.98 398.852)"
            stroke="black"
            stroke-width="2"
          />
          <rect
            y="-1.41421"
            width="39.6247"
            height="39.6247"
            rx="13"
            transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 85.2813 701.452)"
            stroke="black"
            stroke-width="2"
          />
          <rect
            width="51.1951"
            height="51.1951"
            rx="16"
            transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 51.0488 596)"
            fill="${extraColor1}"
          />
          <path
            d="M259.848 853.5L259.848 771.5"
            stroke="black"
            stroke-width="2"
          />
          <path d="M235.848 831.5V757" stroke="black" stroke-width="2" />
          <path
            d="M225.848 174.5L300.348 174.5"
            stroke="black"
            stroke-width="2"
          />
          <path d="M245.848 150L299.848 150" stroke="black" stroke-width="2" />
          <rect
            x="1112.85"
            y="196"
            width="60"
            height="60"
            transform="rotate(-180 1112.85 196)"
            fill="url(#pattern0_1917_600)"
          />

          <rect
            width="59"
            height="196"
            transform="matrix(1 0 0 -1 -28.1523 196)"
            fill="${extraColor1}"
            fill-opacity="0.4"
          />
          <path d="M53.8477 90L53.8477 -5" stroke="black" stroke-width="2" />
          <path d="M29.8477 67.5V-7" stroke="black" stroke-width="2" />

          <mask
            id="mask0_1917_600"
            maskUnits="userSpaceOnUse"
            x="881"
            y="728"
            width="144"
            height="45"
          >
            <path
              d="M881.381 728.251H1024.58V746.329C1024.58 761.057 1012.64 772.996 997.914 772.996H884.581C882.814 772.996 881.381 771.563 881.381 769.796L881.381 728.251Z"
              fill="#FFFCF7"
            />
          </mask>

          <rect
            x="984.047"
            y="638.8"
            width="24.5333"
            height="24.5333"
            fill="url(#pattern1_1917_600)"
          />
        </g>
        <defs>
          <pattern
            id="pattern0_1917_600"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          ></pattern>
          <pattern
            id="pattern1_1917_600"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use transform="translate(-0.131198 -0.126971) scale(0.00353698)" />
          </pattern>

          <clipPath id="clip0_1917_600">
            <rect
              width="1152"
              height="814"
              fill="white"
              transform="translate(0.847656)"
            />
          </clipPath>
          <image id="image0_1917_600" width="357" height="357" />
          <image id="image1_1917_600" width="360" height="360" />
        </defs>
      </svg>
  `;
} 
import { ISvgProps } from "../../interface";

export function createNewCertificateType2({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1152 810"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    
    >
      <rect
        width="1152"
        height="810"
        transform="translate(0 -0.000442505)"
        fill="white"
      />
      <rect x="34" y="34" width="1084" height="742" rx="18" fill="#FDFDFF" />
      <rect
        x="34"
        y="34"
        width="1084"
        height="742"
        rx="18"
        stroke="${mainColor}"
        stroke-width="12"
      />
      <defs>
        <pattern
          id="pattern0_1819_145"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="translate(-2.07143 -0.3) scale(0.00767167)" />
        </pattern>
        <pattern
          id="pattern1_1819_145"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.001)" />
        </pattern>
        <pattern
          id="pattern2_1819_145"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.001)" />
        </pattern>
        <pattern
          id="pattern3_1819_145"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.001)" />
        </pattern>
        <pattern
          id="pattern4_1819_145"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.00280112)" />
        </pattern>
        <image id="image0_1819_145" width="672" height="466" />
        <image id="image1_1819_145" width="1000" height="1000" />
        <image id="image2_1819_145" width="357" height="357" />
      </defs>
    </svg>
  `;
}

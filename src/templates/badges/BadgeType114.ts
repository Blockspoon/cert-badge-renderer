import { ISvgProps } from "../../interface";

export function createBadgeType114({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
  extraColor1 = "#96A6B4",
  extraColor2 = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 560 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3488_8551)">
        <path
          d="M477.992 82.0088H82.0098V477.991H477.992V82.0088Z"
          fill="${mainColor}"
        />
        <path
          d="M279.998 -0.00202358L-0.00390625 280L279.998 560.002L560 280L279.998 -0.00202358Z"
          fill="${subColor}"
        />
        <path
          d="M279.997 54.9972L54.9941 280L279.997 505.003L505 280L279.997 54.9972Z"
          fill="white"
        />
        <path
          d="M280.024 433.332L269.896 443.459L280.024 453.586L290.151 443.459L280.024 433.332Z"
          fill="${extraColor1}"
        />
        <path
          d="M280.012 477.264L269.885 487.392L280.012 497.519L290.139 487.392L280.012 477.264Z"
          fill="${extraColor1}"
        />
        <path
          d="M279.981 62.5163L269.854 72.6436L279.981 82.7708L290.108 72.6436L279.981 62.5163Z"
          fill="${extraColor1}"
        />
        <path
          d="M451.93 351.217L523.148 279.999L451.93 208.781V108.069H351.218L280 36.8506L208.782 108.069H108.07V208.781L36.8516 279.999L108.07 351.217V451.929H208.782L280 523.147L351.218 451.929H451.93V351.217Z"
          stroke="${extraColor1}"
          strokeWidth="5.47705"
          strokeLinejoin="round"
        />
        <path
          d="M140.475 202.078H419.526"
          stroke="${extraColor1}"
          strokeWidth="5.47705"
          strokeLinejoin="round"
        />
        <path
          d="M140.475 357.922H419.526"
          stroke="${extraColor1}"
          strokeWidth="5.47705"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3488_8551">
          <rect width="560" height="560" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `;
}

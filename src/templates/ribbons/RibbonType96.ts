import { ISvgProps } from "../../interface/index.js";

export function createRibbonType96({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 574 143"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <path
            d="M230.95 2.65255V79.6241C163.419 79.6241 95.9227 88.1097 28.6389 105.046L38.1145 62.1578L0 31.8218C76.4765 12.3403 153.696 2.61719 230.915 2.61719L230.95 2.65255Z"
            fill="${mainColor}"
          />
          <path
            d="M342.889 0.0353373V77.0069C410.42 77.0069 477.916 85.4925 545.2 102.428L535.725 59.5407L573.839 29.2046C497.363 9.72307 420.144 0 342.925 0L342.889 0.0353373Z"
            fill="${mainColor}"
          />
          <path
            d="M55.9697 69.7749L93.3064 28.8672L142.629 91.8021L84.6087 142.999L55.9697 69.7749Z"
            fill="#303030"
          />
          <path
            d="M517.835 69.7749L480.498 28.8672L431.176 91.8021L489.196 142.999L517.835 69.7749Z"
            fill="#303030"
          />
          <defs>
            <linearGradient
              id="${paintId0}"
              x1="0"
              y1="53.8314"
              x2="230.95"
              y2="53.8314"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stop-color="#666666" />
            </linearGradient>
            <linearGradient
              id="${paintId0}"
              x1="342.889"
              y1="51.2142"
              x2="573.839"
              y2="51.2142"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stop-color="#666666" />
            </linearGradient>
          </defs>
    </svg>
  `;
}

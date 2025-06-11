import { ISvgProps } from "../../interface"; 

export function createRibbonType93_1({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 488 180"
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
        fill="url(#${paintId0})"
      />
      <path
        d="M342.889 0.0353373V77.0069C410.42 77.0069 477.916 85.4925 545.2 102.428L535.725 59.5407L573.839 29.2046C497.363 9.72307 420.144 0 342.925 0L342.889 0.0353373Z"
        fill="url(#${paintId1})"
      />
      <defs>
        <linearGradient
          id={paintId0}
          x1="0.0353567"
          y1="53.8844"
          x2="230.95"
          y2="53.8844"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="${mainColor}" />
          <stop offset="0.06" stopColor="${mainColor}" />
          <stop offset="0.58" stopColor="${subColor}" />
          <stop offset="1" stopColor="${mainColor}" />
        </linearGradient>
        <linearGradient
          id={paintId1}
          x1="342.889"
          y1="51.2318"
          x2="573.804"
          y2="51.2318"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="${mainColor}" />
          <stop offset="0.06" stopColor="${mainColor}" />
          <stop offset="0.58" stopColor="${subColor}" />
          <stop offset="1" stopColor="${mainColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}
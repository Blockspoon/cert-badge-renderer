export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBackgroundType8({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId2 = `paint_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId3 = `paint_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <div
      style="
        width: 100%;
        height: 100%;
        isolation: isolate;
        display: flex;
        align-items: center;
        justify-content: center;
        will-change: transform, contents;
        transform: translateZ(0);
        backface-visibility: hidden;
        position: relative;
      "
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1152 812"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M103.266 811.129C-10.7543 47.2778 306.376 55.564 313.832 0.832275H0V811.129H103.266Z"
          fill="${subColor}"
          fill-opacity="0.3"
        />
        <path
          d="M1048.73 811.129C1162.75 47.2778 845.624 55.564 838.168 0.832275H1152V811.129H1048.73Z"
          fill="${subColor}"
          fill-opacity="0.3"
        />
        <mask
          id="mask0_2567_8"
          style="mask-type: luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="165"
          width="1152"
          height="647"
        >
          <path d="M1152 811.129H0V165.365H1152V811.129Z" fill="white" />
        </mask>
        <g mask="url(#mask0_2567_8)">
          <path
            d="M-242.635 465.086C-127.152 417.836 -59.0161 339.895 12.3393 376.598C105.96 424.903 9.79086 489.344 11.4004 541.868C14.4853 640.059 117.36 610.528 138.552 735.192C151.965 814.61 10.4615 840.555 10.4615 840.555C10.4615 840.555 -360.801 513.391 -242.635 465.086Z"
            fill="url(#${paintId0})"
          />
          <path
            d="M1394.65 465.086C1279.16 417.836 1211.03 339.895 1139.67 376.598C1046.05 424.903 1142.22 489.344 1140.61 541.868C1137.53 640.059 1034.65 610.528 1013.46 735.192C1000.05 814.61 1141.55 840.555 1141.55 840.555C1141.55 840.555 1512.68 513.391 1394.65 465.086Z"
            fill="url(#${paintId1})"
          />
          <path
            d="M1377.48 757.976C1142.36 733.823 1211.97 578.468 1105.61 567.71C932.314 550.097 976.173 696.066 904.147 732.874C834.669 768.523 766.265 742.577 701.348 765.042C692.227 768.206 683.911 771.792 676.4 775.695C628.5 793.433 611.617 800.058 575.939 800.058C540.262 800.058 547.5 801.87 475.613 775.695C468.102 771.792 459.786 768.206 450.665 765.042C385.748 742.577 317.343 768.523 247.732 732.874C175.84 696.066 219.699 550.097 46.4075 567.71C-59.9549 578.468 9.65683 733.823 -225.467 757.976C-396.076 775.484 553.138 923.456 553.138 923.456C553.138 923.456 556.625 900.57 549.919 871.355C558.503 871.566 567.176 871.671 575.939 871.671C584.792 871.671 593.51 871.566 602.094 871.355C595.388 900.57 598.875 923.456 598.875 923.456C598.875 923.456 1548.09 775.484 1377.48 757.976Z"
            fill="url(#${paintId2})"
          />
        </g>
        <rect
          x="50"
          y="50.834"
          width="1052"
          height="710"
          rx="18"
          stroke="url(#${paintId3})"
          stroke-width="12"
        />
        <defs>
          <linearGradient
            id="${paintId0}"
            x1="-63.2037"
            y1="367.074"
            x2="-63.2037"
            y2="840.555"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="${mainColor}" />
            <stop offset="1" stop-color="${subColor}" />
          </linearGradient>
          <linearGradient
            id="${paintId1}"
            x1="1215.19"
            y1="367.074"
            x2="1215.19"
            y2="840.555"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="${mainColor}" />
            <stop offset="1" stop-color="${subColor}" />
          </linearGradient>
          <linearGradient
            id="${paintId2}"
            x1="576.006"
            y1="566.242"
            x2="576.006"
            y2="923.456"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="${mainColor}" />
            <stop offset="1" stop-color="${subColor}" />
          </linearGradient>
          <linearGradient
            id="${paintId3}"
            x1="576"
            y1="56.834"
            x2="576"
            y2="754.834"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="${mainColor}" />
            <stop offset="1" stop-color="${subColor}" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  `;
} 
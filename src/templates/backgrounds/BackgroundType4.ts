export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBackgroundType4({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;

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
        viewBox="0 0 1152 810"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2628_45)">
          <rect
            x="-31.1092"
            y="-120.261"
            width="284.905"
            height="343.008"
            transform="rotate(40.2844 -31.1092 -120.261)"
            stroke="url(#${paintId0})"
            stroke-width="25"
          />
          <rect
            x="1161.99"
            y="468.618"
            width="284.905"
            height="343.008"
            transform="rotate(40.2844 1161.99 468.618)"
            stroke="url(#${paintId1})"
            stroke-width="25"
          />
        </g>
        <defs>
          <linearGradient
            id="${paintId0}"
            x1="122.39"
            y1="-137.879"
            x2="122.39"
            y2="230.129"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="${mainColor}" />
            <stop offset="1" stop-color="${subColor}" />
          </linearGradient>
          <linearGradient
            id="${paintId1}"
            x1="1315.49"
            y1="451"
            x2="1315.49"
            y2="819.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="${subColor}" />
            <stop offset="1" stop-color="${mainColor}" />
          </linearGradient>
          <clipPath id="clip0_2628_45">
            <rect width="1152" height="810" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  `;
} 
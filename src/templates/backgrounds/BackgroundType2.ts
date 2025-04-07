export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBackgroundType2({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

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
        viewBox="0 0 1096 755"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="6.21094"
          width="1084"
          height="742"
          rx="18"
          stroke="url(#${paintId0})"
          stroke-width="12"
        />
        <defs>
          <linearGradient
            id="${paintId0}"
            x1="548"
            y1="12.2109"
            x2="548"
            y2="742.211"
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
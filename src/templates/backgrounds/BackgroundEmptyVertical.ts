export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBackgroundEmptyVertical({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
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
        viewBox="0 0 1153 811"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="1152"
          height="810"
          transform="translate(0.5 0.74707)"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
} 
export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBackgroundType17({
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
        viewBox="0 0 1073 735"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1.16016"
          width="1071"
          height="732"
          stroke="${mainColor}"
          stroke-width="2"
        />
      </svg>
    </div>
  `;
} 
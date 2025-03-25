export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createRibbonType7({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <div style="
      width: 100%;
      height: 100%;
      isolation: isolate;
      display: flex;
      align-items: center;
      justify-content: center;
      will-change: transform, contents;
      transform: translateZ(0);
      backface-visibility: hidden;
    ">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 398 284"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="
          max-width: 100%;
          max-height: 100%;
          z-index: 1;
          mix-blend-mode: normal;
          pointer-events: none;
          display: block;
        "
      >
        <path
          d="M244 0C109.25 0 0 109.25 0 244C0 378.75 109.25 488 244 488C378.75 488 488 378.75 488 244V0H244Z"
          fill="${mainColor}"
        />
        <path
          d="M244 17C118.638 17 17 118.638 17 244C17 369.362 118.638 471 244 471C369.362 471 471 369.362 471 244V17H244Z"
          fill="white"
        />
        <mask
          id="mask0_2384_132"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="17"
          y="17"
          width="454"
          height="454"
        >
          <path
            d="M244 17C118.638 17 17 118.638 17 244C17 369.362 118.638 471 244 471C369.362 471 471 369.362 471 244V17H244Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_2384_132)">
          <path
            d="M164.381 401.876C164.381 418.822 154.551 423.091 142.425 423.091C130.299 423.091 120.469 415.773 120.469 401.876C120.469 385.888 142.425 362.712 142.425 362.712C142.425 362.712 164.381 385.888 164.381 401.876Z"
            fill="${mainColor}"
          />
          <path
            d="M103.843 420.723C103.843 440.847 92.3193 445.917 78.1041 445.917C63.8889 445.917 52.3652 437.226 52.3652 420.723C52.3652 401.737 78.1041 374.216 78.1041 374.216C78.1041 374.216 103.843 401.737 103.843 420.723Z"
            fill="${mainColor}"
          />
          <path
            d="M244 471C118.638 471 51.249 381.296 26.7227 314H460.311C443.193 374.213 369.361 471 244 471Z"
            fill="url(#${paintId0})"
          />
        </g>
        <defs>
          <linearGradient
            id="${paintId0}"
            x1="244"
            y1="244"
            x2="244"
            y2="471"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  `;
}

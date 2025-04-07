export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBackgroundType3Single({
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
        viewBox="0 0 1152 811"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1152 0.537109H0V810.537H1152V0.537109ZM40 28.6392C33.3726 28.6392 28 34.0117 28 40.6391V767.577C28 774.204 33.3726 779.577 40 779.577H1112C1118.63 779.577 1124 774.204 1124 767.577V40.6392C1124 34.0117 1118.63 28.6392 1112 28.6392H40Z"
          fill="${mainColor}"
        />
        <path
          opacity="0.4"
          d="M1124 287.537L1152 308.037V468.537L1124 448.037V287.537Z"
          fill="${subColor}"
        />
        <path
          opacity="0.2"
          d="M1124 515.537L1152 536.037V587.537L1124 567.037V515.537Z"
          fill="${subColor}"
        />
        <path
          opacity="0.4"
          d="M526.5 0.537109H746L784.5 28.5371H565L526.5 0.537109Z"
          fill="${subColor}"
        />
        <path
          opacity="0.2"
          d="M374.5 0.537109L445.5 0.537109L484 28.5371H413L374.5 0.537109Z"
          fill="${subColor}"
        />
        <path
          opacity="0.2"
          d="M297 779.537H357.36L400 810.537H339.64L297 779.537Z"
          fill="${subColor}"
        />
        <path
          opacity="0.2"
          d="M0 510.037L28 530.537V569.537L0 549.537V510.037Z"
          fill="${subColor}"
        />
      </svg>
    </div>
  `;
} 
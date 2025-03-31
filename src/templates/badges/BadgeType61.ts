export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBadgeType61({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 463 536"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        max-width: 100%;
        max-height: 100%;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <path
        d="M231.158 530.219L5 398.777V137.223L231.158 5.78097L458 137.228V398.772L231.158 530.219Z"
        fill="white"
        stroke="${mainColor}"
        stroke-width="10"
      />
      <mask
        id="mask0_2407_492"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="463"
        height="536"
      >
        <path
          d="M0 401.654V134.346L231.154 0L463 134.346V401.654L231.154 536L0 401.654Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_2407_492)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M231.154 0L463 134.346V401.654L231.154 536L0 401.654V134.346L231.154 0Z"
          fill="${mainColor}"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M231.154 0L463 134.346V401.654L231.154 536L0 401.654V134.346L231.154 0Z"
          fill="${subColor}"
          fill-opacity="0.1"
        />
      </g>
    </svg>
  `;
} 
export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createRibbonType19_1({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 546 129"
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
        d="M473 4C473 1.79086 474.791 0 477 0H540.572C543.267 0 545.19 2.6107 544.392 5.18467L526.367 63.3153C526.128 64.087 526.128 64.913 526.367 65.6847L544.392 123.815C545.19 126.389 543.267 129 540.572 129H477C474.791 129 473 127.209 473 125V4Z"
        fill="${mainColor}"
      />
      <path
        d="M473 10.5586H542.723L525.955 64.4488L542.723 118.441H473V10.5586Z"
        fill="white"
        fill-opacity="0.2"
      />
      <path
        d="M480 9.4679L543.621 9.4679"
        stroke="white"
        stroke-width="3"
      />
      <path
        d="M480 118.94L543.621 118.94"
        stroke="white"
        stroke-width="3"
      />
      <rect
        x="483"
        width="42"
        height="129"
        fill="url(#paint0_linear_2384_1401)"
      />
      <path
        d="M73 4C73 1.79086 71.2091 0 69 0H5.42819C2.73333 0 0.809517 2.6107 1.60765 5.18467L19.6327 63.3153C19.8719 64.087 19.8719 64.913 19.6327 65.6847L1.60765 123.815C0.809525 126.389 2.73333 129 5.42819 129H69C71.2091 129 73 127.209 73 125V4Z"
        fill="${mainColor}"
      />
      <path
        d="M72.9238 10.5586H3.20117L19.9693 64.4488L3.20117 118.441H72.9238V10.5586Z"
        fill="white"
        fill-opacity="0.2"
      />
      <path d="M2 9.4679L65.6211 9.4679" stroke="white" stroke-width="3" />
      <path d="M2 118.94L65.6211 118.94" stroke="white" stroke-width="3" />
      <rect
        width="43"
        height="129"
        transform="matrix(-1 0 0 1 62 0)"
        fill="url(#paint1_linear_2384_1401)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2384_1401"
          x1="443.838"
          y1="56.8073"
          x2="515.536"
          y2="44.2542"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2384_1401"
          x1="-40.0946"
          y1="56.8073"
          x2="33.206"
          y2="43.6682"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  `;
}
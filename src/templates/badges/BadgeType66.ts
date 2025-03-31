export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
  extraColor1?: string;
}

export function createBadgeType66({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
  extraColor1 = "#96A6B4",
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
        d="M0 401.654V134.346L231.154 0L463 134.346V401.654L231.154 536L0 401.654Z"
        fill="${mainColor}"
      />
      <path
        d="M22 147.379V388.621L231.121 510L441 388.621V147.379L231.121 26L22 147.379Z"
        fill="${extraColor1}"
      />
      <path
        d="M231.137 497.69L32 382.483V153.517L231.137 38.3095L431 153.519V382.481L231.137 497.69Z"
        stroke="${mainColor}"
        stroke-width="4"
      />
      <path d="M58 204H406" stroke="black" />
      <mask
        id="mask0_2407_497"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="30"
        y="356"
        width="403"
        height="144"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30 356V383.636L231.136 500L433 383.636V356H30Z"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_2407_497)">
        <path
          d="M373.94 271.081L395.042 307.79L416.022 344.569L387.632 375.989L359.137 407.314L320.489 390.024L281.899 372.604L286.403 330.498L291.048 288.408L332.479 279.675L373.94 271.081Z"
          fill="${mainColor}"
        />
        <path
          d="M191.822 424.809L206.274 458.784L220.612 492.807L192.766 517.057L164.84 541.213L133.178 522.225L101.58 503.131L109.858 467.146L118.257 431.189L155.034 427.938L191.822 424.809Z"
          fill="${mainColor}"
        />
        <path
          d="M282.022 404.941L289.854 419.724L297.636 434.533L285.997 446.553L274.318 458.534L259.293 451.179L244.292 443.774L246.645 427.209L249.053 410.652L265.533 407.769L282.022 404.941Z"
          fill="${subColor}"
        />
        <path
          d="M119.757 299L132.874 323.761L145.909 348.566L126.415 368.698L106.853 388.765L81.6866 376.446L56.5618 364.043L60.5029 336.298L64.5368 308.566L92.1387 303.737L119.757 299Z"
          fill="${subColor}"
        />
      </g>
      <path d="M58 356H406" stroke="black" />
    </svg>
  `;
} 
import { ISvgProps } from "../../interface"; 

export function createBadgeType65({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
  extraColor1 = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 536 536"
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
        d="M0 130C0 58.203 58.203 0 130 0H536V406C536 477.797 477.797 536 406 536H0V130Z"
        fill="${mainColor}"
      />
      <path
        d="M19 139C19 72.7258 72.7258 19 139 19H517V338H19V139Z"
        fill="${extraColor1}"
      />
      <mask
        id="mask0_2407_496"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="16"
        y="338"
        width="504"
        height="179"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 338V517H400C466.274 517 520 463.274 520 397V338H16Z"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_2407_496)">
        <rect
          width="201.681"
          height="504"
          transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 520 516.681)"
          fill="${mainColor}"
        />
        <path
          d="M16.6094 415.841C16.6094 471.533 61.7394 516.681 117.409 516.681L117.409 415.841L16.6094 415.841Z"
          fill="${extraColor1}"
        />
        <path
          d="M419.042 315.001L419.042 415.841L318.242 415.841C318.242 471.533 363.372 516.681 419.042 516.681C474.712 516.681 519.842 471.533 519.842 415.841C519.842 360.149 474.712 315.001 419.042 315.001Z"
          fill="${extraColor1}"
        />
        <path
          d="M217.281 415.841L318.081 415.841L318.081 315.001C262.411 315.001 217.281 360.149 217.281 415.841Z"
          fill="#002333"
        />
        <path
          d="M217.281 415.841L217.281 516.681L318.081 516.681L217.281 415.841Z"
          fill="#002333"
        />
        <path
          d="M318.081 516.681L318.081 415.841L217.281 415.841C217.281 471.533 262.411 516.681 318.081 516.681Z"
          fill="${extraColor1}"
        />
        <path
          d="M419.199 315.001L419.199 315.15C474.869 315.15 519.999 360.231 519.999 415.841L519.999 315.001L419.199 315.001Z"
          fill="${subColor}"
        />
        <path
          d="M520 415.841L519.851 415.841C519.851 471.534 474.788 516.682 419.2 516.682L520 516.682L520 415.841Z"
          fill="#002333"
        />
        <path
          d="M419.042 316.002C474.159 316.002 518.841 360.701 518.841 415.841C518.841 470.981 474.159 515.68 419.042 515.68C363.925 515.68 319.244 470.981 319.244 415.841C319.244 360.701 363.925 316.002 419.042 316.002Z"
          stroke="#002333"
          stroke-width="2.00268"
          stroke-miterlimit="10"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.1488 415.84L16 415.84L16 315L16.0003 315L16.0003 214.01C16.0003 269.703 61.1303 314.851 116.8 314.851L116.8 315L116.949 315C116.899 315 116.85 315 116.8 315L116.8 315L116.732 315C61.1615 315.117 16.1488 360.22 16.1488 415.84Z"
          fill="${subColor}"
        />
        <path
          d="M217.75 415.841L217.601 415.841C217.601 471.534 172.471 516.682 116.801 516.682L217.75 516.682L217.75 415.841Z"
          fill="${extraColor1}"
        />
        <path
          d="M116.948 316.002C172.065 316.002 216.747 360.701 216.747 415.841C216.747 470.981 172.065 515.68 116.948 515.68C61.8315 515.68 17.1498 470.981 17.1498 415.841C17.1498 360.701 61.8315 316.002 116.948 316.002Z"
          stroke="#002333"
          stroke-width="2.00268"
          stroke-miterlimit="10"
        />
        <path
          d="M117.41 315.001C117.41 370.693 162.54 415.841 218.21 415.841L218.21 315.001L117.41 315.001Z"
          fill="${subColor}"
        />
      </g>
      <path
        d="M18 139C18 73.8304 70.8304 21 136 21H518V397C518 462.17 465.17 515 400 515H18V139Z"
        stroke="black"
        stroke-width="4"
      />
      <mask id="path-18-inside-1_2407_496" fill="${extraColor1}">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M520 152V19H136C69.7258 19 16 72.7259 16 139V152H520Z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M520 152V19H136C69.7258 19 16 72.7259 16 139V152H520Z"
        fill="${subColor}"
        fill-opacity="0.1"
      />
      <path
        d="M520 19H524V15H520V19ZM520 152V156H524V152H520ZM16 152H12V156H16V152ZM516 19V152H524V19H516ZM136 23H520V15H136V23ZM20 139C20 74.9351 71.935 23 136 23V15C67.5167 15 12 70.5168 12 139H20ZM20 152V139H12V152H20ZM16 156H520V148H16V156Z"
        fill="black"
        mask="url(#path-18-inside-1_2407_496)"
      />
      <path d="M18.5 337.5H518" stroke="black" stroke-width="4" />
    </svg>
  `;
} 
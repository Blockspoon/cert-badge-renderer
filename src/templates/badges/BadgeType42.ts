export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBadgeType42({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 553 565"
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
      <g filter="url(#filter0_d_2407_404)">
        <path
          d="M266.395 17.8386C271.349 11.3671 281.097 11.3671 286.051 17.8386L504.581 303.31C510.867 311.523 510.101 323.122 502.787 330.436L284.975 548.248C280.141 553.082 272.304 553.082 267.471 548.248L49.6583 330.436C42.3447 323.122 41.5778 311.523 47.8648 303.31L266.395 17.8386Z"
          fill="white"
        />
      </g>
      <path
        d="M266.395 48.5847C271.349 42.1131 281.097 42.1131 286.051 48.5847L481.409 303.787C487.696 312 486.929 323.599 479.616 330.913L284.975 525.554C280.141 530.387 272.304 530.387 267.471 525.554L72.8295 330.913C65.5159 323.599 64.749 312 71.036 303.787L266.395 48.5847Z"
        fill="${mainColor}"
      />
      <mask
        id="mask0_2407_404"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="66"
        y="43"
        width="420"
        height="487"
      >
        <path
          d="M266.395 48.5847C271.349 42.1131 281.097 42.1131 286.051 48.5847L481.409 303.787C487.696 312 486.929 323.599 479.616 330.913L284.975 525.554C280.141 530.387 272.304 530.387 267.471 525.554L72.8295 330.913C65.5159 323.599 64.749 312 71.036 303.787L266.395 48.5847Z"
          fill="${mainColor}"
        />
      </mask>
      <g mask="url(#mask0_2407_404)">
        <rect
          x="48"
          y="263"
          width="465"
          height="112"
          fill="white"
          fill-opacity="0.3"
        />
      </g>
      <path
        d="M270.669 61.249C273.469 57.5878 278.982 57.5854 281.786 61.2442L467.133 303.152C472.815 310.568 472.125 321.047 465.518 327.653L284.338 508.834C280.285 512.886 273.715 512.886 269.662 508.834L87.7966 326.968C81.1943 320.366 80.4998 309.896 86.1721 302.479L270.669 61.249Z"
        stroke="${subColor}"
        stroke-width="4"
      />
      <path
        d="M267.586 59.7504C271.939 54.0631 280.506 54.0631 284.86 59.7504L471.324 303.335C477.154 310.95 476.443 321.706 469.661 328.488L283.914 514.235C279.666 518.483 272.779 518.483 268.531 514.235L82.784 328.488C76.0022 321.706 75.2911 310.95 81.1209 303.335L267.586 59.7504Z"
        stroke="white"
        stroke-width="3"
      />
      <path
        d="M405.338 418.082H154.703L265.065 534.632L278.989 540.305L405.338 418.082Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_2407_404"
          x="31.2402"
          y="0.607968"
          width="489.965"
          height="563.642"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6.18851" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2407_404"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2407_404"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  `;
}
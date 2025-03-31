export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBadgeType36({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 456 516"
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
        d="M38 190C38 85.0659 123.066 0 228 0C332.934 0 418 85.0659 418 190V361.818C418 381.801 401.801 398 381.818 398H74.1818C54.1992 398 38 381.801 38 361.818V190Z"
        fill="url(#${paintId0})"
      />
      <path
        d="M54 190C54 93.9025 131.902 16 228 16C324.098 16 402 93.9025 402 190V347.818C402 366.144 387.144 381 368.818 381H87.1818C68.856 381 54 366.144 54 347.818V190Z"
        fill="white"
      />
      <path
        d="M64 190C64 99.4253 137.425 26 228 26C318.575 26 392 99.4253 392 190V335.091C392 352.162 378.162 366 361.091 366H94.9091C77.8385 366 64 352.162 64 335.091V190Z"
        fill="${mainColor}"
      />
      <mask
        id="mask0_2407_307"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="64"
        y="88"
        width="328"
        height="207"
      >
        <path
          d="M64 112C64 98.7452 74.7452 88 88 88H368C381.255 88 392 98.7452 392 112V295H64V112Z"
          fill="#5890CB"
        />
      </mask>
      <g mask="url(#mask0_2407_307)">
        <ellipse
          cx="228.5"
          cy="300.5"
          rx="178.5"
          ry="97.5"
          fill="black"
          fill-opacity="0.2"
        />
      </g>
      <path
        d="M441.15 446.417L243.731 513.532C234.053 516.823 221.947 516.823 212.269 513.532L14.8497 446.417C5.63723 443.287 0 430.794 0 424.704V317.227C0 307.648 13.6857 295 30.5807 295H425.419C442.314 295 456 307.648 456 317.227V424.694C456 430.785 450.363 443.277 441.15 446.407V446.417Z"
        fill="${mainColor}"
      />
      <path
        d="M426.192 440.492L242.627 497.89C233.628 500.703 222.372 500.703 213.373 497.89L29.8076 440.492C21.2416 437.815 16 427.132 16 421.923V330.009C16 321.817 22.7253 311 38.4347 311H417.565C433.275 311 440 321.817 440 330.009V421.915C440 427.124 434.758 437.807 426.192 440.484V440.492Z"
        fill="white"
      />
      <path
        d="M418.713 434.951L242.075 491.046C233.416 493.651 222.584 493.651 213.925 491.046L37.2866 434.951C29.0438 432.472 24 425.529 24 420.707V335.601C24 328.016 28.2451 318 43.3617 318H412.638C427.755 318 432 328.016 432 335.601V420.699C432 425.522 426.956 432.465 418.713 434.943V434.951Z"
        fill="url(#${paintId1})"
      />
      <path
        d="M418.713 434.951L242.075 491.046C233.416 493.651 222.584 493.651 213.925 491.046L37.2866 434.951C29.0438 432.472 24 425.529 24 420.707V335.601C24 328.016 28.2451 318 43.3617 318H412.638C427.755 318 432 328.016 432 335.601V420.699C432 425.522 426.956 432.465 418.713 434.943V434.951Z"
        fill="white"
        fill-opacity="0.3"
      />
      <rect
        width="380"
        height="24"
        transform="matrix(1 0 0 -1 38 295)"
        fill="url(#paint2_linear_2407_307)"
        fill-opacity="0.4"
      />
      <path
        d="M197 461H259"
        stroke="black"
        stroke-opacity="0.5"
        stroke-width="4"
        stroke-linecap="round"
      />
      <mask
        id="mask1_2407_307"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="64"
        y="26"
        width="328"
        height="340"
      >
        <path
          d="M64 190C64 99.4253 137.425 26 228 26C318.575 26 392 99.4253 392 190V335.091C392 352.162 378.162 366 361.091 366H94.9091C77.8385 366 64 352.162 64 335.091V190Z"
          fill="${mainColor}"
        />
      </mask>
      <g mask="url(#mask1_2407_307)">
        <ellipse cx="228" cy="26" rx="108" ry="73" fill="#7368E8" />
      </g>
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="228"
          y1="0"
          x2="228"
          y2="398"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id="${paintId1}"
          x1="107.658"
          y1="318"
          x2="301.155"
          y2="520.931"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="#360A8C" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2407_307"
          x1="195.217"
          y1="6"
          x2="195.217"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  `;
} 
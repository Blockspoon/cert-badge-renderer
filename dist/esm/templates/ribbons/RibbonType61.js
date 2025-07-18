export function createRibbonType61({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 488 180"
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
      <rect
        y="16.84"
        width="488"
        height="146.16"
        rx="4"
        fill="url(#${paintId0})"
      />
      <path d="M475 17V7L485 17H475Z" fill="${mainColor}" />
      <path d="M475 17V7L485 17H475Z" fill="black" fill-opacity="0.4" />
      <path d="M12 17V7L2 17H12Z" fill="${mainColor}" />
      <path d="M12 17V7L2 17H12Z" fill="black" fill-opacity="0.4" />
      <rect
        y="34"
        width="488"
        height="112"
        fill="white"
        fill-opacity="0.3"
      />
      <path
        d="M0 32L488 32"
        stroke="white"
        stroke-opacity="0.6"
        stroke-width="3"
      />
      <path
        d="M0 148L488 148"
        stroke="white"
        stroke-opacity="0.6"
        stroke-width="3"
      />
      <rect
        x="12"
        y="163"
        width="463"
        height="17"
        fill="url(#paint1_linear_2407_491)"
      />
      <rect
        x="475"
        y="17"
        width="463"
        height="17"
        transform="rotate(-180 475 17)"
        fill="url(#paint2_linear_2407_491)"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="0"
          y1="89.92"
          x2="488"
          y2="89.92"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="0.215" stop-color="${subColor}" />
          <stop offset="0.75" stop-color="${subColor}" />
          <stop offset="1" stop-color="${mainColor}" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2407_491"
          x1="243.5"
          y1="163"
          x2="243.5"
          y2="180"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0.2" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2407_491"
          x1="706.5"
          y1="17"
          x2="706.5"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0.1" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

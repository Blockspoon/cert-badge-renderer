export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createRibbonType6({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 398 284"
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
        d="M176.868 272.66L20.0509 182.428C7.64616 175.29 0 162.069 0 147.758V20C0 8.95431 8.9543 0 20 0H378C389.046 0 398 8.95432 398 20V147.478C398 161.939 390.194 175.274 377.585 182.355L216.402 272.867C204.109 279.77 189.089 279.692 176.868 272.66Z"
        fill="url(#${paintId0})"
      />
      <path
        d="M169 181.5H229"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M177.267 263.643L29.003 180.016C16.4309 172.925 8.6543 159.61 8.6543 145.176V28.3047C8.6543 17.259 17.6086 8.30469 28.6543 8.30469H369.345C380.391 8.30469 389.345 17.259 389.345 28.3047V144.897C389.345 159.48 381.409 172.907 368.634 179.939L216.208 263.845C204.069 270.527 189.337 270.451 177.267 263.643Z"
        stroke="black"
        stroke-opacity="0.4"
        stroke-width="3"
      />
      <path
        d="M10.0782 29.6797C10.0782 18.634 19.0325 9.67969 30.0782 9.67969H367.92C378.966 9.67969 387.92 18.634 387.92 29.6797V150.738C384.898 164.293 379.876 170.246 368.438 179.604H28.3479L16.3839 168.102L10.0781 153.9L10.0782 29.6797Z"
        fill="url(#paint1_linear_2364_546)"
        fill-opacity="0.8"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="34.6595"
          y1="-23.0027"
          x2="338.979"
          y2="245.514"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2364_546"
          x1="198.999"
          y1="9.67969"
          x2="198.999"
          y2="179.604"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  `;
}
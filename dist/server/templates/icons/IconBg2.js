export function createIconBg2({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 65 74"
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
        d="M60.8179 15.3712L36.6883 1.14508C34.0984 -0.381692 30.9065 -0.381692 28.3167 1.14508L4.18456 15.3712C1.59471 16.898 0 19.7203 0 22.7739V51.2261C0 54.2797 1.59471 57.102 4.18456 58.6288L28.3142 72.8549C30.904 74.3817 34.096 74.3817 36.6858 72.8549L60.8154 58.6288C63.4053 57.102 65 54.2797 65 51.2261V22.7739C65 19.7203 63.4053 16.898 60.8154 15.3712H60.8179Z"
        fill="url(#${paintId0})"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="8.24627"
          y1="11.6842"
          x2="62.7537"
          y2="61.1447"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

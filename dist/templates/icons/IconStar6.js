export function createIconStar6({ mainColor = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 42 36"
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
        d="M15.49 12.59V0L22.64 12.59L41.87 7.82999L27.41 19.23L32.17 28.25L18.9 24.51L0 35.06L11.92 22.29L1.36 14.46L15.49 12.59Z"
        fill="${mainColor}"
      />
    </svg>
  `;
}

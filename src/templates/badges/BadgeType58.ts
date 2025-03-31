export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBadgeType58({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 537 537"
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
      <rect width="537" height="537" rx="36" fill="white" />
      <path
        d="M40 21C28.9543 21 20 29.9543 20 41V180H516V41C516 29.9543 507.046 21 496 21H40Z"
        fill="${mainColor}"
      />
      <rect
        x="23"
        y="23"
        width="490"
        height="490"
        rx="17"
        stroke="black"
        stroke-width="6"
      />
      <mask
        id="mask0_2407_471"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="537"
        height="537"
      >
        <rect width="537" height="537" rx="36" fill="white" />
      </mask>
      <g mask="url(#mask0_2407_471)">
        <path d="M410 -28L-2 96V-28H410Z" fill="${subColor}" />
        <path d="M410 -28L-2 96V-28H410Z" fill="white" fill-opacity="0.2" />
        <path d="M-2 263V-28H101L-2 263Z" fill="${subColor}" />
        <path d="M57 546L516 415L516 546L57 546Z" fill="${subColor}" />
        <path d="M565 241L565 546L419 546L565 241Z" fill="${mainColor}" />
      </g>
      <rect x="61" y="346" width="414" height="4" fill="${mainColor}" />
      <rect
        x="6.5"
        y="6.5"
        width="523"
        height="523"
        rx="29.5"
        stroke="${mainColor}"
        stroke-width="13"
      />
    </svg>
  `;
} 
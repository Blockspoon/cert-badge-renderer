import { ISvgProps } from "../../interface/index.js";

export function createRibbonType116({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 562 74"
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
        d="M166.556 73.2556H0L37.3708 36.612L0 0H166.556V73.2556Z"
        fill="${mainColor}"
      />
      <path
        d="M53.4648 29.7812L166.557 73.2541V29.7812H53.4648Z"
        fill="${mainColor}"
      />
      <path
        d="M395.176 73.2556H561.732L524.393 36.612L561.732 0H395.176V73.2556Z"
        fill="${mainColor}"
      />
      <path
        d="M166.556 73.2556H0L37.3708 36.612L0 0H166.556V73.2556Z"
        fill="black"
        fill-opacity="0.14"
      />
      <path
        d="M395.176 73.2556H561.732L524.393 36.612L561.732 0H395.176V73.2556Z"
        fill="black"
        fill-opacity="0.14"
      />
      <path
        d="M508.268 29.7812L395.176 73.2541V29.7812H508.268Z"
        fill="${mainColor}"
      />
      <path
        d="M53.4648 29.7812L166.557 73.2541V29.7812H53.4648Z"
        fill="black"
        fill-opacity="0.75"
      />
      <path
        d="M508.268 29.7812L395.176 73.2541V29.7812H508.268Z"
        fill="black"
        fill-opacity="0.75"
      />
    </svg>
  `;
}

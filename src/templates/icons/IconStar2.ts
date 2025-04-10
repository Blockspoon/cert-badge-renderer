import { ISvgProps } from "../../interface"; 

export function createIconStar2({
  mainColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 39 39"
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
        d="M1.63834 17.1609L13.0216 13.0216L17.1609 1.63832C17.9553 -0.546131 21.0447 -0.546081 21.8392 1.63832L25.9782 13.0216L37.3614 17.1609C39.5462 17.9553 39.5462 21.0447 37.3614 21.8391L25.9782 25.9784L21.8392 37.3617C21.0447 39.5461 17.9553 39.5461 17.1609 37.3617L13.0216 25.9784L1.63834 21.8391C-0.546112 21.0447 -0.546112 17.9553 1.63834 17.1609Z"
        fill="${mainColor}"
      />
    </svg>
  `;
}
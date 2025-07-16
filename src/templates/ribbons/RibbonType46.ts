import { ISvgProps } from "../../interface/index.js"; 

export function createRibbonType46({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 136 146"
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M135.963 0.0987041L0.173638 0L0.0195312 145.841H4.33039L68.0682 97.03L131.652 145.94H135.809L135.963 0.0987041Z"
        fill="${mainColor}"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M67.0693 95.7607L2.03731 145.84H0.0195312L0.174891 0.000366211L133.964 0.100422L133.809 145.94H131.946L67.0693 95.7607ZM67.0693 93.8614L132.102 144.041V1.29988L2.03731 1.19982V144.041L67.0693 93.8614Z"
        fill="${subColor}"
      />
    </svg>
  `;
}
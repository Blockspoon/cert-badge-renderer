import { ISvgProps } from "../../interface/index.js"; 

export function createIconBg4({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 103 115"
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
        d="M96.373 23.8877L58.1368 1.77951C54.0329 -0.59317 48.975 -0.59317 44.8711 1.77951L6.63092 23.8877C2.527 26.2604 0 30.6465 0 35.3918V79.6082C0 84.3535 2.527 88.7396 6.63092 91.1123L44.8671 113.22C48.971 115.593 54.029 115.593 58.1329 113.22L96.3691 91.1123C100.473 88.7396 103 84.3535 103 79.6082V35.3918C103 30.6465 100.473 26.2604 96.3691 23.8877H96.373Z"
        fill="${mainColor}"
      />
      <path
        d="M91.1451 27.3951L57.3636 7.59382C53.7378 5.46873 49.2691 5.46873 45.6434 7.59382L11.8584 27.3951C8.23259 29.5202 6 33.4486 6 37.6988V77.3012C6 81.5514 8.23259 85.4798 11.8584 87.6049L45.6399 107.406C49.2657 109.531 53.7343 109.531 57.3601 107.406L91.1416 87.6049C94.7674 85.4798 97 81.5514 97 77.3012V37.6988C97 33.4486 94.7674 29.5202 91.1416 27.3951H91.1451Z"
        fill="${subColor}"
      />
    </svg>
  `;
}
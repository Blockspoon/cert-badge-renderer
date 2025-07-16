import { ISvgProps } from "../../interface/index.js"; 

export function createIconBg7({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
  extraColor1 = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 180 165"
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
        d="M160.684 76V64L179.684 75.5V86.5L160.684 76Z"
        fill="url(#${paintId0})"
      />
      <path
        d="M19.6836 75.2078V63.6445L0.683594 74.5819V86.1445L19.6836 75.2078Z"
        fill="url(#${paintId1})"
      />
      <path
        d="M151.612 36.6119L99.269 6.4294C93.651 3.19018 86.727 3.19018 81.109 6.4294L28.7609 36.6119C23.1429 39.8511 19.6836 45.8391 19.6836 52.3175V112.682C19.6836 119.161 23.1429 125.149 28.7609 128.388L81.1036 158.571C86.7216 161.81 93.6456 161.81 99.2636 158.571L151.606 128.388C157.224 125.149 160.684 119.161 160.684 112.682V52.3175C160.684 45.8391 157.23 39.8511 151.612 36.6119Z"
        fill="url(#${paintId2})"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M99.269 6.4294L151.612 36.6119C157.23 39.8511 160.684 45.8391 160.684 52.3175V112.682C160.684 119.161 157.224 125.149 151.606 128.388L99.2636 158.571C93.6456 161.81 86.7216 161.81 81.1036 158.571L28.7609 128.388C23.1429 125.149 19.6836 119.161 19.6836 112.682V52.3175C19.6836 45.8391 23.1429 39.8511 28.7609 36.6119L81.109 6.4294C86.727 3.19018 93.651 3.19018 99.269 6.4294ZM79.111 2.96415C79.111 2.96414 79.111 2.96414 79.111 2.96413C85.9656 -0.98807 94.4124 -0.988065 101.267 2.96415L101.267 2.96422L153.61 33.1466C160.468 37.1009 164.684 44.4108 164.684 52.3175V112.682C164.684 120.591 160.46 127.9 153.604 131.853C153.604 131.853 153.604 131.853 153.604 131.853L101.262 162.036L101.262 162.036C94.407 165.988 85.9602 165.988 79.1056 162.036L79.1055 162.036L26.7629 131.853C19.9068 127.9 15.6836 120.592 15.6836 112.682V52.3175C15.6836 44.4085 19.9068 37.0997 26.7629 33.1466L26.7629 33.1466L79.111 2.96415Z"
        fill="${extraColor1}"
      />
      <path
        d="M144.641 41.2884L98.238 14.1818C93.2575 11.2727 87.1192 11.2727 82.1388 14.1818L35.7308 41.2884C30.7503 44.1975 27.6836 49.5752 27.6836 55.3934V109.607C27.6836 115.425 30.7503 120.802 35.7308 123.712L82.134 150.818C87.1145 153.727 93.2527 153.727 98.2332 150.818L144.636 123.712C149.617 120.802 152.684 115.425 152.684 109.607V55.3934C152.684 49.5752 149.617 44.1975 144.636 41.2884H144.641Z"
        fill="${extraColor1}"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="178.684"
          y1="73"
          x2="158.684"
          y2="71"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="1" stop-opacity="0.4" />
        </linearGradient>
        <linearGradient
          id="${paintId1}"
          x1="1.68359"
          y1="72.6445"
          x2="21.6836"
          y2="70.6445"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="1" stop-opacity="0.4" />
        </linearGradient>
        <linearGradient
          id="${paintId2}"
          x1="90.1836"
          y1="3.99998"
          x2="90.1836"
          y2="161"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}
import { ISvgProps } from "../../interface";

export function createBadgeType63({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
  extraColor1 = "#96A6B4",
  extraColor2 = "#96A6B4",
}: ISvgProps): string {
  const clipId0 = `clip0_linear_${Math.random().toString(36).substr(2, 9)}`;

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
            <defs>
        <clipPath id="${clipId0}">
          <path
            d="M23 347.403H514V362.403C514 446.35 445.947 514.403 362 514.403H55C37.3269 514.403 23 500.076 23 482.403V347.403Z"
            fill="${extraColor2}"
          />
        </clipPath>
      </defs>
      <path
        d="M6 40.403C6 21.6253 21.2223 6.40302 40 6.40302H377C462.052 6.40302 531 75.3512 531 160.403V377.403C531 462.455 462.052 531.403 377 531.403H40C21.2223 531.403 6 516.181 6 497.403V40.403Z"
        fill="${mainColor}"
        stroke="${mainColor}"
        strokeWidth="12"
      />
      <path
        d="M15 53.403C15 32.4162 32.0132 15.403 53 15.403H364C451.261 15.403 522 86.142 522 173.403V364.403C522 451.664 451.261 522.403 364 522.403H53C32.0132 522.403 15 505.39 15 484.403V53.403Z"
        stroke="${extraColor2}"
        strokeWidth="4"
      />
      <path
        d="M23 55.403C23 37.7299 37.3269 23.403 55 23.403H362C445.947 23.403 514 91.4557 514 175.403V362.403C514 446.35 445.947 514.403 362 514.403H55C37.3269 514.403 23 500.076 23 482.403V55.403Z"
        fill="${extraColor2}"
      />
      <rect
        x="23"
        y="175.65"
        width="439"
        height="3.50499"
        fill="${mainColor}"
      />
      <g clip-path="url(#${clipId0})">
        <path
          d="M350.872 379.324C406.16 342.877 482.659 344.955 513.997 350.55V514.403H21.836L21.8388 429.929C22.1044 432.831 32.4456 440.889 68.0071 452.059C113.812 466.446 281.762 424.883 350.872 379.324Z"
          fill="${mainColor}"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M514.104 350.55C482.766 344.955 406.267 342.877 350.979 379.324C290.856 418.959 147.138 502.753 80.619 514.403H80.6172C80.622 514.403 80.619 514.403 80.619 514.403H514.104V350.55Z"
          fill="${subColor}"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M514.101 425.679C479.612 419.218 438.775 419.581 393.111 430.105C380.412 433.506 341.625 445.676 288.07 467.153C225.943 492.068 189.771 503.867 128.328 514.403L514.101 514.403V425.679Z"
          fill="${extraColor1}"
        />
      </g>

    </svg>
  `;
}

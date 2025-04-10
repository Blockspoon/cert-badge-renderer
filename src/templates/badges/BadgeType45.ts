import { ISvgProps } from "../../interface"; 

export function createBadgeType45({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 450 491"
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
      <g filter="url(#filter0_d_2407_452)">
        <path
          d="M424.127 358.599L239.696 474.73C230.655 480.423 219.345 480.423 210.304 474.73L25.8727 358.599C17.2664 353.183 12 343.412 12 332.874V41.9993C12 25.4255 24.7853 12 40.5688 12H409.431C425.215 12 438 25.4255 438 41.9993V332.857C438 343.395 432.734 353.167 424.127 358.583V358.599Z"
          fill="${mainColor}"
        />
      </g>
      <path
        d="M412.909 352.787L238.868 462.95C230.336 468.35 219.664 468.35 211.132 462.95L37.0912 352.787C28.9697 347.649 24 338.38 24 328.383V52.4576C24 36.7355 36.065 24 50.9593 24H399.041C413.935 24 426 36.7355 426 52.4576V328.368C426 338.364 421.03 347.634 412.909 352.771V352.787Z"
        fill="#101113"
      />
      <path
        d="M405.43 349.138L238.316 456.068C230.124 461.311 219.876 461.311 211.684 456.068L44.5701 349.138C36.7719 344.151 32 335.154 32 325.451V57.6225C32 42.3618 43.5848 30 57.8863 30H392.114C406.415 30 418 42.3618 418 57.6225V325.436C418 335.139 413.228 344.136 405.43 349.123V349.138Z"
        fill="${mainColor}"
      />
      <path
        d="M37 57.1638C37 43.909 47.7452 33.1638 61 33.1638H389C402.255 33.1638 413 43.909 413 57.1638V236.164H37V57.1638Z"
        fill="#101113"
      />
      <path
        d="M33 319.275C33 327.207 36.9189 334.627 43.4701 339.098L213.725 455.304C220.525 459.946 229.475 459.946 236.275 455.304L406.53 339.098C413.081 334.627 417 327.207 417 319.275V228H33L33 319.275Z"
        fill="${mainColor}"
      />
      <path
        d="M32 328.098C32 331.469 33.6986 334.613 36.5182 336.461L214.036 452.814C220.694 457.178 229.306 457.178 235.964 452.814L413.482 336.461C416.301 334.613 418 331.469 418 328.098V220H32V328.098Z"
        fill="${subColor}"
      />
      <path
        d="M26 310.949C26 318.385 29.7559 325.317 35.9846 329.378L215.169 446.203C221.144 450.099 228.856 450.099 234.831 446.203L414.015 329.378C420.244 325.317 424 318.385 424 310.949V222H26V310.949Z"
        stroke="#101113"
        stroke-width="4"
      />
      <defs>
        <filter
          id="filter0_d_2407_452"
          x="0"
          y="0"
          width="450"
          height="491"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2407_452"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2407_452"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  `;
}
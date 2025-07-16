import { ISvgProps } from "../../interface/index.js"; 

export function createBadgeType26({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 450 524"
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
      <g filter="url(#filter0_d_2399_1192)">
        <path
          d="M423.498 382.977L239.649 507.105C230.636 513.19 219.363 513.19 210.35 507.105L26.5008 382.977C17.9216 377.188 12.6719 366.744 12.6719 355.48V44.5773C12.6719 26.8622 25.4168 12.5123 41.1505 12.5123H408.849C424.582 12.5123 437.327 26.8622 437.327 44.5773V355.463C437.327 366.727 432.077 377.171 423.498 382.96V382.977Z"
          fill="${mainColor}"
        />
      </g>
      <path
        d="M406.086 373.956L238.364 488.82C230.142 494.451 219.857 494.451 211.635 488.82L43.9128 373.956C36.0861 368.599 31.2969 358.934 31.2969 348.511V60.8094C31.2969 44.4163 42.9238 31.1373 57.2774 31.1373H392.721C407.075 31.1373 418.702 44.4163 418.702 60.8094V348.495C418.702 358.918 413.912 368.583 406.086 373.939V373.956Z"
        fill="white"
      />
      <path
        d="M406.365 374.111L238.385 488.999C230.15 494.631 219.85 494.631 211.615 488.999L43.6353 374.111C35.7966 368.753 31 359.086 31 348.661V60.9008C31 44.5044 42.6448 31.2227 57.0204 31.2227H392.98C407.355 31.2227 419 44.5044 419 60.9008V348.645C419 359.07 414.203 368.737 406.365 374.095V374.111Z"
        fill="${subColor}"
      />
      <path
        d="M397.016 367.783L237.695 477.2C229.885 482.564 220.115 482.564 212.305 477.2L52.984 367.783C45.5493 362.68 41 353.474 41 343.545V69.4875C41 53.8719 52.0446 41.2227 65.6792 41.2227H384.321C397.955 41.2227 409 53.8719 409 69.4875V343.529C409 353.458 404.451 362.665 397.016 367.767V367.783Z"
        fill="white"
      />
      <path
        d="M53 71.2227C53 61.2815 61.0589 53.2227 71 53.2227H377C386.941 53.2227 395 61.2815 395 71.2227V237.223C395 247.164 386.941 255.223 377 255.223H71C61.0589 255.223 53 247.164 53 237.223V71.2227Z"
        fill="${mainColor}"
      />
      <defs>
        <filter
          id="filter0_d_2399_1192"
          x="0.671875"
          y="0.512329"
          width="448.656"
          height="523.156"
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
            result="effect1_dropShadow_2399_1192"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2399_1192"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  `;
} 
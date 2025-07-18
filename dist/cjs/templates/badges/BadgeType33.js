"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBadgeType33 = createBadgeType33;
function createBadgeType33({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 480 560"
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
      <g filter="url(#filter0_d_2407_144)">
        <path
          d="M26.8497 150.19L224.269 16.9007C233.947 10.3664 246.053 10.3664 255.731 16.9007L453.15 150.19C462.363 156.407 468 167.622 468 179.717L468 513.568C468 532.591 454.314 548 437.419 548L42.5807 548C25.6856 548 12 532.591 12 513.568L12 179.735C12 167.64 17.6372 156.425 26.8497 150.209L26.8497 150.19Z"
          fill="white"
        />
      </g>
      <path
        d="M45.5471 159.878L225.649 36.535C234.478 30.4883 245.522 30.4883 254.351 36.535L434.453 159.878C442.857 165.63 448 176.008 448 187.201L448 496.138C448 513.741 435.515 528 420.102 528L59.8982 528C44.4852 528 32 513.741 32 496.138L32 187.218C32 176.025 37.1428 165.647 45.5471 159.895L45.5471 159.878Z"
        fill="${mainColor}"
      />
      <path
        d="M422.832 168.013L422.833 168.014C429.623 172.699 434 181.353 434 190.943L434 487.423C434 502.655 423.395 514 411.443 514L68.5569 514C56.6049 514 46 502.655 46 487.423L46 190.959C46 181.37 50.3769 172.716 57.1675 168.03L58.8958 166.838L58.8958 166.82L228.612 49.6438C235.648 44.7854 244.352 44.7854 251.388 49.6438L422.832 168.013Z"
        stroke="black"
        stroke-opacity="0.8"
        stroke-width="8"
      />
      <path
        d="M62.3745 174.269L226.891 57.1603C234.956 51.6131 245.044 51.6131 253.109 57.1603L417.625 174.269C425.302 179.546 430 185.11 430 195.378L430 485.499C430.5 503.5 419 510.998 407.5 510L67.4998 510C59.9998 508.5 50.9998 503.5 49.9998 488.5L49.9998 195.394C49.9998 185.126 54.6975 179.562 62.3745 174.285L62.3745 174.269Z"
        fill="${mainColor}"
      />
      <mask
        id="mask0_2407_144"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="50"
        y="303"
        width="380"
        height="207"
      >
        <path
          d="M50 323C50 311.954 58.9543 303 70 303H410C421.046 303 430 311.954 430 323V490C430 501.046 421.046 510 410 510H70C58.9543 510 50 501.046 50 490V323Z"
          fill="#5890CB"
        />
      </mask>
      <g mask="url(#mask0_2407_144)">
        <ellipse
          cx="235.5"
          cy="519"
          rx="216.5"
          ry="94"
          fill="black"
          fill-opacity="0.1"
        />
      </g>
      <path
        d="M430 188.826C430 180.941 426.127 173.559 419.64 169.078L251.366 52.8508C244.525 48.1257 235.475 48.1257 228.634 52.8508L60.3603 169.078C53.8728 173.559 50 180.941 50 188.826L50 309L430 309L430 188.826Z"
        fill="${subColor}"
      />
      <path
        d="M50 184.901C50.925 181.549 51 180.465 52.5 178H427.5C428.997 180.212 429.118 181.661 430 184.408V318H50V184.901Z"
        fill="white"
      />
      <path d="M50 186L430 186" stroke="${mainColor}" stroke-width="4" />
      <path d="M50 310L430 310" stroke="${mainColor}" stroke-width="4" />
      <defs>
        <filter
          id="filter0_d_2407_144"
          x="0"
          y="0"
          width="480"
          height="560"
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
            result="effect1_dropShadow_2407_144"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2407_144"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  `;
}

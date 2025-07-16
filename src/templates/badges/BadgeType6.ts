import { ISvgProps } from "../../interface/index.js"; 

export function createBadgeType6({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 478 461"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        width: 100%;
        height: 100%;
        object-fit: contain;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <path
        d="M444.148 356.73L274.839 451.717C252.771 464.094 225.212 464.094 203.161 451.717L33.8515 356.73C12.8468 344.94 0 323.724 0 300.813V65.195C0 29.1893 31.202 0 69.6902 0H408.31C446.798 0 478 29.1893 478 65.195V300.813C478 323.724 465.153 344.94 444.148 356.73Z"
        fill="url(#${paintId0})"
      />
      <path
        d="M432.99 352.098L272.889 439.462C252.022 450.846 225.962 450.846 205.111 439.462L45.0102 352.098C25.1481 341.255 13 321.742 13 300.67V83.9624C13 50.8466 42.5048 24 78.8995 24H399.101C435.495 24 465 50.8466 465 83.9624V300.67C465 321.742 452.852 341.255 432.99 352.098Z"
        fill="#101113"
        fill-opacity="0.2"
      />
      <path
        d="M423.548 343.586L271.24 428.684C251.388 439.772 226.596 439.772 206.76 428.684L54.4522 343.586C35.5568 333.024 24 314.018 24 293.492V82.4068C24 50.1501 52.0687 24 86.692 24H391.308C425.931 24 454 50.1501 454 82.4068V293.492C454 314.018 442.443 333.024 423.548 343.586Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="26.0707"
          y1="15.8526"
          x2="370.455"
          y2="426.726"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
} 
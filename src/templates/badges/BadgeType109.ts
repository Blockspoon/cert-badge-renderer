import { ISvgProps } from "../../interface";

export function createBadgeType109({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
  extraColor1 = "#96A6B4",
  extraColor2 = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 442 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 95.0249L221 0L442 95.0249V321.95C428.464 401.661 376.155 442.961 221 512C80.9753 448.01 13.8965 409.969 0 321.95V95.0249Z"
        fill="${mainColor}"
      />
      <path
        d="M10 102.571L221 12L432 102.571V318.859C419.076 394.833 369.135 434.197 221 500C87.3112 439.009 23.2677 402.752 10 318.859V102.571Z"
        fill="white"
      />
      <path
        d="M15 106.343L221 18L427 106.343V317.313C414.382 391.419 365.625 429.815 221 494C90.4792 434.509 27.9533 399.143 15 317.313V106.343Z"
        fill="${subColor}"
      />
      <path
        d="M39 123.95L221 46L403 123.95V310.1C391.852 375.488 348.775 409.366 221 466C105.686 413.508 50.4442 382.303 39 310.1V123.95Z"
        fill="white"
      />
      <mask
        id="mask0_3488_8545"
        maskUnits="userSpaceOnUse"
        x="39"
        y="46"
        width="364"
        height="420"
      >
        <path
          d="M39 123.95L221 46L403 123.95V310.1C391.852 375.488 348.775 409.366 221 466C105.686 413.508 50.4442 382.303 39 310.1V123.95Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_3488_8545)">
        <rect x="23" y="201" width="396" height="133" fill="${mainColor}" />
      </g>
      <mask
        id="mask1_3488_8545"
        maskUnits="userSpaceOnUse"
        x="39"
        y="46"
        width="364"
        height="420"
      >
        <path
          d="M39 123.95L221 46L403 123.95V310.1C391.852 375.488 348.775 409.366 221 466C105.686 413.508 50.4442 382.303 39 310.1V123.95Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_3488_8545)">
        <rect
          x="23"
          y="201"
          width="396"
          height="133"
          fill="white"
          fillOpacity="0.3"
        />
      </g>
      <path d="M40 208.5H402.5" stroke="white" strokeWidth="2" />
      <path d="M42 326H400" stroke="white" strokeWidth="2" />
    </svg>
  `;
}

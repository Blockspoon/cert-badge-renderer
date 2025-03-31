export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBadgeType16({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 540 540"
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
      <g clip-path="url(#clip0_2384_1396)">
        <path
          d="M373.236 28.9268L166.756 29.154C144.595 29.1792 124.097 41.0138 112.994 60.1933L9.54156 238.906C-1.56085 258.085 -1.58041 281.702 9.47834 300.857L112.522 479.333C123.58 498.487 144.043 510.279 166.204 510.254L372.684 510.026C394.845 510.001 415.344 498.167 426.446 478.987L529.883 300.284C540.985 281.104 541.005 257.487 529.946 238.333L426.903 59.8567C415.844 40.7023 395.381 28.9108 373.22 28.936L373.236 28.9268Z"
          fill="${mainColor}"
        />
        <path
          d="M479.701 112.932L300.771 9.88879C281.566 -1.16996 257.897 -1.16996 238.692 9.88879L59.743 112.932C40.5383 123.991 28.7129 144.434 28.7129 166.551V372.638C28.7129 394.756 40.5383 415.199 59.743 426.257L238.674 529.301C257.878 540.359 281.548 540.359 300.752 529.301L479.683 426.257C498.888 415.199 510.713 394.756 510.713 372.638V166.551C510.713 144.434 498.888 123.991 479.683 112.932H479.701Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M463.116 126.678L463.112 126.675L463.099 126.668H463.116L463.103 126.66L463.099 126.658L456.215 122.668L298.317 31.143C280.629 20.8911 258.829 20.8911 241.141 31.143L76.3255 126.668C58.6375 136.92 47.7461 155.871 47.7461 176.375V191.595H51.7461V176.375C51.7461 157.291 61.883 139.662 78.3313 130.128L243.147 34.6037L241.472 31.7134L243.147 34.6037C259.595 25.0709 279.864 25.0709 296.311 34.6037L448.239 122.668H448.221L461.093 130.128C477.541 139.662 487.678 157.291 487.678 176.375V191.595H491.678V176.375C491.678 158.301 483.216 141.434 469.095 130.668C467.202 129.224 465.206 127.89 463.116 126.678Z"
          fill="${subColor}"
        />
        <path
          d="M36.7129 375.595H502.713V163.595H36.7129V375.595Z"
          fill="${subColor}"
        />
        <path
          d="M36.7129 171.595H502.713V367.595H36.7129V171.595Z"
          fill="url(#${paintId0})"
        />
        <path
          d="M36.7129 171.595H502.713V367.595H36.7129V171.595Z"
          fill="url(#paint1_linear_2384_1396)"
          fill-opacity="0.4"
        />
        <path
          d="M523.56 227.262L508.713 201.595L508.213 337.718L523.56 311.216V227.262Z"
          fill="url(#paint2_linear_2384_1396)"
        />
        <path
          d="M15.8484 227.938L30.6955 202.271L31.1953 338.394L15.8484 311.892V227.938Z"
          fill="url(#paint3_linear_2384_1396)"
        />
        <path
          d="M360.494 28.9266L330.842 28.951L448.478 97.4456L433.2 70.9035L360.494 28.9266Z"
          fill="url(#paint4_linear_2384_1396)"
        />
        <path
          d="M106.131 468.258L91.3263 442.567L209.463 510.196L178.837 510.235L106.131 468.258Z"
          fill="url(#paint5_linear_2384_1396)"
        />
        <path
          d="M106.692 71.0875L91.8868 96.7791L210.023 29.1501L179.398 29.1105L106.692 71.0875Z"
          fill="url(#paint6_linear_2384_1396)"
        />
        <path
          d="M360.021 510.111L330.369 510.086L448.006 441.591L432.727 468.134L360.021 510.111Z"
          fill="url(#paint7_linear_2384_1396)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M479.697 112.94C479.698 112.941 479.7 112.942 479.701 112.943C485.742 116.424 491.052 120.834 495.493 125.932C505.163 137.034 510.713 151.4 510.713 166.551V372.638C510.713 394.756 498.888 415.199 479.683 426.257L300.752 529.301C281.548 540.359 257.878 540.359 238.674 529.301L59.743 426.257C40.5383 415.199 28.7129 394.756 28.7129 372.638V166.551C28.7129 144.434 40.5383 123.991 59.743 112.932L238.692 9.88879L245.179 21.1546L66.2302 124.198C66.2302 124.198 66.2302 124.198 66.2302 124.198C51.048 132.94 41.7129 149.092 41.7129 166.551V372.638C41.7129 390.098 51.048 406.249 66.2302 414.992L245.161 518.035C260.35 526.781 279.076 526.781 294.265 518.035C294.264 518.035 294.265 518.035 294.265 518.035L473.195 414.992C488.377 406.249 497.713 390.098 497.713 372.638V166.551C497.713 149.092 488.378 132.94 473.196 124.198L431.056 99.9321H431.078L294.284 21.1545C294.283 21.1544 294.284 21.1546 294.284 21.1545C279.095 12.4084 260.368 12.4083 245.179 21.1546L238.692 9.88879C257.897 -1.16996 281.566 -1.16996 300.771 9.88879L479.701 112.932H479.683C479.687 112.935 479.692 112.937 479.697 112.94Z"
          fill="${subColor}"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M497.713 173.595H41.7129V171.595H497.713V173.595Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M497.713 367.595H41.7129V365.595H497.713V367.595Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="36.7129"
          y1="171.595"
          x2="502.713"
          y2="367.595"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2384_1396"
          x1="269.713"
          y1="171.595"
          x2="269.713"
          y2="367.595"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2384_1396"
          x1="521.713"
          y1="270.899"
          x2="505.673"
          y2="270.899"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="1" stop-opacity="0.4" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2384_1396"
          x1="17.6955"
          y1="271.575"
          x2="33.7351"
          y2="271.575"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="1" stop-opacity="0.4" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_2384_1396"
          x1="397.361"
          y1="52.3449"
          x2="389.341"
          y2="66.2356"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="1" stop-opacity="0.4" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_2384_1396"
          x1="144.846"
          y1="488.477"
          x2="152.866"
          y2="474.587"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="1" stop-opacity="0.4" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_2384_1396"
          x1="145.406"
          y1="50.8684"
          x2="153.426"
          y2="64.7591"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="1" stop-opacity="0.4" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_2384_1396"
          x1="396.889"
          y1="486.692"
          x2="388.869"
          y2="472.801"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="1" stop-opacity="0.4" />
        </linearGradient>
        <clipPath id="clip0_2384_1396">
          <rect width="540" height="540" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `;
} 
export function createBadgeType29({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
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
        <g filter="url(#filter0_d_2399_1207)">
          <path
            d="M453.15 409.81L255.731 543.099C246.053 549.634 233.947 549.634 224.269 543.099L26.8497 409.81C17.6372 403.593 12 392.378 12 380.283V46.4318C12 27.4091 25.6857 12 42.5807 12H437.419C454.314 12 468 27.4091 468 46.4318V380.264C468 392.36 462.363 403.575 453.15 409.791V409.81Z"
            fill="white"
          />
        </g>
        <path
          d="M434.453 400.122L254.351 523.465C245.522 529.512 234.478 529.512 225.649 523.465L45.5471 400.122C37.1427 394.37 32 383.992 32 372.799V63.8622C32 46.2592 44.4852 32 59.8982 32H420.102C435.515 32 448 46.2592 448 63.8622V372.782C448 383.975 442.857 394.353 434.453 400.105V400.122Z"
          fill="${mainColor}"
        />
        <path
          d="M419.495 392.372L253.247 507.758C245.097 513.414 234.903 513.414 226.753 507.758L60.505 392.372C52.7471 386.991 48 377.283 48 366.812V77.8066C48 61.3392 59.5248 48 73.7522 48H406.248C420.475 48 432 61.3392 432 77.8066V366.796C432 377.267 427.253 386.975 419.495 392.356V392.372Z"
          fill="white"
        />
        <path
          d="M60 84C60 70.7452 70.7452 60 84 60H396C409.255 60 420 70.7452 420 84V279H60V84Z"
          fill="${subColor}"
        />
        <path
          d="M48 371.929C48 379.802 51.8616 387.175 58.3336 391.658L228.611 509.611C235.462 514.357 244.538 514.357 251.389 509.611L421.666 391.658C428.138 387.175 432 379.802 432 371.929V279H48L48 371.929Z"
          fill="white"
        />
        <path
          d="M373.567 425H106.441L229.569 510.504C235.735 514.786 243.912 514.792 250.084 510.517L373.567 425Z"
          fill="${subColor}"
        />
        <mask
          id="mask0_2399_1207"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="60"
          y="60"
          width="360"
          height="219"
        >
          <path
            d="M60 84C60 70.7452 70.7452 60 84 60H396C409.255 60 420 70.7452 420 84V279H60V84Z"
            fill="${subColor}"
          />
        </mask>
        <g mask="url(#mask0_2399_1207)">
          <ellipse
            cx="240.5"
            cy="266.833"
            rx="197.5"
            ry="79.8768"
            fill="${mainColor}"
          />
        </g>
        <path d="M60 285L420 285" stroke="${mainColor}" stroke-width="4" />
        <path d="M90 419H390" stroke="${mainColor}" stroke-width="4" />
        <defs>
          <filter
            id="filter0_d_2399_1207"
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
              result="effect1_dropShadow_2399_1207"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2399_1207"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    `;
}

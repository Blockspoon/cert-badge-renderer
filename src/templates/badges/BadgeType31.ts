export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBadgeType31({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 528 528"
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
      <g filter="url(#filter0_d_2407_140)">
        <path
          d="M12 264C12 124.824 124.824 12 264 12C403.176 12 516 124.824 516 264V416C516 471.228 471.228 516 416 516H112C56.7715 516 12 471.228 12 416V264Z"
          fill="white"
        />
      </g>
      <path
        d="M32 264C32 135.87 135.87 32 264 32C392.13 32 496 135.87 496 264V403.2C496 454.452 454.452 496 403.2 496H124.8C73.548 496 32 454.452 32 403.2V264Z"
        fill="${mainColor}"
      />
      <path
        d="M52 264C52 146.916 146.916 52 264 52C381.084 52 476 146.916 476 264V391.2C476 438.034 438.034 476 391.2 476H136.8C89.9663 476 52 438.034 52 391.2V264Z"
        fill="${subColor}"
      />
      <mask
        id="mask0_2407_140"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="52"
        y="52"
        width="424"
        height="424"
      >
        <path
          d="M52 264C52 146.916 146.916 52 264 52C381.084 52 476 146.916 476 264V391.2C476 438.034 438.034 476 391.2 476H136.8C89.9663 476 52 438.034 52 391.2V264Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_2407_140)">
        <ellipse cx="81" cy="397.5" rx="105" ry="84.5" fill="white" />
        <ellipse cx="447.012" cy="397.5" rx="106" ry="84.5" fill="white" />
        <ellipse cx="413" cy="347.5" rx="51" ry="57.5" fill="white" />
        <ellipse cx="113.5" cy="343.5" rx="48.5" ry="57.5" fill="white" />
        <ellipse
          cx="41.6091"
          cy="58.9546"
          rx="41.6091"
          ry="58.9546"
          transform="matrix(0.916188 0.400749 -0.476857 0.878981 143.273 299.098)"
          fill="white"
        />
        <ellipse
          cx="36.2033"
          cy="58.9546"
          rx="36.2033"
          ry="58.9546"
          transform="matrix(-0.916188 0.400749 0.476857 0.878981 383.719 299.312)"
          fill="white"
        />
        <ellipse
          cx="47.9925"
          cy="58.9546"
          rx="47.9925"
          ry="58.9546"
          transform="matrix(0.916188 0.400749 -0.476857 0.878981 178.953 318.684)"
          fill="white"
        />
        <ellipse
          cx="47.9925"
          cy="58.9546"
          rx="47.9925"
          ry="58.9546"
          transform="matrix(-0.916188 0.400749 0.476857 0.878981 357.941 314.566)"
          fill="white"
        />
        <path
          d="M300 344.5C280.5 360 249.019 356.346 234.54 346.058L67 485.5L461.5 491.5L300 344.5Z"
          fill="white"
        />
      </g>
      <path
        d="M143.58 324.96C131.116 308.011 110.966 311.251 102.449 314.99C126.878 314.99 136.725 327.037 138.594 333.06C150.061 329.072 164.976 334.722 171 338.045C162.525 324.087 149.188 323.506 143.58 324.96Z"
        fill="black"
        fill-opacity="0.11"
      />
      <path
        d="M85 353C91.8551 347.807 108.681 339.167 121.145 346.146C113.251 339.499 94.971 331.564 85 353Z"
        fill="black"
        fill-opacity="0.11"
      />
      <path
        d="M384.42 324.96C396.884 308.011 417.034 311.251 425.551 314.99C401.122 314.99 391.275 327.037 389.406 333.06C377.939 329.072 363.024 334.722 357 338.045C365.475 324.087 378.812 323.506 384.42 324.96Z"
        fill="black"
        fill-opacity="0.11"
      />
      <path
        d="M443 353C436.145 347.807 419.319 339.167 406.855 346.146C414.749 339.499 433.029 331.564 443 353Z"
        fill="black"
        fill-opacity="0.11"
      />
      <circle cx="410" cy="239" r="43" fill="white" />
      <circle cx="410" cy="239" r="40" fill="${subColor}" />
      <circle cx="410" cy="239" r="38" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M143.2 248.641C140.466 249.502 137.541 249.969 134.5 249.969C119.312 249.969 107 238.328 107 223.969C107 216.998 109.901 210.669 114.624 206C98.6943 206.719 86 219.862 86 235.969C86 252.538 99.4315 265.969 116 265.969C128.04 265.969 138.424 258.876 143.2 248.641Z"
        fill="white"
      />
      <circle cx="139" cy="202" r="4" fill="white" />
      <circle cx="67" cy="291" r="3" fill="white" />
      <circle cx="362" cy="293" r="3" fill="white" />
      <circle cx="465" cy="268" r="4" fill="white" />
      <defs>
        <filter
          id="filter0_d_2407_140"
          x="0"
          y="0"
          width="528"
          height="528"
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
            result="effect1_dropShadow_2407_140"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2407_140"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  `;
} 
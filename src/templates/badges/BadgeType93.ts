import { ISvgProps } from "../../interface";

export function createBadgeType93({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
  extraColor1 = "#96A6B4",
  extraColor2 = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 504 504"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M349.927 15.5576H154.076L15.5591 154.075V349.925L154.076 488.442H349.927L488.444 349.925V154.075L349.927 15.5576Z"
        fill="url(#${paintId0})"
      />
      <path
        d="M101.392 402.608L39 340.216V163.784L163.784 39H340.216L465 163.784V340.216L402.608 402.608"
        stroke="${mainColor}"
        strokeWidth="2"
      />
      <path
        d="M354.934 500.52H149.069L3.48071 354.931V149.067L149.069 3.47852H354.934L500.522 149.067V354.931L354.934 500.52ZM159.083 476.363H344.957L476.365 344.955V159.119L344.919 27.6349H159.045L27.6371 159.081V344.917L159.045 476.325L159.083 476.363Z"
        fill="${mainColor}"
      />
      <path
        d="M356.386 503.96H147.655L0.0407715 356.384V147.653L147.655 0.0390625H356.386L504 147.653V356.384L356.386 503.96ZM150.483 497.042H353.481L497.044 353.479V150.482L353.519 6.95727H150.521L6.95898 150.482V353.479L150.521 497.042H150.483ZM346.372 479.804H157.669L24.1972 346.37V157.667L157.631 24.1955H346.334L479.767 157.629V346.332L346.334 479.765L346.372 479.804ZM160.497 472.885H343.505L472.887 343.503V160.496L343.505 31.1137H160.497L31.1154 160.496V343.503L160.497 472.885Z"
        fill="${subColor}"
      />
      <path
        d="M349.927 15.5576H154.076L15.5591 154.075V349.925L154.076 488.442H349.927L488.444 349.925V154.075L349.927 15.5576Z"
        fill="url(#${paintId1})"
      />
      <path
        d="M101.392 402.608L39 340.216V163.784L163.784 39H340.216L465 163.784V340.216L402.608 402.608"
        stroke="${mainColor}"
        strokeWidth="2"
      />
      <path
        d="M354.934 500.52H149.069L3.48071 354.931V149.067L149.069 3.47852H354.934L500.522 149.067V354.931L354.934 500.52ZM159.083 476.363H344.957L476.365 344.955V159.119L344.919 27.6349H159.045L27.6371 159.081V344.917L159.045 476.325L159.083 476.363Z"
        fill="${mainColor}"
      />
      <path
        d="M356.386 503.96H147.655L0.0407715 356.384V147.653L147.655 0.0390625H356.386L504 147.653V356.384L356.386 503.96ZM150.483 497.042H353.481L497.044 353.479V150.482L353.519 6.95727H150.521L6.95898 150.482V353.479L150.521 497.042H150.483ZM346.372 479.804H157.669L24.1972 346.37V157.667L157.631 24.1955H346.334L479.767 157.629V346.332L346.334 479.765L346.372 479.804ZM160.497 472.885H343.505L472.887 343.503V160.496L343.505 31.1137H160.497L31.1154 160.496V343.503L160.497 472.885Z"
        fill="${subColor}"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="258.447"
          y1="518.535"
          x2="246.696"
          y2="32.8149"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.215808" stopColor="white" />
          <stop offset="0.994647" stopColor="${extraColor1}" />
          <stop offset="0.998808" stopColor="${extraColor1}" />
          <stop offset="1" stopColor="${extraColor1}" />
        </linearGradient>
        <linearGradient
          id="${paintId1}"
          x1="258.447"
          y1="518.535"
          x2="246.696"
          y2="32.8149"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.215808" stopColor="white" />
          <stop offset="0.994647" stopColor="${extraColor1}" />
          <stop offset="0.998808" stopColor="${extraColor1}" />
          <stop offset="1" stopColor="${extraColor1}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

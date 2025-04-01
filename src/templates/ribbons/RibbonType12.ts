export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createRibbonType12({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 528 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <path
        d="M495 183.595L522 157.595L499.909 158.895L495 183.595Z"
        fill="${mainColor}"
      />
      <path
        opacity="0.4"
        d="M495 183.595L522 157.595L499.909 158.895L495 183.595Z"
        fill="black"
      />
      <path
        d="M33 183.595L6 157.595L28.0909 158.895L33 183.595Z"
        fill="${mainColor}"
      />
      <path
        opacity="0.4"
        d="M33 183.595L6 157.595L28.0909 158.895L33 183.595Z"
        fill="black"
      />
      <rect
        x="23"
        y="146.595"
        width="482"
        height="24"
        fill="black"
        fill-opacity="0.2"
      />
      <rect x="23" y="0.594849" width="482" height="38" fill="white" />
      <rect y="6.59485" width="528" height="154" rx="14" fill="${mainColor}" />
      <mask
        id="mask0_2384_1367"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="6"
        width="528"
        height="155"
      >
        <rect
          y="6.59485"
          width="528"
          height="154"
          rx="14"
          fill="${mainColor}"
        />
      </mask>
      <g mask="url(#mask0_2384_1367)">
        <path
          d="M421.5 -18.4052H597V191.595H240L421.5 -18.4052Z"
          fill="${subColor}"
        />
      </g>
      <rect
        y="20.34"
        width="528"
        height="126.509"
        fill="white"
        fill-opacity="0.3"
      />
      <path d="M0 18.5948L528 18.5948" stroke="white" stroke-width="3" />
      <path d="M0 148.595L528 148.595" stroke="white" stroke-width="3" />
    </svg>
  `;
}
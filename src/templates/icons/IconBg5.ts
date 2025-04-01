export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
  extraColor1?: string;
}

export function createIconBg5({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
  extraColor1 = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 162 160"
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
        d="M56.6444 15.7201C42.0758 18.8864 20.695 23.9883 9.22461 27.4015L13.0422 8.64937C45.1062 0.568597 65.2661 -0.00083071 81.0309 0L56.6444 15.7201Z"
        fill="url(#paint0_linear_2364_704)"
      />
      <path
        d="M105.41 15.7201C119.979 18.8864 141.36 23.9883 152.83 27.4015L149.012 8.64937C116.949 0.568597 96.7885 -0.00083071 81.0238 0L105.41 15.7201Z"
        fill="url(#paint1_linear_2364_704)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.429688 87.3977C4.63115 128.187 39.1002 160 80.9996 160C122.941 160 157.437 128.123 161.582 87.2751C108.227 64.4115 77.7728 57.5271 0.429688 87.3977Z"
        fill="${mainColor}"
      />
      <circle cx="81" cy="79" r="79" fill="${subColor}" />
      <circle cx="81" cy="79" r="67" fill="${extraColor1}" />
      <defs>
        <linearGradient
          id="paint0_linear_2364_704"
          x1="13.4309"
          y1="10.187"
          x2="60.8815"
          y2="30.7762"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="1" stop-opacity="0.4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2364_704"
          x1="148.624"
          y1="10.187"
          x2="101.173"
          y2="30.7762"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="1" stop-opacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  `;
}
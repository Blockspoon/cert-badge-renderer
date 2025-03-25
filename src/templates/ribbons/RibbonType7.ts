export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createRibbonType7({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 398 284"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <path
        d="M43.9913 198.201C26.8239 200.315 -0.157858 192.542 0.855885 182.61C5.60201 171.859 15.253 171.591 36.3727 174.299L43.9913 198.201Z"
        fill="${mainColor}"
      />
      <path
        d="M43.9913 198.201C26.8239 200.315 -0.157858 192.542 0.855885 182.61C5.60201 171.859 15.253 171.591 36.3727 174.299L43.9913 198.201Z"
        fill="black"
        fill-opacity="0.4"
      />
      <path
        d="M457.997 198.201C475.164 200.315 502.146 192.542 501.132 182.61C496.386 171.859 486.735 171.591 465.616 174.299L457.997 198.201Z"
        fill="${mainColor}"
      />
      <path
        d="M457.997 198.201C475.164 200.315 502.146 192.542 501.132 182.61C496.386 171.859 486.735 171.591 465.616 174.299L457.997 198.201Z"
        fill="black"
        fill-opacity="0.4"
      />
      <path d="M26.1447 0H495V170L11 35.5L26.1447 0Z" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.8398 6C7.10786 6 0.839844 12.268 0.839844 20V162C0.839844 162.03 0.839939 162.06 0.840128 162.09V182.635C1.93276 181.298 6.78412 176.901 17.4946 176H484.494C495.204 176.901 500.056 181.298 501.148 182.635V162.592C501.157 162.396 501.161 162.198 501.161 162V20C501.161 12.268 494.893 6 487.161 6H14.8398Z"
        fill="url(#${paintId0})"
      />
      <path
        d="M0.839844 25.1651C5.05834 19.9148 8.77052 18.8231 17.0894 18.9453H487.107C494.077 19.6574 497.205 21.2604 501.16 27.3069V167.679C496.025 163.48 489.896 162.805 476.177 162.941H14.0422C7.88738 163.423 5.08344 164.87 0.839844 168.689V25.1651Z"
        fill="white"
        fill-opacity="0.3"
      />
      <mask
        id="mask0_2364_595"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="6"
        width="502"
        height="170"
      >
        <path
          d="M0.839844 20C0.839844 12.268 7.10786 6 14.8398 6H487.161C494.893 6 501.161 12.268 501.161 20V176H0.839844V20Z"
          fill="url(#${paintId1})"
        />
      </mask>
      <g mask="url(#mask0_2364_595)">
        <path
          d="M-0.107422 24.8841C4.22475 19.5386 7.41907 18.1694 14.1601 18.0085L483.561 18.0085C492.634 17.8688 496.914 19.3999 502.109 27"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M-0.751953 173.805C-0.125749 168.939 7.4186 163.83 14.1596 163.991L483.561 163.991C492.634 164.13 502.108 166.022 502.108 172.533"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="6.9991"
          y1="14"
          x2="505.119"
          y2="151.122"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id="${paintId1}"
          x1="6.9991"
          y1="14"
          x2="505.119"
          y2="151.122"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

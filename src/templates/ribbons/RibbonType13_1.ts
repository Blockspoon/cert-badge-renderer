export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createRibbonType13_1({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 221 170"
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
      <g clip-path="url(#clip0_2487_141)">
        <path
          d="M112.387 0.882759L217.521 38.5672C220.838 39.7193 222.204 43.6939 220.292 46.6485L185.324 65.1732C184.836 65.9475 184.533 66.8317 184.469 67.7487L183.159 104.468C182.881 108.474 178.533 110.806 175.065 108.819L53.3419 41.5146C50.5085 39.895 49.7382 36.1557 51.6747 33.5424L106.25 2.78369C107.654 0.876888 110.138 0.112086 112.387 0.882759Z"
          fill="${mainColor}"
        />
        <path
          d="M159.111 17.6849L195.851 30.8192L140.018 68.7263L150.775 95.3359L98.4103 66.5121L159.111 17.6849Z"
          fill="black"
          fill-opacity="0.4"
        />
        <path
          d="M105.142 34.8691L139.724 135.231C140.896 138.541 138.646 142.09 135.145 142.443L83.6964 136.17C82.7866 136.272 81.9069 136.588 81.1511 137.111L45.3563 167.509C42.0546 169.794 37.5168 167.856 36.9015 163.907L2.63508 21.5775C2.12928 18.3532 4.56752 15.4155 7.81799 15.2947L99.8235 31.265C102.19 31.1702 104.339 32.632 105.142 34.8691Z"
          fill="${mainColor}"
        />
        <path
          d="M120.278 78.9535L28.2738 127.873L13.8433 68.7778L130.834 45.5919L150.768 95.3193L120.106 78.439L120.278 78.9535Z"
          fill="black"
          fill-opacity="0.4"
        />
      </g>
      <defs>
        <clipPath id="clip0_2487_141">
          <rect width="221" height="170" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `;
}
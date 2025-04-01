export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createRibbonType24_1({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 217 187"
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
      <g clip-path="url(#clip0_2487_140)">
        <path
          d="M107.142 -1.66366L211.32 34.212C214.895 35.3997 216.492 39.9406 214.561 43.445L187.147 69.5479C186.654 70.4657 186.363 71.5026 186.328 72.5669L186.245 115.131C186.092 119.781 181.543 122.672 177.777 120.525L45.6875 47.9715C42.6108 46.2214 41.6565 41.9268 43.6263 38.8162L100.671 0.807069C102.099 -1.46208 104.719 -2.45679 107.142 -1.66366Z"
          fill="${mainColor}"
        />
        <path
          d="M36.5898 32.1982L185.963 112.587"
          stroke="white"
          stroke-width="2"
        />
        <path
          d="M107 10.6572L212.187 45.0667"
          stroke="white"
          stroke-width="2"
        />
        <path
          d="M120.222 1.30252L203.867 31.4689C198.138 42.5324 196.882 50.473 143.426 86.4574L151.434 105.972L97.9403 76.9254L120.222 1.30252Z"
          fill="black"
          fill-opacity="0.4"
        />
        <path
          d="M108.967 44.4656L145.513 151.292C146.753 154.815 144.341 158.603 140.604 158.99L85.7475 152.455C84.7767 152.566 83.8373 152.905 83.0294 153.465L44.7449 185.954C41.2154 188.398 36.3817 186.347 35.7387 182.141L-0.328264 30.6006C-0.856817 27.1668 1.75395 24.03 5.22151 23.8919L103.306 40.6411C105.831 40.5333 108.118 42.0845 108.967 44.4656Z"
          fill="${mainColor}"
        />
        <path
          d="M6.93359 23.0526L46.3657 184.844"
          stroke="white"
          stroke-width="2"
        />
        <path
          d="M87 10.1361L137.114 158.415"
          stroke="white"
          stroke-width="2"
        />
        <path
          d="M126.243 95.2616C104.357 110.369 60.2952 132.984 26.7089 143.809L11.5364 80.9007L132.15 57.9559L151.348 105.87L124.936 91.3938L126.243 95.2616Z"
          fill="black"
          fill-opacity="0.4"
        />
      </g>
      <defs>
        <clipPath id="clip0_2487_140">
          <rect width="217" height="187" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `;
}
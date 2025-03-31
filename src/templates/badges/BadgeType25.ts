export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBadgeType25({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 545 468"
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
      <path
        d="M532.496 234.441C532.496 356.805 416.09 456 272.496 456C128.902 456 12.4961 356.805 12.4961 234.441C12.4961 112.078 128.902 12.8828 272.496 12.8828C416.09 12.8828 532.496 112.078 532.496 234.441Z"
        fill="${mainColor}"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M544.496 234.441C544.496 365.161 420.845 468 272.496 468C124.147 468 0.496094 365.161 0.496094 234.441C0.496094 103.722 124.147 0.882812 272.496 0.882812C420.845 0.882812 544.496 103.722 544.496 234.441ZM272.496 456C416.09 456 532.496 356.805 532.496 234.441C532.496 112.078 416.09 12.8828 272.496 12.8828C128.902 12.8828 12.4961 112.078 12.4961 234.441C12.4961 356.805 128.902 456 272.496 456Z"
        fill="${subColor}"
      />
      <path
        d="M520.496 234.44C520.496 350.335 409.463 444.286 272.496 444.286C135.529 444.286 24.4961 350.335 24.4961 234.44C24.4961 118.545 135.529 24.5934 272.496 24.5934C409.463 24.5934 520.496 118.545 520.496 234.44Z"
        fill="white"
      />
      <path
        d="M514.905 234.441C514.905 346.838 406.376 437.954 272.498 437.954C138.619 437.954 30.0898 346.838 30.0898 234.441C30.0898 122.044 138.619 30.9275 272.498 30.9275C406.376 30.9275 514.905 122.044 514.905 234.441Z"
        fill="${mainColor}"
      />
      <path
        d="M504.496 246.286C504.496 333.896 400.626 430 272.496 430C144.366 430 40.4961 333.896 40.4961 246.286C40.4961 158.676 73.8286 244.954 272.496 244.954C463.567 244.954 504.496 158.676 504.496 246.286Z"
        fill="url(#paint0_linear_2399_1190)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2399_1190"
          x1="143.42"
          y1="212.775"
          x2="353.645"
          y2="474.166"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.5" />
          <stop offset="1" stop-color="white" stop-opacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  `;
} 
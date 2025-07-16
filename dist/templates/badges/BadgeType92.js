export function createBadgeType92({ mainColor = "#96A6B4", subColor = "#96A6B4", extraColor1 = "#96A6B4", extraColor2 = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 437 506"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 379.173V126.827L218.173 0L437 126.827V379.173L218.173 506L0 379.173Z"
        fill="${mainColor}"
      />
      <path
        d="M17 136.865V369.135L218.136 486L420 369.135V136.865L218.136 20L17 136.865Z"
        fill="white"
      />
      <mask
        id="mask0_3488_50"
        maskUnits="userSpaceOnUse"
        x="33"
        y="34"
        width="371"
        height="438"
      >
        <path
          d="M404 361.908L404 144.092L218.835 34.4985L33 144.092L33 361.908L218.835 471.501L404 361.908Z"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_3488_50)">
        <rect
          width="312.321"
          height="36.4843"
          transform="matrix(0.860171 0.510006 -0.49006 0.871688 -22.4268 280.542)"
          fill="${mainColor}"
        />
        <rect
          width="312.321"
          height="36.4843"
          transform="matrix(-0.860171 -0.510006 0.49006 -0.871688 458.533 223.347)"
          fill="${mainColor}"
        />
        <path
          d="M172.449 424.194L317.601 412.285L243.858 471.63L172.449 424.194Z"
          fill="${mainColor}"
        />
        <path
          d="M268.764 77.4279L127.454 91.6019L201.197 32.2569L268.764 77.4279Z"
          fill="${mainColor}"
        />
      </g>
      <path
        opacity="0.5"
        d="M411 142.586V363.413L218.148 474.535L26 363.417V142.582L218.148 31.4639L411 142.586Z"
        stroke="${mainColor}"
        stroke-width="6"
      />
      <path
        d="M407.5 145.211V360.788L218.157 469.27L29.5 360.79V145.209L218.157 36.7295L407.5 145.211Z"
        stroke="white"
        stroke-width="3"
      />
    </svg>
  `;
}

import { ISvgProps } from "../../interface/index.js"; 

export function createBadgeType64({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
  extraColor1 = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 560 560"
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
      <rect
        x="280"
        y="0.000488281"
        width="395.98"
        height="395.98"
        rx="12"
        transform="rotate(45 280 0.000488281)"
        fill="${mainColor}"
      />
      <rect
        x="280"
        y="16.7168"
        width="372.339"
        height="372.339"
        rx="12"
        transform="rotate(45 280 16.7168)"
        fill="${extraColor1}"
      />
      <mask id="path-3-inside-1_2407_495" fill="${extraColor1}">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M97.7458 361L25.5147 288.769C20.8284 284.083 20.8284 276.485 25.5147 271.798L96.313 201H464.313L535.111 271.798C539.798 276.485 539.798 284.083 535.111 288.769L462.88 361H97.7458Z"
        />
      </mask>
      <path
        d="M97.7458 361L93.5032 365.243L95.2605 367H97.7458V361ZM25.5147 288.769L21.2721 293.012H21.2721L25.5147 288.769ZM25.5147 271.798L21.2721 267.556H21.2721L25.5147 271.798ZM96.313 201V195H93.8278L92.0704 196.757L96.313 201ZM464.313 201L468.556 196.757L466.798 195H464.313V201ZM535.111 271.798L539.354 267.556L535.111 271.798ZM535.111 288.769L539.354 293.012V293.012L535.111 288.769ZM462.88 361V367H465.366L467.123 365.243L462.88 361ZM101.988 356.757L29.7574 284.526L21.2721 293.012L93.5032 365.243L101.988 356.757ZM29.7574 284.526C27.4142 282.183 27.4142 278.384 29.7574 276.041L21.2721 267.556C14.2426 274.585 14.2427 285.982 21.2721 293.012L29.7574 284.526ZM29.7574 276.041L100.556 205.243L92.0704 196.757L21.2721 267.556L29.7574 276.041ZM96.313 207H464.313V195H96.313V207ZM460.07 205.243L530.869 276.041L539.354 267.556L468.556 196.757L460.07 205.243ZM530.869 276.041C533.212 278.384 533.212 282.183 530.869 284.526L539.354 293.012C546.383 285.982 546.383 274.585 539.354 267.556L530.869 276.041ZM530.869 284.526L458.638 356.757L467.123 365.243L539.354 293.012L530.869 284.526ZM462.88 355H97.7458V367H462.88V355Z"
        fill="${mainColor}"
        mask="url(#path-3-inside-1_2407_495)"
      />
      <mask
        id="mask0_2407_495"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="98"
        y="361"
        width="364"
        height="177"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M461.134 361L288.053 534.082C283.366 538.768 275.768 538.768 271.082 534.082L98 361H461.134Z"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_2407_495)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M149.292 442.815L149.292 442.826L174.668 442.826L174.668 352.742L149.292 352.742L149.292 352.753C148.962 352.746 148.632 352.742 148.3 352.742C123.424 352.742 103.258 372.908 103.258 397.784C103.258 422.66 123.424 442.826 148.3 442.826C148.632 442.826 148.962 442.822 149.292 442.815Z"
          fill="${subColor}"
        />
        <rect
          x="173.617"
          y="442.742"
          width="90"
          height="45"
          transform="rotate(-90 173.617 442.742)"
          fill="#002333"
        />
        <path
          d="M150.617 397.742L195.705 352.742L223.617 352.742L223.617 442.742L195.705 442.742L150.617 397.742Z"
          fill="${extraColor1}"
        />
        <path
          d="M178.617 403.242L223.617 357.742L223.617 448.742L178.617 403.242Z"
          fill="#002333"
        />
        <rect
          x="464.617"
          y="496.742"
          width="114"
          height="44"
          transform="rotate(-180 464.617 496.742)"
          fill="${subColor}"
        />
        <rect
          x="358.617"
          y="448.742"
          width="101"
          height="91"
          transform="rotate(-180 358.617 448.742)"
          fill="${subColor}"
        />
        <path
          d="M464.617 473.742L350.617 473.742L350.617 394.742L464.617 394.742L464.617 473.742Z"
          fill="#002333"
        />
        <path
          d="M407.617 452.742L350.617 394.066L350.617 357.742L464.617 357.742L464.617 394.066L407.617 452.742Z"
          fill="${extraColor1}"
        />
        <path
          d="M407.617 416.742L350.617 357.742L464.617 357.742L407.617 416.742Z"
          fill="${mainColor}"
        />
        <path
          d="M406.617 553.242L464.617 496.742L464.617 609.742L406.617 553.242Z"
          fill="#002333"
        />
        <path
          d="M398.617 545.742L380.617 527.742L416.617 527.742L398.617 545.742Z"
          fill="#002333"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M309.566 456.149C309.566 478.222 327.46 496.115 349.533 496.115C350.091 496.115 350.647 496.104 351.199 496.081L351.199 416.216C350.647 416.193 350.091 416.182 349.533 416.182C327.46 416.182 309.566 434.075 309.566 456.149Z"
          fill="${mainColor}"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M257.323 448.545L257.323 448.545L344.883 359.087L257.323 359.087L257.323 448.545Z"
          fill="${extraColor1}"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M257.324 448.544L155.809 359.087L257.324 359.087L257.324 448.544Z"
          fill="${mainColor}"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M257.327 377.159C257.327 377.159 257.327 377.159 257.327 377.159C267.689 377.159 276.09 385.655 276.09 396.135C276.09 406.615 267.689 415.111 257.327 415.111C257.327 415.111 257.327 415.111 257.327 415.111L257.327 377.159Z"
          fill="${mainColor}"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M257.326 415.111C257.326 415.111 257.325 415.111 257.325 415.111C246.963 415.111 238.562 406.615 238.562 396.135C238.562 385.655 246.963 377.159 257.325 377.159C257.325 377.159 257.326 377.159 257.326 377.159L257.326 415.111Z"
          fill="${extraColor1}"
        />
        <path
          d="M350.617 514.742L472.617 637.742"
          stroke="${mainColor}"
          stroke-width="2"
        />
        <path
          d="M353.617 534.742L476.617 657.742"
          stroke="${mainColor}"
          stroke-width="2"
        />
        <path
          d="M279.832 500.775C279.832 499.185 281.134 497.883 282.725 497.883C284.316 497.883 285.617 499.185 285.617 500.775C285.617 502.366 284.316 503.668 282.725 503.668C281.134 503.668 279.832 502.366 279.832 500.775Z"
          fill="${subColor}"
        />
        <path
          d="M253.223 500.775C253.223 499.185 254.524 497.883 256.115 497.883C257.706 497.883 259.008 499.185 259.008 500.775C259.008 502.366 257.706 503.668 256.115 503.668C254.524 503.668 253.223 502.366 253.223 500.775Z"
          fill="${subColor}"
        />
        <path
          d="M226.609 500.775C226.609 499.185 227.911 497.883 229.502 497.883C231.093 497.883 232.395 499.185 232.395 500.775C232.395 502.366 231.093 503.668 229.502 503.668C227.911 503.668 226.609 502.366 226.609 500.775Z"
          fill="${subColor}"
        />
        <path
          d="M199.996 500.775C199.996 499.185 201.298 497.883 202.889 497.883C204.48 497.883 205.781 499.185 205.781 500.775C205.781 502.366 204.48 503.668 202.889 503.668C201.298 503.668 199.996 502.366 199.996 500.775Z"
          fill="${subColor}"
        />
        <path
          d="M279.832 477.635C279.832 476.044 281.134 474.742 282.725 474.742C284.316 474.742 285.617 476.044 285.617 477.635C285.617 479.226 284.316 480.527 282.725 480.527C281.134 480.527 279.832 479.226 279.832 477.635Z"
          fill="${subColor}"
        />
        <path
          d="M253.223 477.635C253.223 476.044 254.524 474.742 256.115 474.742C257.706 474.742 259.008 476.044 259.008 477.635C259.008 479.226 257.706 480.527 256.115 480.527C254.524 480.527 253.223 479.226 253.223 477.635Z"
          fill="${subColor}"
        />
        <path
          d="M226.609 477.635C226.609 476.044 227.911 474.742 229.502 474.742C231.093 474.742 232.395 476.044 232.395 477.635C232.395 479.226 231.093 480.527 229.502 480.527C227.911 480.527 226.609 479.226 226.609 477.635Z"
          fill="${subColor}"
        />
        <path
          d="M201.156 477.635C201.156 476.044 202.458 474.742 204.049 474.742C205.64 474.742 206.941 476.044 206.941 477.635C206.941 479.226 205.64 480.527 204.049 480.527C202.458 480.527 201.156 479.226 201.156 477.635Z"
          fill="${subColor}"
        />
      </g>
      <rect
        x="280"
        y="22.3737"
        width="364.339"
        height="364.339"
        rx="8"
        transform="rotate(45 280 22.3737)"
        stroke="black"
        stroke-width="8"
      />
    </svg>
  `;
} 
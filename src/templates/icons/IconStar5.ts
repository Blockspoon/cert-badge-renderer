import { ISvgProps } from "../../interface"; 

export function createIconStar5({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId3 = `paint3_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId4 = `paint4_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 141 43"
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
        d="M51.5872 28.9152L65.2015 28.9152L69.4225 42.1133L73.6435 28.9152L87.2578 28.9152L76.2594 20.7704L80.421 7.63172L69.4225 15.7765L58.4241 7.63172L62.6451 20.8298L51.5872 28.9152Z"
        fill="url(#${paintId0})"
      />
      <path
        d="M23.1901 21.2579L34.0815 21.2579L37.4583 31.8164L40.8351 21.2579L51.7266 21.2579L42.9278 14.7421L46.2571 4.23113L37.4583 10.747L28.6596 4.23113L32.0364 14.7896L23.1901 21.2579Z"
        fill="url(#${paintId1})"
      />
      <path
        d="M0.124999 13.6006L8.29356 13.6006L10.8262 21.5195L13.3588 13.6006L21.5273 13.6006L14.9283 8.71373L17.4252 0.830536L10.8262 5.7174L4.22712 0.830534L6.75973 8.7494L0.124999 13.6006Z"
        fill="url(#${paintId2})"
      />
      <path
        d="M119.598 13.6006L127.766 13.6006L130.299 21.5195L132.831 13.6006L141 13.6006L134.401 8.71373L136.898 0.830536L130.299 5.7174L123.7 0.830534L126.232 8.7494L119.598 13.6006Z"
        fill="url(#${paintId3})"
      />
      <path
        d="M87.8737 22.0187L98.7651 22.0187L102.142 32.5771L105.519 22.0187L116.41 22.0187L107.611 15.5028L110.941 4.9919L102.142 11.5077L93.3432 4.9919L96.72 15.5504L87.8737 22.0187Z"
        fill="url(#${paintId4})"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="69.4225"
          y1="42.1133"
          x2="69.4225"
          y2="7.63172"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E7D081" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id="${paintId1}"
          x1="37.4583"
          y1="31.8164"
          x2="37.4583"
          y2="4.23113"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id="${paintId2}"
          x1="10.8262"
          y1="21.5195"
          x2="10.8262"
          y2="0.830535"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id="${paintId3}"
          x1="130.299"
          y1="21.5195"
          x2="130.299"
          y2="0.830535"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id="${paintId4}"
          x1="102.142"
          y1="32.5771"
          x2="102.142"
          y2="4.9919"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}
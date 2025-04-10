import { ISvgProps } from "../../interface"; 

export function createRibbonType4({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId3 = `paint3_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 564 173"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        width: 100%;
        height: 100%;
        object-fit: contain;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <path d="M67.3261 0H496.657L504 22L60 21.5L67.3261 0Z" fill="white" />
      <path
        opacity="0.5"
        d="M60 127H504L493.5 154H69.5L60 127Z"
        fill="url(#${paintId0})"
      />
      <path
        d="M44.7492 40.1859L4.0042 51.2967C0.615478 52.2159 -1.02268 56.0862 0.679707 59.1664L26.6974 106.626C27.131 107.432 27.3719 108.335 27.3719 109.254V167.551C27.3719 171.566 31.5476 174.195 35.1451 172.453L104.927 138.814C107.866 137.395 108.894 133.718 107.143 130.976L50.7397 42.508C49.4709 40.5084 47.0458 39.5731 44.7492 40.1859Z"
        fill="${mainColor}"
      />
      <path
        d="M44.7492 40.1859L4.0042 51.2967C0.615478 52.2159 -1.02268 56.0862 0.679707 59.1664L26.6974 106.626C27.131 107.432 27.3719 108.335 27.3719 109.254V167.551C27.3719 171.566 31.5476 174.195 35.1451 172.453L104.927 138.814C107.866 137.395 108.894 133.718 107.143 130.976L50.7397 42.508C49.4709 40.5084 47.0458 39.5731 44.7492 40.1859Z"
        fill="black"
        fill-opacity="0.2"
      />
      <path
        opacity="0.3"
        d="M32.0089 43.1746L43.5092 40L78.5098 153.5H43.0095C33.8095 153.5 31.8428 146.5 32.0095 143L32.0089 43.1746Z"
        fill="url(#${paintId1})"
      />
      <path
        d="M519.251 40.1859L559.996 51.2967C563.385 52.2159 565.023 56.0862 563.32 59.1664L537.303 106.626C536.869 107.432 536.628 108.335 536.628 109.254V167.551C536.628 171.566 532.452 174.195 528.855 172.453L459.073 138.814C456.134 137.395 455.106 133.718 456.857 130.976L513.26 42.508C514.529 40.5084 516.954 39.5731 519.251 40.1859Z"
        fill="${mainColor}"
      />
      <path
        d="M519.251 40.1859L559.996 51.2967C563.385 52.2159 565.023 56.0862 563.32 59.1664L537.303 106.626C536.869 107.432 536.628 108.335 536.628 109.254V167.551C536.628 171.566 532.452 174.195 528.855 172.453L459.073 138.814C456.134 137.395 455.106 133.718 456.857 130.976L513.26 42.508C514.529 40.5084 516.954 39.5731 519.251 40.1859Z"
        fill="black"
        fill-opacity="0.2"
      />
      <path
        opacity="0.3"
        d="M532.001 43.6746L520.501 40.5L485.5 154H521C530.2 154 532.167 147 532 143.5L532.001 43.6746Z"
        fill="url(#${paintId2})"
      />
      <path
        d="M509.206 5H53.7936C47.2802 5 42 10.3325 42 16.9105V129.089C42 135.667 47.2802 141 53.7936 141H509.206C515.72 141 521 135.667 521 129.089V16.9105C521 10.3325 515.72 5 509.206 5Z"
        fill="url(#${paintId3})"
      />
      <rect
        x="42"
        y="18.5039"
        width="479"
        height="108.992"
        fill="white"
        fill-opacity="0.3"
      />
      <path
        d="M42 17L521 17"
        stroke="white"
        stroke-opacity="0.6"
        stroke-width="3"
      />
      <path
        d="M42 129L521 129"
        stroke="white"
        stroke-opacity="0.6"
        stroke-width="3"
      />
      <defs>
        <linearGradient
          id="${paintId0}"
          x1="282"
          y1="138"
          x2="282"
          y2="154"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="${paintId1}"
          x1="76.5098"
          y1="81"
          x2="23.5098"
          y2="107.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="${paintId2}"
          x1="487.5"
          y1="81.5"
          x2="540.5"
          y2="108"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="${paintId3}"
          x1="42"
          y1="16"
          x2="531"
          y2="141"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
} 
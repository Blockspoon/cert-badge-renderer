"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRibbonType13 = createRibbonType13;
function createRibbonType13({ mainColor = "#96A6B4", subColor = "#96A6B4", extraColor1 = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 528 197"
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
        d="M524.816 22.1229L504.499 1.17924L504.5 17.6792L524.816 22.1229Z"
        fill="${extraColor1}"
      />
      <path
        opacity="0.4"
        d="M524.817 22.1228L504.502 1.17919L504.5 17.6794L524.817 22.1228Z"
        fill="black"
      />
      <path
        d="M5.0003 22.1229L25.317 1.17924L25.3164 17.6792L5.0003 22.1229Z"
        fill="${extraColor1}"
      />
      <path
        opacity="0.4"
        d="M4.99948 22.1228L25.3143 1.17919L25.3164 17.6794L4.99948 22.1228Z"
        fill="black"
      />
      <path
        d="M501.5 188.179H26.5C23 179.679 22.9999 171.679 22.8105 166.179H505C505 174.679 503.5 184.679 501.5 188.179Z"
        fill="black"
        fill-opacity="0.4"
      />
      <rect
        y="17.1793"
        width="528"
        height="154"
        rx="14"
        fill="url(#paint0_linear_2481_213)"
      />
      <rect
        y="29.8746"
        width="528"
        height="128.608"
        fill="white"
        fill-opacity="0.3"
      />
      <path d="M0 28.8864L528 28.8864" stroke="white" stroke-width="3" />
      <path d="M0 159.472L528 159.472" stroke="white" stroke-width="3" />
      <defs>
        <linearGradient
          id="paint0_linear_2481_213"
          x1="-5.75303e-07"
          y1="20.6793"
          x2="528"
          y2="165.179"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

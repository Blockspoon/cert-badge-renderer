"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewCertificateType62 = createNewCertificateType62;
function createNewCertificateType62({ mainColor = "#96A6B4", subColor = "#96A6B4", extraColor1 = "#96A6B4", extraColor2 = "#96A6B4", }) {
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 814 1152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="810" height="1152" fill="white" />
      <path d="M429 0H810V389L429 0Z" fill="${mainColor}" />
      <path
        opacity="0.2"
        d="M429 0H810V389L429 0Z"
        fill="url(#paint0_linear_3482_9691)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3482_9691"
          x1="641.5"
          y1="124"
          x2="594.5"
          y2="171"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#010101" stop-opacity="0" />
          <stop offset="1" stop-color="#010101" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

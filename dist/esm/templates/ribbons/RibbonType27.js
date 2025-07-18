"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRibbonType27 = createRibbonType27;
function createRibbonType27({ mainColor = "#96A6B4", subColor = "#96A6B4", extraColor1 = "#96A6B4", }) {
    const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 526 126"
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
        d="M13.7383 125.824C1.82189 115.651 -1.7368 111.495 0.746487 101.342C9.71646 93.4275 14.9489 91.4801 33.2383 92.3237L13.7383 125.824Z"
        fill="${mainColor}"
      />
      <path
        d="M13.7383 125.824C1.82189 115.651 -1.7368 111.495 0.746487 101.342C9.71646 93.4275 14.9489 91.4801 33.2383 92.3237L13.7383 125.824Z"
        fill="black"
        fill-opacity="0.4"
      />
      <path
        d="M511.255 126.005C523.171 115.832 527.222 111.476 524.738 101.324C515.768 93.4087 510.044 91.6616 491.755 92.5052L511.255 126.005Z"
        fill="${mainColor}"
      />
      <path
        d="M511.255 126.005C523.171 115.832 527.222 111.476 524.738 101.324C515.768 93.4087 510.044 91.6616 491.755 92.5052L511.255 126.005Z"
        fill="black"
        fill-opacity="0.4"
      />
      <path
        d="M500.288 106.349H25.0273L34.2383 90.3219C213.163 79.4565 311.807 79.0329 490.738 90.322L500.288 106.349Z"
        fill="url(#paint0_linear_2490_282)"
      />
      <path
        d="M438.506 1.90735e-06H86.9707L78.3242 14.8589L447.313 14.8572L438.506 1.90735e-06Z"
        fill="url(#paint1_linear_2490_282)"
      />
      <path
        d="M494.267 94.5083C497.126 94.6928 516.252 96.0864 524.738 101.324L521.226 95.8701C521.226 95.8701 521.233 95.8701 521.239 95.8701C516.686 88.8001 512.132 81.7364 507.579 74.6664L507.546 74.6155C498.303 60.2782 489.067 45.9345 479.824 31.5972C473.796 22.2426 463.674 16.1844 452.452 15.249C394.893 10.4317 332.606 7.42803 266.153 7.32621C197.094 7.22439 132.505 10.2662 73.0119 15.2426C61.8028 16.178 51.6869 22.2362 45.6651 31.5908C36.4223 45.9345 27.1795 60.2782 17.9367 74.6218L6.99932 91.6001C6.08086 93.0255 5.16241 94.4446 4.25041 95.8701L0.738281 101.324C9.21785 96.0928 28.3114 94.6928 31.2026 94.5083C104.712 90.9955 181.532 88.9973 261.432 88.9782C342.275 88.9591 419.969 90.9573 494.274 94.5083H494.267Z"
        fill="url(#${paintId2})"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2490_282"
          x1="225.334"
          y1="91.49"
          x2="225.334"
          y2="106.347"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0.4" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2490_282"
          x1="249.43"
          y1="28.5673"
          x2="249.43"
          y2="0.00165832"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0.4" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="${paintId2}"
          x1="42.3591"
          y1="35.9098"
          x2="517.596"
          y2="108.977"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="0.673474" stop-color="${subColor}" />
          <stop offset="1" stop-color="${mainColor}" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

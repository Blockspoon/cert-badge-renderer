"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBadgeType86 = createBadgeType86;
function createBadgeType86({ mainColor = "#96A6B4", subColor = "#96A6B4", extraColor1 = "#96A6B4", extraColor2 = "#96A6B4", }) {
    return `
     <svg
        width="100%"
        height="100%"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M68 433.654V166.346L299.154 32L531 166.346V433.654L299.154 568L68 433.654Z"
          fill="${mainColor}"
        />
        <path
          d="M86 176.887V423.113L299.114 547L513 423.113V176.887L299.114 53L86 176.887Z"
          fill="white"
        />
        <path
          d="M421.453 463.339L319.105 522.429L341.116 442.373L421.453 463.339Z"
          fill="${mainColor}"
          stroke="${mainColor}"
        />
        <path
          d="M471.623 463.915L299.564 561.032L297.044 553.472L332.066 426.708L471.623 463.915Z"
          stroke="${mainColor}"
          stroke-width="2"
        />
        <path
          d="M288.216 560.135L326.667 417.347L355.555 425.087"
          stroke="${mainColor}"
          stroke-width="2"
        />
        <path
          d="M148.462 152.919L233.898 103.593L215.525 170.421L148.462 152.919Z"
          fill="${mainColor}"
          stroke="${mainColor}"
        />
        <path
          d="M106.628 152.41L250.315 71.3066L252.349 77.4108L223.053 183.451L106.628 152.41Z"
          stroke="${mainColor}"
          stroke-width="2"
        />
        <path
          d="M259.917 71.8223L227.691 191.494L203.479 185.007"
          stroke="${mainColor}"
          stroke-width="2"
        />
        <path
          d="M502 184.024V415.975L299.132 532.691L97 415.977V184.022L299.132 67.3076L502 184.024Z"
          stroke="${subColor}"
          stroke-width="4"
        />
        <path
          d="M109 190.23V409.77L204.078 465M490 409.77V190.23L394.578 135"
          stroke="${subColor}"
          stroke-width="4"
        />
        
        <defs>
          <pattern
            id="pattern0_3305_146"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use transform="translate(-0.131198 -0.126971) scale(0.00353698)" />
          </pattern>
          <image
            id="image0_3305_146"
            width="360"
            height="360"
            preserveAspectRatio="none"
          />
        </defs>
      </svg>
  `;
}

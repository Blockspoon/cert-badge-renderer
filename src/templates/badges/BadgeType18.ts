import { ISvgProps } from "../../interface"; 

export function createBadgeType18({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 460 462"
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
        d="M410.277 0C437.661 0 460 20.0121 460 44.5431V255.854C460 369.471 356.71 462 229.88 462C103.29 462 0 369.686 0 255.854V44.5431C0 20.0121 22.3394 0 49.7232 0H410.277Z"
        fill="${mainColor}"
      />
      <path
        d="M398.52 13C424.118 13 445 31.8426 445 54.9399V253.901C445 360.878 348.447 448 229.888 448C111.554 448 15 361.081 15 253.901V54.9399C15 31.8426 35.8825 13 61.4804 13H398.52Z"
        fill="white"
      />
      <path
        d="M229.888 448.099C348.447 448.099 445 360.977 445 254H15C15 361.18 111.554 448.099 229.888 448.099Z"
        fill="${mainColor}"
      />
      <path
        d="M229.916 375C318.697 375 391 307.223 391 224H69C69 307.381 141.303 375 229.916 375Z"
        fill="white"
      />
      <path
        d="M389.114 27C412.371 27 431 44.1338 431 64.7224V253.164C431 353.197 340.923 435 229.894 435C119.077 435 29 353.389 29 253.164V64.7224C29 44.1338 47.6293 27 70.8862 27H389.114Z"
        stroke="${mainColor}"
        stroke-width="4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.0021 254C27.501 355.128 118.471 437 229.894 437C341.527 437 432.498 354.938 432.998 254H445C445 360.977 348.447 448.099 229.888 448.099C111.554 448.099 15 361.18 15 254H27.0021Z"
        fill="white"
      />
    </svg>
  `;
} 
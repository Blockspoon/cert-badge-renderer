import { ISvgProps } from "../../interface/index.js"; 

export function createBadgeType47({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `<svg width="100%" height="100%" viewBox="0 0 463 536" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 138.408V397.592L231.094 528L456 397.592V138.408L231.094 8L7 138.408Z" fill="${subColor}" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 134.346V401.654L231.154 536L463 401.654V134.346L231.154 0L0 134.346ZM22 388.621V147.379L231.121 26L441 147.379V388.621L231.121 510L22 388.621Z" fill="${mainColor}" />
    <path d="M231.144 494.53L36 380.915V155.085L231.144 41.4698L427 155.088V380.912L231.144 494.53Z" stroke="${mainColor}" stroke-width="6" />
    <path d="M231.144 468.53L36 354.915V129.085L231.144 15.4698L427 129.088V354.912L231.144 468.53Z" stroke="${mainColor}" stroke-width="6" />
    <path d="M232 467.5V519.5" stroke="${mainColor}" stroke-width="6" />
  </svg>`;
} 
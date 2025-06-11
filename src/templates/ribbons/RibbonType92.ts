import { ISvgProps } from "../../interface"; 

export function createRibbonType92({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 488 180"
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
        d="M0 0L276 20L552 0L532 132.5L552 265L276 245L0 265L20 132.5L0 0Z"
        fill="${mainColor}"
      />
      <path
        d="M519.821 132.192L519.773 132.5L519.821 132.808L538.636 253.815L276.15 234.006L276 233.994L275.85 234.006L13.3633 253.815L32.1787 132.808L32.2266 132.5L32.1787 132.192L13.3633 11.1836L275.85 30.9941L276 31.0059L276.15 30.9941L538.636 11.1836L519.821 132.192Z"
        stroke="white"
        strokeWidth="4"
      />
      <path
        d="M455 7L516.67 2.5L516 262L446 257L455 7Z"
        fill="url(#paint0_linear_3488_51)"
      />
      <path
        d="M96.6699 7L35 2.5L35.6699 262L105.67 257L96.6699 7Z"
        fill="url(#paint1_linear_3488_51)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3488_51"
          x1="516"
          y1="132.5"
          x2="455"
          y2="132.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3488_51"
          x1="35.6699"
          y1="132.5"
          x2="96.6699"
          y2="132.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  `;
}
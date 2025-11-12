import { ISvgProps } from "../../interface/index.js";

export function createRibbonType110_1({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
  extraColor1 = "#96A6B4",
  extraColor2 = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 584 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        zIndex: 1,
        mixBlendMode: "normal",
        pointerEvents: "none",
        display: "block",
      }}
    >
      <path d="M0 0H63V93H0L27 46.5L0 0Z" fill="${mainColor}" />
      <path d="M584 0H521V93H584L557 46.5L584 0Z" fill="${mainColor}" />
      <path d="M517 3L547 19.8511V25H517V3Z" fill="#281700" />
      <path d="M67 3L37 19.8511V25H67V3Z" fill="#281700" />
    </svg>
  `;
}

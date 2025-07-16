import { ISvgProps } from "../../interface/index.js"; 


export function createNewEmptyPortraitCertificate({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
  extraColor1 = "#96A6B4",
  extraColor2 = "#96A6B4",
}: ISvgProps): string {

  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId3 = `paint3_linear_${Math.random().toString(36).substr(2, 9)}`;


  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 811 1152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    </svg>
  `;
} 
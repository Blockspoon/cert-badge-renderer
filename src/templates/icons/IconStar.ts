import { ISvgProps } from "../../interface"; 

export function createIconStar1({
  mainColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <svg
      width="84%"
      height="84%"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        width: 84%;
        height: 84%;
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <path
        d="M10.8909 4.39712C11.2718 3.36763 12.728 3.36762 13.1089 4.39712L15.005 9.52126C15.1248 9.84493 15.38 10.1001 15.7036 10.2199L20.8278 12.116C21.8573 12.4969 21.8573 13.9531 20.8278 14.334L15.7036 16.2301C15.38 16.3499 15.1248 16.6051 15.005 16.9287L13.1089 22.0529C12.728 23.0824 11.2719 23.0824 10.8909 22.0529L8.9948 16.9287C8.87503 16.6051 8.61984 16.3499 8.29617 16.2301L3.17203 14.334C2.14253 13.9531 2.14253 12.4969 3.17203 12.116L8.29616 10.2199C8.61984 10.1001 8.87503 9.84493 8.9948 9.52126L10.8909 4.39712Z"
        stroke="${mainColor}"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </svg>
  `;
}
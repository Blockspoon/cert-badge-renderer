export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createRibbonWing1({ mainColor = "#96A6B4", subColor = "#96A6B4" }: ISvgProps): HTMLDivElement {
  const container = document.createElement('div');
  container.style.cssText = `
    width: 100%;
    height: 100%;
    isolation: isolate;
    display: flex;
    align-items: center;
    justify-content: center;
    will-change: transform, contents;
    transform: translateZ(0);
    backface-visibility: hidden;
  `;

  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  
  const svgContent = `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 552 174"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style="
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
        mix-blend-mode: normal;
        pointer-events: none;
        display: block;
      "
    >
      <path
        d="M44.7492 40.1859L4.0042 51.2967C0.615478 52.2159 -1.02268 56.0862 0.679707 59.1664L26.6974 106.626C27.131 107.432 27.3719 108.335 27.3719 109.254V167.551C27.3719 171.566 31.5476 174.195 35.1451 172.453L104.927 138.814C107.866 137.395 108.894 133.718 107.143 130.976L50.7397 42.508C49.4709 40.5084 47.0458 39.5731 44.7492 40.1859Z"
        fill="${mainColor}"
      />
      <path
        d="M44.7492 40.1859L4.0042 51.2967C0.615478 52.2159 -1.02268 56.0862 0.679707 59.1664L26.6974 106.626C27.131 107.432 27.3719 108.335 27.3719 109.254V167.551C27.3719 171.566 31.5476 174.195 35.1451 172.453L104.927 138.814C107.866 137.395 108.894 133.718 107.143 130.976L50.7397 42.508C49.4709 40.5084 47.0458 39.5731 44.7492 40.1859Z"
        fill="black"
        fill-opacity="0.2"
      />
      <path
        opacity="0.3"
        d="M32.0089 43.1746L43.5092 40L78.5098 153.5H43.0095C33.8095 153.5 31.8428 146.5 32.0095 143L32.0089 43.1746Z"
        fill="url(#paint1_linear_2364_274)"
      />
      <defs>
        <linearGradient
          id="paint1_linear_2364_274"
          x1="76.5098"
          y1="81"
          x2="23.5098"
          y2="107.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  `;

  container.innerHTML = svgContent;
  return container;
} 
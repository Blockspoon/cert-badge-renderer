"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRibbonWing2 = createRibbonWing2;
function createRibbonWing2({ mainColor = "#96A6B4", subColor = "#96A6B4" }) {
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
        d="M519.251 40.1859L559.996 51.2967C563.385 52.2159 565.023 56.0862 563.32 59.1664L537.303 106.626C536.869 107.432 536.628 108.335 536.628 109.254V167.551C536.628 171.566 532.452 174.195 528.855 172.453L459.073 138.814C456.134 137.395 455.106 133.718 456.857 130.976L513.26 42.508C514.529 40.5084 516.954 39.5731 519.251 40.1859Z"
        fill="${mainColor}"
      />
      <path
        d="M519.251 40.1859L559.996 51.2967C563.385 52.2159 565.023 56.0862 563.32 59.1664L537.303 106.626C536.869 107.432 536.628 108.335 536.628 109.254V167.551C536.628 171.566 532.452 174.195 528.855 172.453L459.073 138.814C456.134 137.395 455.106 133.718 456.857 130.976L513.26 42.508C514.529 40.5084 516.954 39.5731 519.251 40.1859Z"
        fill="black"
        fill-opacity="0.2"
      />
      <path
        opacity="0.3"
        d="M532.001 43.6746L520.501 40.5L485.5 154H521C530.2 154 532.167 147 532 143.5L532.001 43.6746Z"
        fill="url(#paint2_linear_2364_274)"
      />
      <defs>
        <linearGradient
          id="paint2_linear_2364_274"
          x1="487.5"
          y1="81.5"
          x2="540.5"
          y2="108"
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

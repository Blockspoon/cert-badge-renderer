"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRibbonType101_1 = createRibbonType101_1;
function createRibbonType101_1({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 575 145"
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
        d="M231.24 2.65332V79.683C163.624 79.683 96.0433 88.175 28.6749 105.124L38.1624 62.2036L0 31.8446C76.608 12.3838 153.924 2.65332 231.24 2.65332Z"
        fill="${mainColor}"
      />
      <path
        d="M231.24 2.65332V79.683C163.624 79.683 96.0433 88.175 28.6749 105.124L38.1624 62.2036L0 31.8446C76.608 12.3838 153.924 2.65332 231.24 2.65332Z"
        fill="black"
        fill-opacity="0.2"
      />
      <path
        d="M343.32 102.506V25.4407C410.936 25.4407 478.517 16.9487 545.886 0L536.398 42.9201L574.56 73.2791C497.988 92.7753 420.672 102.506 343.356 102.506H343.32Z"
        fill="${mainColor}"
      />
      <path
        d="M343.32 102.506V25.4407C410.936 25.4407 478.517 16.9487 545.886 0L536.398 42.9201L574.56 73.2791C497.988 92.7753 420.672 102.506 343.356 102.506H343.32Z"
        fill="black"
        fill-opacity="0.2"
      />
      <path
        d="M43.6492 48.8995L109.672 24.0957L142.843 100.842L43.6492 144.293V48.8995Z"
        fill="#14141E"
      />
      <path
        d="M530.946 48.9001L465.135 16.2412L405.591 93.8724L530.946 144.294V48.9001Z"
        fill="#14141E"
      />
    </svg>
  `;
}

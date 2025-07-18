"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRibbonType35 = createRibbonType35;
function createRibbonType35({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 464 196"
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
        d="M31.2383 170.25H433.999C429.782 178.33 425.13 187.478 423.548 194.25H41.5705C39.179 186.194 36.7269 180.216 31.2383 170.25Z"
        fill="url(#paint0_linear_2417_184)"
        fill-opacity="0.3"
      />
      <path
        d="M30.6641 24H433.425C429.207 15.92 424.556 6.7717 422.974 0H40.9963C38.6048 8.05581 36.1527 14.0344 30.6641 24Z"
        fill="url(#paint1_linear_2417_184)"
        fill-opacity="0.4"
      />
      <path
        d="M430.613 19H33.5002C32.5 20 29.5 24 29 31.3484V147.652C29 154.471 33.4644 160 38.9716 160H424.028C429.536 160 434 154.471 434 147.652V31.3484C434 23 433.613 24.5 430.613 19Z"
        fill="white"
      />
      <path
        d="M44.0062 195.521C25.7275 197.635 -1.04772 189.933 0.0316382 180.001C5.08497 169.25 15.3606 168.981 37.8473 171.69L44.0062 195.521Z"
        fill="${mainColor}"
      />
      <path
        d="M44.0062 195.521C25.7275 197.635 -1.04772 189.933 0.0316382 180.001C5.08497 169.25 15.3606 168.981 37.8473 171.69L44.0062 195.521Z"
        fill="black"
        fill-opacity="0.5"
      />
      <path
        d="M420.136 195.129C438.546 197.243 465.059 189.933 463.972 180.001C458.882 169.25 448.532 168.981 425.883 171.69L420.136 195.129Z"
        fill="${mainColor}"
      />
      <path
        d="M420.136 195.129C438.546 197.243 465.059 189.933 463.972 180.001C458.882 169.25 448.532 168.981 425.883 171.69L420.136 195.129Z"
        fill="black"
        fill-opacity="0.5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.0938 19C6.36176 19 0.09375 25.268 0.09375 33V161.526C0.09375 161.567 0.0939267 161.608 0.0942793 161.649V181.635C1.10738 180.404 5.60565 176.356 15.5366 175.526H448.547C458.478 176.356 462.977 180.404 463.99 181.635V162.053C463.996 161.878 463.999 161.702 463.999 161.526V33C463.999 25.268 457.731 19 449.999 19H14.0938Z"
        fill="url(#${paintId2})"
      />
      <path
        d="M0 35.8231C3.91225 30.9147 7.35496 29.8941 15.0699 30.0083H450.967C457.431 30.674 460.332 32.1727 464 37.8254V169.055C459.238 165.13 453.553 164.499 440.83 164.626H12.2439C6.53593 165.076 3.93553 166.429 0 170V35.8231Z"
        fill="white"
        fill-opacity="0.3"
      />
      <mask
        id="mask0_2417_184"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="19"
        width="464"
        height="157"
      >
        <path
          d="M0.09375 33C0.09375 25.268 6.36176 19 14.0938 19H449.999C457.731 19 463.999 25.268 463.999 33V175.526H0.09375V33Z"
          fill="url(#paint3_linear_2417_184)"
        />
      </mask>
      <g mask="url(#mask0_2417_184)">
        <path
          d="M-0.785157 36.3874C3.23171 31.4656 6.19353 30.2049 12.4439 30.0567L447.68 30.0567C456.093 29.9281 460.061 31.3378 464.878 38.3356"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M-1.38281 173.505C-0.802185 169.024 6.19306 164.32 12.4434 164.469L447.68 164.468C456.093 164.597 464.877 166.339 464.877 172.334"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2417_184"
          x1="240.423"
          y1="167.738"
          x2="240.423"
          y2="194.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2417_184"
          x1="239.848"
          y1="30.9798"
          x2="239.848"
          y2="2.1313e-06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0.4" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="${paintId2}"
          x1="0.0937504"
          y1="36.795"
          x2="472.838"
          y2="91.4274"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="0.673474" stop-color="${subColor}" />
          <stop offset="1" stop-color="${mainColor}" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2417_184"
          x1="5.80471"
          y1="26.3659"
          x2="467.211"
          y2="154.275"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF1B64" />
          <stop offset="1" stop-color="#FF91B2" />
        </linearGradient>
      </defs>
    </svg>
  `;
}

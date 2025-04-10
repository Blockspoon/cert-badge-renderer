"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewCertificateType28 = createNewCertificateType28;
function createNewCertificateType28({ mainColor = "#96A6B4", subColor = "#96A6B4", extraColor1 = "#96A6B4", extraColor2 = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId2 = `paint2_linear_${Math.random().toString(36).substr(2, 9)}`;
    const paintId3 = `paint3_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1153 814"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="1152"
          height="814"
          transform="translate(0.847656)"
          fill="white"
        />

        <path
          d="M1118.85 631L1118.63 631C1118.63 713.29 1051.92 780 969.628 780L1118.85 780L1118.85 631Z"
          fill="${subColor}"
        />
        <rect x="752.848" y="635" width="80" height="80" />

        <rect x="861.848" y="635" width="80" height="80" />

        <rect x="970.848" y="635" width="80" height="80" />

        <rect
          x="1118.85"
          y="35"
          width="60"
          height="60"
          transform="rotate(90 1118.85 35)"
          fill="url(#pattern0_1917_1512)"
        />

        <rect
          width="298.52"
          height="746"
          transform="matrix(1 0 0 -1 34.8477 780)"
          fill="${mainColor}"
        />
        <path
          d="M184.107 34.9004C101.674 34.9004 34.8477 101.7 34.8477 184.1H184.107V34.9004Z"
          fill="white"
        />
        <path
          d="M333.367 630.569H184.107V481.369C101.674 481.369 34.8477 548.169 34.8477 630.569C34.8477 712.97 101.674 779.769 184.107 779.769C266.541 779.769 333.367 712.97 333.367 630.569Z"
          fill="white"
        />
        <path
          d="M184.107 331.929V481.129H333.367C333.367 398.728 266.541 331.929 184.107 331.929Z"
          fill="#002333"
        />
        <path
          d="M184.107 331.929H34.8477V481.129L184.107 331.929Z"
          fill="#002333"
        />
        <path
          d="M34.8477 481.129H184.107V331.929C101.674 331.929 34.8477 398.728 34.8477 481.129Z"
          fill="white"
        />
        <path
          d="M333.367 630.8L333.147 630.8C333.147 713.2 266.419 780 184.107 780L333.367 780L333.367 630.8Z"
          fill="${subColor}"
        />
        <path
          d="M184.107 780L184.107 779.78C101.674 779.78 34.8476 713.079 34.8476 630.8L34.8476 780L184.107 780Z"
          fill="#002333"
        />
        <path
          d="M332.366 630.569C332.366 712.417 265.989 778.768 184.107 778.768C102.226 778.768 35.849 712.417 35.849 630.569C35.849 548.722 102.226 482.37 184.107 482.37C265.989 482.37 332.366 548.722 332.366 630.569Z"
          stroke="#002333"
          strokeWidth="2.00268"
          strokeMiterlimit="10"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M184.107 34.2203V34H333.367V34.0002L482.847 34.0002C400.413 34.0002 333.587 100.8 333.587 183.2H333.367V183.42C333.367 183.347 333.367 183.274 333.367 183.2H333.367V183.017C333.149 100.802 266.406 34.2203 184.107 34.2203Z"
          fill="${subColor}"
        />
        <path
          d="M184.107 332.62L184.107 332.4C101.674 332.4 34.8476 265.6 34.8476 183.2L34.8476 332.62L184.107 332.62Z"
          fill="white"
        />
        <path
          d="M332.366 183.42C332.366 265.267 265.989 331.618 184.107 331.618C102.226 331.618 35.849 265.267 35.849 183.42C35.849 101.572 102.226 35.2211 184.107 35.2211C265.989 35.2211 332.366 101.572 332.366 183.42Z"
          stroke="#002333"
          strokeWidth="2.00268"
          strokeMiterlimit="10"
        />
        <path
          d="M333.367 184.101C250.934 184.101 184.107 250.9 184.107 333.301H333.367V184.101Z"
          fill="${subColor}"
        />

        <path
          d="M894.447 195.6C894.447 177.927 908.774 163.6 926.447 163.6H1027.25V243.333H894.447V195.6Z"
          fill="white"
        />
        <mask
          id="mask0_1917_1512"
          maskUnits="userSpaceOnUse"
          x="893"
          y="243"
          width="136"
          height="54"
        ></mask>

        <defs>
          <pattern
            id="pattern0_1917_1512"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          ></pattern>
          <pattern
            id="pattern1_1917_1512"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use transform="translate(-0.131198 -0.126971) scale(0.00353698)" />
          </pattern>
          <image id="image0_1917_1512" width="357" height="357" />
          <image id="image1_1917_1512" width="360" height="360" />
        </defs>
      </svg>
  `;
}

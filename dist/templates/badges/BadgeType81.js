"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBadgeType81 = createBadgeType81;
function createBadgeType81({ mainColor = "#96A6B4", subColor = "#96A6B4", extraColor1 = "#96A6B4", extraColor2 = "#96A6B4", }) {
    return `
     <svg
        width="100%"
        height="100%"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3052_45161)">
          <rect
            x="32"
            y="32"
            width="536"
            height="536"
            fill="${extraColor2}"
          />
          <path
            d="M503 32V52H52V532H32V32H503Z"
            fill="${mainColor}"
          />
          <mask
            id="mask0_3052_45161"
            style="mask-type: alpha;"
            maskUnits="userSpaceOnUse"
            x="32"
            y="32"
            width="536"
            height="536"
          >
            <rect x="32" y="32" width="536" height="536" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_3052_45161)">
            <path
              d="M529.117 34.959V-167.553L482.045 -183.698L463.045 -234.283H119.214V-221H-135.162V-234.283H-478.097L-493.597 -179.131L-545.402 -165.131V35.4786L-533 36.0501V289.184H-545.402V485.553L-490 497L-476.967 557.569H-135.188V544H119.188V557.569H460.415L474.415 498.267L529.403 485.553V289.184H516.455V34.9849H529.091L529.117 34.959ZM502.857 262.631V459L448 471.714L434 531.016H92.6428H-108.591H-450.5L-463.533 470.447L-518.805 459V262.631V61.5376V60.966V-138.5L-467 -152.5L-451.5 -208.731H-108.565H92.6688H436.5L455.5 -157.145L502.571 -141V61.5376H502.857V262.631Z"
              fill="${mainColor}"
            />
            <path
              opacity="0.6"
              d="M568 568H-584V-246H568V568ZM-451 -209L-466.5 -152.5L-519 -138.5V459L-463.5 470L-451 530.5H434.5L448 471.5L502.5 459.5V-141L455 -158L436.5 -209H-451Z"
              fill="${mainColor}"
            />
            <rect
              x="454"
              y="479"
              width="14"
              height="14"
              rx="1"
              stroke="${subColor}"
              strokeWidth="2"
            />
            <path
              d="M32 530.382H462.978C467.036 530.382 470.314 527.104 470.314 523.046V503.354H494.974V524.659C494.974 527.156 497.003 529.185 499.501 529.185H501.504V527.182C501.504 524.685 499.474 522.656 496.977 522.656H475.672V497.995H495.364C499.422 497.995 502.7 494.718 502.7 490.66V32"
              stroke="${subColor}"
              strokeWidth="2.05506"
              strokeLinejoin="round"
            />
            <path
              d="M483.164 530.382V489.801C483.164 485.639 486.545 482.283 490.681 482.283H494.453V492.376"
              stroke="${subColor}"
              strokeWidth="2.05506"
              strokeLinejoin="round"
            />
            <path
              d="M502.726 511.08H462.145C457.983 511.08 454.627 514.462 454.627 518.598V522.37H464.721"
              stroke="${subColor}"
              strokeWidth="2.05506"
              strokeLinejoin="round"
            />
            <path
              d="M34.6689 -227.569H429.396L455 -157.653L527.986 -132.048V454.033L448 471.154L430.41 548.565L32 548.565"
              stroke="${subColor}"
              strokeWidth="2.05506"
              strokeLinejoin="round"
            />
            <path
              d="M503 57L548 57L548 266L503 266"
              stroke="${extraColor1}"
              strokeWidth="1.95255"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M60 60H494V168H60V60Z"
            fill="${mainColor}"
          />
          <path
            d="M87.2227 125.43L92.25 130.57L92.6699 131H494V133H92.6699L92.25 133.43L87.2227 138.57L85.8242 140L84.4258 138.57L79.3984 133.43L78 132L79.3984 130.57L84.4258 125.43L85.8242 124L87.2227 125.43ZM80.7969 132L85.8242 137.141L90.8516 132L85.8242 126.859L80.7969 132Z"
            fill="${subColor}"
          />
        </g>
        <defs>
          <clipPath id="clip0_3052_45161">
            <rect
              width="600"
              height="600"
              fill="${extraColor2}"
            />
          </clipPath>
        </defs>
      </svg>
  `;
}

import { ISvgProps } from "../../interface"; 

export function createNewCertificateType5({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  const paintId1 = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;

  return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 810 1152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="810" height="1152" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M753.45 1132L56.5501 1132C54.6882 1132 53.1204 1130.42 53.1204 1128.55C53.1204 1112 39.7939 1098.6 23.3317 1098.6C21.4699 1098.6 20 1097.02 20 1095.15L20.0001 56.8499C20.0001 54.9778 21.4699 53.4014 23.3317 53.4014C39.7939 53.4014 53.1205 40.0014 53.1205 23.4485C53.1205 21.5764 54.6883 20 56.5501 20L753.45 20C755.312 20 756.88 21.5765 756.88 23.4485C756.88 40.0014 770.206 53.4014 786.668 53.4014C788.53 53.4014 790 54.9779 790 56.8499L790 1095.15C790 1097.02 788.53 1098.6 786.668 1098.6C770.206 1098.6 756.88 1112 756.88 1128.55C756.88 1130.42 755.312 1132 753.45 1132Z"
        fill="url(#${paintId0})"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M786.863 56.4962C786.79 56.419 786.724 56.4014 786.668 56.4014C768.534 56.4014 753.88 41.6427 753.88 23.4485C753.88 23.3622 753.843 23.2454 753.736 23.1377C753.629 23.0301 753.52 23 753.45 23L56.5501 23C56.48 23 56.3713 23.03 56.2643 23.1377C56.1572 23.2454 56.1205 23.3622 56.1205 23.4485C56.1205 41.6427 41.4663 56.4014 23.3317 56.4014C23.2758 56.4014 23.2105 56.4189 23.1367 56.4961C23.0569 56.5797 23.0001 56.7045 23.0001 56.8499L23 1095.15C23 1095.3 23.0568 1095.42 23.1367 1095.5C23.2105 1095.58 23.2758 1095.6 23.3317 1095.6C41.4663 1095.6 56.1204 1110.36 56.1204 1128.55C56.1204 1128.64 56.1571 1128.75 56.2642 1128.86C56.3713 1128.97 56.4799 1129 56.5501 1129L753.45 1129C753.52 1129 753.629 1128.97 753.736 1128.86C753.843 1128.75 753.88 1128.64 753.88 1128.55C753.88 1110.36 768.534 1095.6 786.668 1095.6C786.724 1095.6 786.789 1095.58 786.863 1095.5C786.943 1095.42 787 1095.3 787 1095.15L787 56.8499C787 56.7045 786.943 56.5797 786.863 56.4962Z"
        fill="url(#${paintId1})"
      />
      <rect
        x="286"
        y="162.898"
        width="240"
        height="240"
        fill="url(#pattern0_1872_8)"
      />
      <rect
        x="27.3135"
        y="16"
        width="16"
        height="16"
        rx="4"
        transform="rotate(45 27.3135 16)"
        fill="${mainColor}"
      />
      <rect
        x="27.3135"
        y="1113"
        width="16"
        height="16"
        rx="4"
        transform="rotate(45 27.3135 1113)"
        fill="${subColor}"
      />
      <rect
        x="783"
        y="16"
        width="16"
        height="16"
        rx="4"
        transform="rotate(45 783 16)"
        fill="${mainColor}"
      />
      <rect
        x="783"
        y="1113"
        width="16"
        height="16"
        rx="4"
        transform="rotate(45 783 1113)"
        fill="${subColor}"
      />
      <rect
        x="713.151"
        y="72.5889"
        width="44.8481"
        height="44.822"
        fill="url(#pattern1_1872_8)"
      />
      <rect
        x="484"
        y="82.8721"
        width="80"
        height="24.2558"
        fill="url(#pattern2_1872_8)"
      />
      <rect
        x="592"
        y="55"
        width="80"
        height="80"
        fill="url(#pattern3_1872_8)"
      />
      <rect
        x="421.869"
        y="971.471"
        width="108.48"
        height="36.1602"
        fill="url(#pattern4_1872_8)"
      />
      <rect
        x="540.35"
        y="971.471"
        width="147.785"
        height="36.1602"
        fill="url(#pattern5_1872_8)"
      />
      <defs>
        <pattern
          id="pattern0_1872_8"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.00166667)" />
        </pattern>
        <pattern
          id="pattern1_1872_8"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="matrix(0.00485561 0 0 0.00485845 -0.0375646 -0.0388732)" />
        </pattern>
        <pattern
          id="pattern2_1872_8"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.00110254 0.00363636)" />
        </pattern>
        <pattern
          id="pattern3_1872_8"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.00260417)" />
        </pattern>
        <pattern
          id="pattern4_1872_8"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.0042735 0.0128205)" />
        </pattern>
        <pattern
          id="pattern5_1872_8"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.0035461 0.0144928)" />
        </pattern>
        <linearGradient
          id="${paintId0}"
          x1="405"
          y1="20"
          x2="405"
          y2="1132"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <linearGradient
          id="${paintId1}"
          x1="405"
          y1="17"
          x2="405"
          y2="1135"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="${mainColor}" />
          <stop offset="1" stop-color="${subColor}" />
        </linearGradient>
        <image id="image0_1872_8" width="600" height="600" />
        <image id="image1_1872_8" width="224" height="224" />
        <image id="image2_1872_8" width="907" height="275" />
        <image id="image3_1872_8" width="384" height="384" />
        <image id="image4_1872_8" width="234" height="78" />
        <image id="image5_1872_8" width="282" height="69" />
      </defs>
    </svg>
  `;
} 
export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBackgroundType26({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden; position: relative;">
      <svg width="100%" height="100%" viewBox="0 0 1152 814" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2628_304)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M84.0729 316.325H84.0842V290.949L-5.99992 290.949L-5.99992 316.325H-5.98929C-5.99642 316.655 -6 316.985 -6 317.317C-6 342.193 14.1659 362.359 39.0418 362.359C63.9177 362.359 84.0836 342.193 84.0836 317.317C84.0836 316.985 84.08 316.655 84.0729 316.325Z" fill="${subColor}"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1079.49 540.392L1079.48 540.392L1079.48 562.699L1158.67 562.699L1158.67 540.392L1158.66 540.392C1158.66 540.102 1158.67 539.811 1158.67 539.52C1158.67 517.652 1140.94 499.925 1119.07 499.925C1097.2 499.925 1079.48 517.652 1079.48 539.52C1079.48 539.811 1079.48 540.102 1079.49 540.392Z" fill="${subColor}"/>
          <rect x="84" y="292" width="90" height="45" transform="rotate(-180 84 292)" fill="#002333"/>
          <rect x="1079" y="562" width="80" height="40" fill="#002333"/>
          <path d="M39 315L-6 269.912L-6 242L84 242L84 269.912L39 315Z" fill="white"/>
          <path d="M1119 542L1159 581.529L1159 606L1079 606L1079 581.529L1119 542Z" fill="white"/>
          <path d="M44.5 287L-1.00001 242L90 242L44.5 287Z" fill="#002333"/>
          <path d="M1114.5 566L1154 606L1075 606L1114.5 566Z" fill="#002333"/>
          <rect x="138" y="1" width="114" height="44" transform="rotate(90 138 1)" fill="${subColor}"/>
          <rect x="1032" y="817" width="99" height="39" transform="rotate(-90 1032 817)" fill="${subColor}"/>
          <rect x="90" y="107" width="101" height="91" transform="rotate(90 90 107)" fill="${subColor}"/>
          <rect x="1075" y="724" width="88" height="79" transform="rotate(-90 1075 724)" fill="${subColor}"/>
          <rect x="95" y="1" width="114" height="59" transform="rotate(90 95 1)" fill="#002333"/>
          <rect x="1070" y="817" width="99" height="52" transform="rotate(-90 1070 817)" fill="#002333"/>
          <path d="M94 58L35.3235 115L-0.999997 115L-0.999992 0.999996L35.3235 0.999997L94 58Z" fill="white"/>
          <path d="M1071 767.5L1122.26 718L1154 718L1154 817L1122.26 817L1071 767.5Z" fill="white"/>
          <path d="M58 58L-1 115L-0.999996 0.999997L58 58Z" fill="${mainColor}"/>
          <path d="M1103 767.5L1154 718L1154 817L1103 767.5Z" fill="${mainColor}"/>
          <path d="M194.5 59L138 1L251 1.00001L194.5 59Z" fill="#002333"/>
          <path d="M982.5 767L1032 817L933 817L982.5 767Z" fill="#002333"/>
          <path d="M187 67L169 85L169 49L187 67Z" fill="#002333"/>
          <path d="M989 760L1005 744L1005 776L989 760Z" fill="#002333"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M97.4063 156.047C119.479 156.047 137.373 138.153 137.373 116.08C137.373 115.522 137.362 114.967 137.339 114.414L57.4735 114.414C57.4509 114.967 57.4395 115.522 57.4395 116.08C57.4395 138.153 75.3332 156.047 97.4063 156.047Z" fill="${mainColor}"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1067.77 681.288C1048.36 681.288 1032.63 697.018 1032.63 716.422C1032.63 716.913 1032.64 717.401 1032.66 717.887L1102.87 717.887C1102.89 717.401 1102.9 716.913 1102.9 716.422C1102.9 697.018 1087.17 681.288 1067.77 681.288Z" fill="${mainColor}"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M29.4482 600.07C29.4482 595.061 25.3873 591 20.3779 591C20.2513 591 20.1253 591.003 20 591.008L20 609.133C20.1253 609.138 20.2513 609.141 20.3779 609.141C25.3873 609.141 29.4482 605.08 29.4482 600.07Z" fill="${subColor}"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M89.8016 208.294L89.8018 208.294L0.343376 120.734L0.343375 208.294L89.8016 208.294Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M89.8008 208.293L0.343437 309.809L0.343438 208.293L89.8008 208.293Z" fill="${mainColor}"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4141 208.29C18.4141 208.29 18.4141 208.29 18.4141 208.29C18.4141 197.928 26.9099 189.527 37.3901 189.527C47.8703 189.527 56.3661 197.928 56.3661 208.29C56.3661 208.29 56.3661 208.29 56.3661 208.29L18.4141 208.29Z" fill="${mainColor}"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M56.3682 208.292C56.3682 208.292 56.3682 208.292 56.3682 208.292C56.3682 218.654 47.8723 227.055 37.3921 227.055C26.912 227.055 18.4161 218.654 18.4161 208.292C18.4161 208.292 18.4161 208.292 18.4161 208.292L56.3682 208.292Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1074.45 635.36L1074.45 635.36L1153.09 712.332L1153.09 635.36L1074.45 635.36Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1074.45 635.361L1153.09 546.121L1153.09 635.361L1074.45 635.361Z" fill="${mainColor}"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1137.21 635.365C1137.21 635.365 1137.21 635.365 1137.21 635.365C1137.21 644.475 1129.74 651.859 1120.52 651.859C1111.31 651.859 1103.84 644.475 1103.84 635.365C1103.84 635.365 1103.84 635.365 1103.84 635.365L1137.21 635.365Z" fill="${mainColor}"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1103.84 635.361C1103.84 635.361 1103.84 635.361 1103.84 635.361C1103.84 626.252 1111.31 618.867 1120.52 618.867C1129.74 618.867 1137.2 626.252 1137.2 635.361C1137.2 635.361 1137.2 635.361 1137.2 635.361L1103.84 635.361Z" fill="white"/>
          <path d="M304.214 28.7677L260.446 28.3165L303.763 -15.0002L304.214 28.7677Z" fill="${mainColor}"/>
          <path d="M951.656 727.629L990.131 728.025L952.052 766.104L951.656 727.629Z" fill="${mainColor}"/>
          <path d="M156 115L279 -7" stroke="${mainColor}" stroke-width="2"/>
          <path d="M1017 718L908 825" stroke="${mainColor}" stroke-width="2"/>
          <path d="M11.2462 832.051L11.9533 682.851" stroke="${mainColor}" stroke-width="2"/>
          <path d="M176 112L299 -11" stroke="${mainColor}" stroke-width="2"/>
          <path d="M986 731L878 839" stroke="${mainColor}" stroke-width="2"/>
          <path d="M22.5588 849.906V700" stroke="${mainColor}" stroke-width="2"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M96.8937 642.328L78 661.222L96.8937 680.115V642.328Z" fill="${mainColor}"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M96.8934 665.785L115.787 646.891L96.8934 627.998L96.8934 665.785Z" fill="#002333"/>
        </g>
        <defs>
          <clipPath id="clip0_2628_304">
            <rect width="1152" height="814" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  `;
}

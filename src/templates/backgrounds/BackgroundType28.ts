export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBackgroundType28({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden; position: relative;">
      <svg width="100%" height="100%" viewBox="0 0 1152 815" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="298.52" height="746" transform="matrix(1 0 0 -1 34 780.514)" fill="${mainColor}"/>
        <path d="M183.26 35.4141C100.826 35.4141 34 102.214 34 184.614H183.26V35.4141Z" fill="white"/>
        <path d="M332.52 631.083H183.26V481.883C100.826 481.883 34 548.682 34 631.083C34 713.483 100.826 780.283 183.26 780.283C265.693 780.283 332.52 713.483 332.52 631.083Z" fill="white"/>
        <path d="M183.26 332.441V481.641H332.52C332.52 399.241 265.693 332.441 183.26 332.441Z" fill="#002333"/>
        <path d="M183.26 332.441H34V481.641L183.26 332.441Z" fill="#002333"/>
        <path d="M34 481.641H183.26V332.441C100.826 332.441 34 399.241 34 481.641Z" fill="white"/>
        <path d="M332.52 631.312L332.299 631.312C332.299 713.713 265.572 780.512 183.26 780.512L332.52 780.512L332.52 631.312Z" fill="${subColor}"/>
        <path d="M183.26 780.514L183.26 780.294C100.826 780.294 33.9999 713.593 34 631.314L33.9999 780.514L183.26 780.514Z" fill="#002333"/>
        <path d="M331.518 631.083C331.518 712.93 265.141 779.281 183.26 779.281C101.379 779.281 35.0013 712.93 35.0013 631.083C35.0013 549.235 101.379 482.884 183.26 482.884C265.141 482.884 331.518 549.235 331.518 631.083Z" stroke="#002333" stroke-width="2.00268" stroke-miterlimit="10"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M183.26 34.734V34.5137H332.52V34.5139L481.999 34.5139C399.566 34.5139 332.739 101.313 332.739 183.714H332.52V183.934C332.52 183.861 332.52 183.787 332.519 183.714H332.519V183.531C332.301 101.316 265.559 34.734 183.26 34.734Z" fill="${subColor}"/>
        <path d="M183.26 333.133L183.26 332.913C100.826 332.913 33.9999 266.113 34 183.712L33.9999 333.133L183.26 333.133Z" fill="white"/>
        <path d="M331.518 183.934C331.518 265.782 265.141 332.133 183.26 332.133C101.379 332.133 35.0013 265.782 35.0013 183.934C35.0013 102.087 101.379 35.7357 183.26 35.7357C265.141 35.7357 331.518 102.087 331.518 183.934Z" stroke="#002333" stroke-width="2.00268" stroke-miterlimit="10"/>
        <path d="M332.52 184.613C250.086 184.613 183.26 251.413 183.26 333.813H332.52V184.613Z" fill="${subColor}"/>
      </svg>
    </div>
  `;
} 
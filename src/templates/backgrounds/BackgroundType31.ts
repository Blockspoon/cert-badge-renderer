export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBackgroundType31({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <div style="width: 100%; height: 100%; isolation: isolate; display: flex; align-items: center; justify-content: center; will-change: transform, contents; transform: translateZ(0); backface-visibility: hidden; position: relative;">
      <svg width="100%" height="100%" viewBox="0 0 1152 815" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2628_186)">
          <rect x="40" y="41.5137" width="1071" height="732" stroke="black" stroke-width="2"/>
          <rect x="1090" y="42.5137" width="20" height="200" fill="${mainColor}"/>
          <rect x="225" y="42.5137" width="16" height="109" transform="rotate(90 225 42.5137)" fill="#31384B"/>
          <rect x="967" y="42.5137" width="16" height="109" transform="rotate(90 967 42.5137)" fill="${mainColor}"/>
          <rect x="61" y="451.514" width="13" height="124" fill="${mainColor}"/>
          <rect x="411" y="764.514" width="8.00001" height="124" transform="rotate(90 411 764.514)" fill="${mainColor}"/>
          <rect x="959" y="764.514" width="8.00001" height="192" transform="rotate(90 959 764.514)" fill="#31384B"/>
          <rect x="1078" y="745.514" width="8.00001" height="131" transform="rotate(90 1078 745.514)" fill="#31384B"/>
          <rect x="1110" y="753.514" width="19" height="94" transform="rotate(90 1110 753.514)" fill="${mainColor}"/>
          <rect x="56" y="74.5137" width="32" height="88" fill="#D0D0D2"/>
          <rect x="1078" y="665.514" width="32" height="88" fill="#D0D0D2"/>
          <rect x="41" y="541.514" width="20" height="231" fill="#31384B"/>
          <rect x="41" y="42.5137" width="15" height="82" fill="#31384B"/>
          <rect x="1078" y="100.514" width="12" height="159" fill="#D0D0D2"/>
          <rect x="1090" y="242.514" width="12" height="159" fill="#31384B"/>
          <rect x="943" y="58.5137" width="12" height="54" fill="#31384B"/>
          <rect x="955" y="85.5137" width="12" height="78" fill="#D0D0D2"/>
        </g>
        <defs>
          <clipPath id="clip0_2628_186">
            <rect width="1152" height="814" fill="white" transform="translate(0 0.513672)"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  `;
} 
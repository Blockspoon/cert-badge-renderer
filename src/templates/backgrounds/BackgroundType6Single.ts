export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBackgroundType6Single({
  mainColor = "#96A6B4",
  subColor = "#96A6B4",
}: ISvgProps): string {
  return `
    <div
      style="
        width: 100%;
        height: 100%;
        isolation: isolate;
        display: flex;
        align-items: center;
        justify-content: center;
        will-change: transform, contents;
        transform: translateZ(0);
        backface-visibility: hidden;
        position: relative;
      "
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 746 1081"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M699.728 1068.11L46.2716 1068.11C44.5259 1068.11 43.0558 1066.61 43.0558 1064.83C43.0558 1049.12 30.56 1036.39 15.124 1036.39C13.3783 1036.39 12 1034.89 12 1033.12L12.0001 47.1035C12.0001 45.3257 13.3783 43.8286 15.124 43.8286C30.5601 43.8286 43.0558 31.1035 43.0558 15.3842C43.0558 13.6064 44.5259 12.1093 46.2717 12.1093L699.728 12.1094C701.474 12.1094 702.944 13.6064 702.944 15.3842C702.944 31.1035 715.44 43.8287 730.876 43.8287C732.622 43.8287 734 45.3258 734 47.1035L734 1033.12C734 1034.89 732.622 1036.39 730.876 1036.39C715.44 1036.39 702.944 1049.12 702.944 1064.83C702.944 1066.61 701.474 1068.11 699.728 1068.11ZM696.696 1061.56C698.166 1044.9 711.305 1031.52 727.66 1030.03L727.66 50.1912C711.305 48.6942 698.166 35.314 696.696 18.6591L49.3038 18.6591C47.8337 35.314 34.6947 48.6941 18.3399 50.1912L18.3399 1030.03C34.6947 1031.52 47.8336 1044.9 49.3037 1061.56L696.696 1061.56Z"
          fill="${mainColor}"
        />
        <rect
          x="11.3145"
          y="0.109375"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 11.3145 0.109375)"
          fill="${mainColor}"
        />
        <rect
          x="734.314"
          y="0.109375"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 734.314 0.109375)"
          fill="${mainColor}"
        />
        <rect
          x="11.3145"
          y="1057.48"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 11.3145 1057.48)"
          fill="${mainColor}"
        />
        <rect
          x="734.314"
          y="1057.48"
          width="16"
          height="16"
          rx="4"
          transform="rotate(45 734.314 1057.48)"
          fill="${mainColor}"
        />
      </svg>
    </div>
  `;
} 
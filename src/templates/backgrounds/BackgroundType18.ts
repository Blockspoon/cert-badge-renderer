export interface ISvgProps {
  mainColor?: string;
  subColor?: string;
}

export function createBackgroundType18({
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
        viewBox="0 0 1072 736"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_2530_20660" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 0.160156C5.37258 0.160156 0 5.53275 0 12.1602V723.16C0 729.788 5.37259 735.16 12 735.16H977C983.627 735.16 989 729.788 989 723.16V234.16C989 227.533 994.373 222.16 1001 222.16H1060C1066.63 222.16 1072 216.788 1072 210.16V12.1602C1072 5.53274 1066.63 0.160156 1060 0.160156H977H902H12Z"
          />
        </mask>
        <path
          d="M6 12.1602C6 8.84645 8.6863 6.16016 12 6.16016V-5.83984C2.05887 -5.83984 -6 2.21905 -6 12.1602H6ZM6 723.16V12.1602H-6V723.16H6ZM12 729.16C8.68629 729.16 6 726.474 6 723.16H-6C-6 733.101 2.0589 741.16 12 741.16V729.16ZM977 729.16H12V741.16H977V729.16ZM983 723.16C983 726.474 980.314 729.16 977 729.16V741.16C986.941 741.16 995 733.101 995 723.16H983ZM983 234.16V723.16H995V234.16H983ZM1060 216.16H1001V228.16H1060V216.16ZM1066 12.1602V210.16H1078V12.1602H1066ZM977 6.16016H1060V-5.83984H977V6.16016ZM902 6.16016H977V-5.83984H902V6.16016ZM12 6.16016H902V-5.83984H12V6.16016ZM1078 12.1602C1078 2.21903 1069.94 -5.83984 1060 -5.83984V6.16016C1063.31 6.16016 1066 8.84645 1066 12.1602H1078ZM1060 228.16C1069.94 228.16 1078 220.101 1078 210.16H1066C1066 213.474 1063.31 216.16 1060 216.16V228.16ZM995 234.16C995 230.846 997.686 228.16 1001 228.16V216.16C991.059 216.16 983 224.219 983 234.16H995Z"
          fill="${mainColor}"
          mask="url(#path-1-inside-1_2530_20660)"
        />
      </svg>
    </div>
  `;
} 
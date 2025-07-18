export function createRibbonType115({ mainColor = "#96A6B4", subColor = "#96A6B4", }) {
    const paintId0 = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
    return `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 524 164"
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
        d="M52.8537 75.2129L0 95.8641L48.0577 113.84L26.4268 163.853L126.457 131.164L97.6162 62L52.8537 75.2129Z"
        fill="${mainColor}"
      />
      <path
        d="M471.028 75.2129L523.882 95.8641L475.824 113.84L497.455 163.853L397.457 131.164L426.266 62L471.028 75.2129Z"
        fill="${mainColor}"
      />
      <path
        d="M52.8537 75.2129L0 95.8641L48.0577 113.84L26.4268 163.853L126.457 131.164L97.6162 62L52.8537 75.2129Z"
        fill="black"
        fill-opacity="0.2"
      />
      <path
        d="M471.028 75.2129L523.882 95.8641L475.824 113.84L497.455 163.853L397.457 131.164L426.266 62L471.028 75.2129Z"
        fill="black"
        fill-opacity="0.2"
      />
      <path d="M395 132L473 120L439.151 103L395 132Z" fill="#1F1F1F" />
      <path d="M130 132L52 120L85.8491 103L130 132Z" fill="#1F1F1F" />
      <path
        d="M51.7927 120C51.7927 120 241.286 49.0368 472.207 120L500 42.3106C262.766 -52.8883 24 42.3106 24 42.3106L51.7927 120Z"
        fill="${mainColor}"
      />
    </svg>
  `;
}

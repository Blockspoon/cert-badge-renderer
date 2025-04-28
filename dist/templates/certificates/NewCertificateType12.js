"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewCertificateType12 = createNewCertificateType12;
function createNewCertificateType12({ mainColor = "#96A6B4", subColor = "#96A6B4", extraColor1 = "#96A6B4", extraColor2 = "#96A6B4", }) {
    const pattern0Id = `pattern0_${Math.random().toString(36).substr(2, 9)}`;
    const pattern1Id = `pattern1_${Math.random().toString(36).substr(2, 9)}`;
    const filterId = `filter0_dd_${Math.random().toString(36).substr(2, 9)}`;
    return `
   <svg
        width="100%"
        height="100%"
        viewBox="0 0 1153 814"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1917_4338)">
          <path
            d="M1180.82 -26.552V841.424H-26.5488V-26.552H1180.82Z"
            fill="white"
          />
          <mask
            id="mask0_1917_4338"
            maskUnits="userSpaceOnUse"
            x="-27"
            y="-27"
            width="1208"
            height="869"
          >
            <path
              d="M1180.82 -26.552V841.472H-26.5977V-26.552H1180.82Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_1917_4338)">
            <g opacity="0.5">
              <path
                d="M1708.52 -26.5518L987.016 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M1722.16 -26.5518L1000.66 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M1735.91 -26.5518L1014.41 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M1749.56 -26.5518L1028.06 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M1763.21 -26.5518L1041.81 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M1776.96 -26.5518L1055.46 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M1790.61 -26.5518L1069.21 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M1804.35 -26.5518L1082.85 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M1818 -26.5518L1096.5 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M1831.75 -26.5518L1110.25 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M1845.4 -26.5518L1123.9 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M1859.15 -26.5518L1137.65 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M1872.8 -26.5518L1151.3 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
            </g>
            <g opacity="0.5">
              <path
                d="M72.8696 -26.552L-648.631 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M86.52 -26.552L-634.98 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M100.266 -26.552L-621.234 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M113.917 -26.552L-607.584 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M127.663 -26.552L-593.838 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M18.4643 -26.552L-702.939 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M32.2114 -26.552L-689.289 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M45.8599 -26.552L-675.641 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M59.6079 -26.552L-661.893 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M141.313 -26.552L-580.188 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M155.059 -26.552L-566.441 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M168.708 -26.552L-552.793 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M182.357 -26.552L-539.047 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M196.104 -26.552L-525.396 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M209.753 -26.552L-511.65 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M223.5 -26.552L-498 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M237.151 -26.552L-484.35 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M250.897 -26.552L-470.604 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M264.547 -26.552L-456.953 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M278.293 -26.552L-443.207 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M291.944 -26.552L-429.557 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M305.69 -26.552L-415.811 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M319.34 -26.552L-402.16 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M333.086 -26.552L-388.414 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M346.735 -26.552L-374.766 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M360.386 -26.552L-361.018 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M374.131 -26.552L-347.369 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M387.781 -26.552L-333.623 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M401.528 -26.552L-319.973 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M415.178 -26.552L-306.322 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M428.924 -26.552L-292.576 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M442.575 -26.552L-278.926 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M456.321 -26.552L-265.18 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M469.971 -26.552L-251.529 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M483.717 -26.552L-237.783 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M497.368 -26.552L-224.133 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M511.017 -26.552L-210.387 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M524.764 -26.552L-196.736 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M538.411 -26.552L-182.992 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M552.159 -26.552L-169.342 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M565.809 -26.552L-155.691 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M579.555 -26.552L-141.945 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M593.206 -26.552L-128.295 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
              <path
                d="M606.952 -26.552L-114.549 841.424"
                stroke="${mainColor}"
                stroke-width="0.84"
                strokeMiterlimit="10"
              />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1185.35 373C1239.19 373 1282.85 329.348 1282.85 275.5C1282.85 221.652 1239.19 178 1185.35 178C1131.5 178 1087.85 221.652 1087.85 275.5C1087.85 329.348 1131.5 373 1185.35 373ZM1185.35 330C1215.45 330 1239.85 305.599 1239.85 275.5C1239.85 245.4 1215.45 221 1185.35 221C1155.25 221 1130.85 245.4 1130.85 275.5C1130.85 305.599 1155.25 330 1185.35 330Z"
              fill="${mainColor}"
            />

            {/* 디자인요소 누락 임시추가 */}
            <path
              d="M435.822 653.735H-27.3984V517.972H435.822V653.735Z"
              fill="#4386FC"
            />
            <path
              d="M1122 130.499L1122 -109.501L1191 -109.501L1191 130.499L1122 130.499Z"
              fill="#FF5A59"
            />

            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M501.725 737.543V869.527L461.325 827.863L417.847 826C419.207 790.17 399.587 765.037 380.256 744.256L373.746 737.543H501.725Z"
              fill="#FF5A59"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M287.346 933C341.193 933 384.846 889.348 384.846 835.5C384.846 781.652 341.193 738 287.346 738C233.498 738 189.846 781.652 189.846 835.5C189.846 889.348 233.498 933 287.346 933ZM287.346 890C317.445 890 341.846 865.599 341.846 835.5C341.846 805.4 317.445 781 287.346 781C257.246 781 232.846 805.4 232.846 835.5C232.846 865.599 257.246 890 287.346 890Z"
              fill="${mainColor}"
            />
            <path
              d="M677.138 -89.6366L759.908 -6.58917L677.041 76.5551L677.138 142.741L825.833 -6.58917L677.138 -155.823V-89.6366Z"
              fill="${subColor}"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M501.725 737.543V869.527L461.325 827.863L417.847 826C419.207 790.17 399.587 765.037 380.256 744.256L373.746 737.543H501.725Z"
              fill="${extraColor1}"
            />
            <path
              d="M436.669 653.236H-26.5508V517.472H436.669V653.236Z"
              fill="${subColor}"
            />
            <path
              d="M1180.85 41.9998H940.846V-27.0002H1180.85V41.9998Z"
              fill="${extraColor1}"
            />
            <path
              d="M1122.85 130L1122.85 -110L1191.85 -110L1191.85 130L1122.85 130Z"
              fill="${extraColor1}"
            />
            <path
              d="M32.1152 -28.6836H486.623V428.804L186.716 703.335H32.1152V-28.6836Z"
              fill="${mainColor}"
            />
            <path
              d="M39.8598 753.725C39.8598 755.857 38.1173 757.602 35.9875 757.602C33.8578 757.602 32.1152 755.857 32.1152 753.725C32.1152 751.593 33.8578 749.849 35.9875 749.849C38.1173 749.849 39.8598 751.593 39.8598 753.725Z"
              fill="${subColor}"
            />
            <path
              d="M39.8598 784.735C39.8598 786.867 38.1173 788.611 35.9875 788.611C33.8578 788.611 32.1152 786.867 32.1152 784.735C32.1152 782.603 33.8578 780.859 35.9875 780.859C38.1173 780.859 39.8598 782.603 39.8598 784.735Z"
              fill="${subColor}"
            />
            <path
              d="M74.6117 784.735C74.6117 786.867 72.8692 788.611 70.7395 788.611C68.6097 788.611 66.8672 786.867 66.8672 784.735C66.8672 782.603 68.6097 780.859 70.7395 780.859C72.8692 780.859 74.6117 782.603 74.6117 784.735Z"
              fill="${subColor}"
            />
            <path
              d="M109.366 784.735C109.366 786.867 107.623 788.611 105.493 788.611C103.364 788.611 101.621 786.867 101.621 784.735C101.621 782.603 103.364 780.859 105.493 780.859C107.623 780.859 109.366 782.603 109.366 784.735Z"
              fill="${subColor}"
            />
            <path
              d="M144.12 784.735C144.12 786.867 142.377 788.611 140.247 788.611C138.118 788.611 136.375 786.867 136.375 784.735C136.375 782.603 138.118 780.859 140.247 780.859C142.377 780.859 144.12 782.603 144.12 784.735Z"
              fill="${subColor}"
            />
            <path
              d="M75.7747 661.569C75.7747 663.701 74.0322 665.445 71.9024 665.445C69.7727 665.445 68.127 663.701 68.127 661.569C68.127 659.437 69.7727 657.693 71.9024 657.693C74.0322 657.693 75.7747 659.437 75.7747 661.569Z"
              fill="white"
            />
            <path
              d="M110.527 661.569C110.527 663.701 108.784 665.445 106.654 665.445C104.525 665.445 102.879 663.701 102.879 661.569C102.879 659.437 104.525 657.693 106.654 657.693C108.784 657.693 110.527 659.437 110.527 661.569Z"
              fill="white"
            />
            <path
              d="M145.281 661.569C145.281 663.701 143.538 665.445 141.408 665.445C139.279 665.445 137.633 663.701 137.633 661.569C137.633 659.437 139.279 657.693 141.408 657.693C143.538 657.693 145.281 659.437 145.281 661.569Z"
              fill="white"
            />
            <path
              d="M380.493 214.876C380.493 217.008 378.751 218.752 376.621 218.752C374.491 218.752 372.846 217.008 372.846 214.876C372.846 212.744 374.491 211 376.621 211C378.751 211 380.493 212.744 380.493 214.876Z"
              fill="white"
            />
            <path
              d="M415.247 214.876C415.247 217.008 413.505 218.752 411.375 218.752C409.245 218.752 407.6 217.008 407.6 214.876C407.6 212.744 409.245 211 411.375 211C413.505 211 415.247 212.744 415.247 214.876Z"
              fill="white"
            />
            <path
              d="M450.001 214.876C450.001 217.008 448.259 218.752 446.129 218.752C443.999 218.752 442.354 217.008 442.354 214.876C442.354 212.744 443.999 211 446.129 211C448.259 211 450.001 212.744 450.001 214.876Z"
              fill="white"
            />
          </g>
          <rect x="31.8477" y="255" width="455" height="187" fill="white" />
          <rect
            x="534.848"
            y="624"
            width="100"
            height="100"
            fill="url(#pattern0_1917_4338)"
          />
          <rect
            x="100.848"
            y="20"
            width="60"
            height="60"
            transform="rotate(90 100.848 20)"
            fill="url(#pattern1_1917_4338)"
          />
        </g>
        <defs>
          <pattern
            id="pattern0_1917_4338"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use transform="translate(-0.0932203 -0.338983) scale(0.00282486)" />
          </pattern>
          <pattern
            id="pattern1_1917_4338"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          ></pattern>
          <pattern
            id="pattern2_1917_4338"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use transform="translate(-0.131198 -0.126971) scale(0.00353698)" />
          </pattern>
          <clipPath id="clip0_1917_4338">
            <rect
              width="1152"
              height="814"
              fill="white"
              transform="translate(0.847656)"
            />
          </clipPath>
          <image id="image0_1917_4338" width="420" height="594" />
          <image id="image1_1917_4338" width="357" height="357" />
          <image id="image2_1917_4338" width="360" height="360" />
        </defs>
      </svg>
  `;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCertificateHTML = generateCertificateHTML;
const renderCertificate_1 = require("../renderCertificate");
const componentsDirection_1 = require("../constants/componentsDirection");
function isHorizontal(name) {
    if (!name)
        return false;
    return !componentsDirection_1.portraitComponents.includes(name);
}
function generateCertificateHTML(jsonData, templateComponentName) {
    var _a, _b, _c;
    const width = isHorizontal(templateComponentName) ? 1152 : 810;
    const height = isHorizontal(templateComponentName) ? 810 : 1152;
    const htmlContent = `
    <html>
      <head>
        <style>
          @font-face {
            font-family: "Pretendard";
            src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
            font-weight: 400;
            font-style: normal;
          }
        </style>
      </head>
      <body
        style="
          width: ${width}px;
          height: ${height}px;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-origin: 0 0;
        "
      >
        <div class="container" style="
          width: ${width}px;
          height: ${height}px;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        ">
          ${(0, renderCertificate_1.renderCertificate)({
        user: ((_a = jsonData[0]) === null || _a === void 0 ? void 0 : _a.user) || {},
        kollegeInfo: ((_b = jsonData[0]) === null || _b === void 0 ? void 0 : _b.kollegeInfo) || {},
        achievementInfo: ((_c = jsonData[0]) === null || _c === void 0 ? void 0 : _c.achievementInfo) || {}
    })}
        </div>
      </body>
    </html>
  `;
    return { htmlContent };
}

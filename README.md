# @blockspoon/cert-badge-renderer

칼리지스 디지털 배지 또는 인증서를 HTML 또는 PNG로 렌더링할 수 있는 Node.js 기반 렌더링 도구입니다. Open API와 연결하거나 내부 렌더링 엔진으로 사용할 수 있도록 설계되었습니다.

---

## ✨ 주요 기능

- 인증서 또는 배지 JSON 데이터를 기반으로 HTML 렌더링
- 인증서 또는 배지를 이미지(png, base64)로 변환
- 인증서 조회 객체를 그대로 넘겨 변환 가능

---

## ⚡️ 설치 방법

```bash
npm install @blockspoon/cert-badge-renderer
```

---

## 📝 사용법 예제

### 1. 인증서 또는 배지 HTML 생성

```ts
import { generateAchievementHTML } from "@blockspoon/cert-badge-renderer";

const html = await generateAchievementHTML([achievement](https://developers.kolleges.net/docs/achievement-object), {
  type: "certificate", // 또는 "badge"
  size: 600, // 렌더링 크기 (px)
});
```

### 2. 인증서 또는 배지 PNG 이미지 생성

```ts
import { generateAchievementFile } from "@blockspoon/cert-badge-renderer";

const result = await generateAchievementFile(achievement, {
  type: "certificate", // 또는 "badge"
  size: 600,
  returnType: "base64", // 또는 "buffer"
});

// Base64 저장 예시
const base64 = result.base64.replace(/^data:image\/png;base64,/, "");
require("fs").writeFileSync("certificate.png", Buffer.from(base64, "base64"));
```

### 3. 디자인(JSON) 기반으로 HTML 생성하기

```ts
import { generateDesignHTML } from "@blockspoon/cert-badge-renderer";

const html = await generateDesignHTML(certificateDesign || badgeDesign);

require("fs").writeFileSync("badge.html", html, "utf-8");
```

### 4. 디자인(JSON) 기반으로 PNG 생성하기

```ts
import { generateDesignFile } from "@blockspoon/cert-badge-renderer";

const png = await generateDesignFile(certificateDesign || badgeDesign);

require("fs").writeFileSync("badge.png", png.buffer);
```

---

## 🔐 API Key 사용 방식

패키지 사용 시 서버 요청에는 API Key가 필요합니다.  
이는 인증서 생성 및 검증 요청의 보안을 위한 절차이며,  
패키지 내부의 Open API 호출 시 자동으로 토큰이 헤더에 포함됩니다.

자세한 정보는 https://developers.kolleges.net 참고 부탁드립니다.

---

## 📣 기여 및 문의

문의는 support@kolleges.net으로 보내주세요!

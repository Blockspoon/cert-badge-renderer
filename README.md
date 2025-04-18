# @blockspoon/cert-badge-renderer

디지털 배지 또는 인증서 디자인 JSON을 기반으로 HTML 또는 PNG로 렌더링할 수 있는 Node.js 기반 렌더링 도구입니다. Open API와 연결하거나 내부 렌더링 엔진으로 사용할 수 있도록 설계되었습니다.

> 📌 이 패키지는 **서버에서 인증서 렌더링 리소스를 줄이기 위해**, 클라이언트 또는 별도 워커에서 인증서 정보를 받아 이미지를 직접 생성할 수 있도록 제작되었습니다.
> 인증서 조회 시 받은 객체를 그대로 넘겨 렌더링할 수 있으며, 서버 호출 시에는 API Key 기반 인증이 적용됩니다.

---

## ✨ 주요 기능

- 인증서 또는 배지 JSON 데이터를 기반으로 HTML 렌더링
- 인증서 또는 배지를 PNG 이미지로 변환
- 레이아웃 JSON을 통한 자유로운 디자인 구성 지원
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

const html = await generateAchievementHTML(data, {
  type: "certificate", // 또는 "badge"
  size: 600,            // 렌더링 크기 (px)
});
```

### 2. 인증서 또는 배지 PNG 이미지 생성

```ts
import { generateAchievementFile } from "@blockspoon/cert-badge-renderer";

const result = await generateAchievementFile(data, {
  type: "certificate",   // 또는 "badge"
  size: 600,
  returnType: "base64",  // 또는 "buffer"
});

// Base64 저장 예시
const base64 = result.base64.replace(/^data:image\/png;base64,/, "");
require("fs").writeFileSync("certificate.png", Buffer.from(base64, "base64"));
```

### 3. 디자인(JSON) 기반으로 PNG 생성하기

```ts
import { generateDesignFile } from "@blockspoon/cert-badge-renderer";

const png = await generateDesignFile({
  layout_json: [...],       // 요소 정의 배열
  template_type: "...",    // 템플릿 ID
  main_color: "#000",
  sub_color: "#999",
});

require("fs").writeFileSync("badge.png", png.buffer);
```

### 4. 디자인(JSON) 기반으로 HTML 생성하기

```ts
import { generateDesignHTML } from "@blockspoon/cert-badge-renderer";

const html = await generateDesignHTML(achievement);

require("fs").writeFileSync("badge.html", html, "utf-8");
```

---

## 📂 테스트 실행 예제

```bash
node test/test.js
```

`test.js`는 다음과 같은 작업을 수행합니다:
- `generateDesignHTML()` → HTML 저장
- `generateDesignFile()` → PNG 저장
- `generateAchievementHTML()` → HTML 저장 (주석 해제 시)
- `generateAchievementFile()` → PNG 저장 또는 base64 변환 (주석 해제 시)

---

## 🔐 API Key 사용 방식

패키지 사용 시 서버 요청에는 API Key가 필요합니다.  
이는 인증서 생성 및 검증 요청의 보안을 위한 절차이며,  
패키지 내부의 Open API 호출 시 자동으로 토큰이 헤더에 포함됩니다.

자세한 정보는 https://developers.kolleges.net 참고 부탁드립니다.

---

## 📚 타입 정의

```ts
// CertificateData = IAchievementItem | IAchievementFormItem;
// CertificateOptions = {
//   type?: "certificate" | "badge";
//   size?: number;
//   returnType?: "base64" | "buffer";
//   noSpace?: boolean;
//   apiKey?: string;
// }
```

---

## 📣 기여 및 문의

문의는 support@kolleges.net으로 보내주세요!

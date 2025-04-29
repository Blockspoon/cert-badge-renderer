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

### 1. 인증서 또는 배지 객체 기반으로 HTML 생성하기

```ts
import { generateAchievementHTML } from "@blockspoon/cert-badge-renderer/browser";

// achievement: https://developers.kolleges.net/docs/achievement_get#achievement-object
const html = await generateAchievementHTML(achievement, {
  type: "certificate", // 또는 "badge"
  size: 600, // 렌더링 크기 (px)
});
```

### 🧩 achievement 객체란?

cert-badge-renderer를 사용할 때 필요한 achievement 객체는 Kolleges Open API를 통해 조회할 수 있는 인증서 데이터입니다.
아래는 achievement 객체의 기본 구조 예시입니다:

```json
{
  "id": 1,
  "certificate_number": "CERT-001",
  "user": {
    "name": "홍길동",
    "email": "hong@example.com"
  },
  "achievementForm": {
    "name": "React 수료증",
    "description": "React 기본 과정 수료",
    "achievementCertificateDesign": {
      /* 디자인 데이터 */
    },
    "achievementBadgeDesign": {
      /* 배지 데이터 */
    }
  }
}
```

전체 필드 상세 설명은 [인증서 단건 조회](https://developers.kolleges.net/docs/achievement_get#achievement-object), [인증서 다건 조회](https://developers.kolleges.net/docs/achievement_get_list#achievements-object) 문서에서 확인할 수 있습니다.

### 2. 디자인 객체 기반으로 HTML 생성하기

```ts
import { generateDesignHTML } from "@blockspoon/cert-badge-renderer/browser";

// certificateDesign: https://developers.kolleges.net/docs/design_get_certificate#certificatedesign-object
// badgeDesign: https://developers.kolleges.net/docs/design_get_badge#badgedesign-object
const html = await generateDesignHTML(certificateDesign || badgeDesign, {
  size: 600, // 렌더링 크기 (px)
});
```

### 🧩 certificateDesign 객체란?

`cert-badge-renderer`를 사용할 때 필요한 `certificateDesign` 또는 `badgeDesign` 객체는  
Kolleges Open API를 통해 조회할 수 있는 "템플릿 디자인 데이터"입니다.

아래는 `certificateDesign` 객체의 기본 구조 예시입니다:

```json
{
  "id": 165,
  "name": "sandbox-certificate-v1",
  "main_color": "#7657FA",
  "sub_color": "#CABDFF",
  "extra_color_1": null,
  "extra_color_2": null,
  "template_type": "NewCertificateType7Single",
  "layout_json": [
    /* 컴포넌트 위치/스타일 정보 */
  ],
  "created_at": "2025-04-09T18:37:39.696Z",
  "updated_at": "2025-04-09T18:37:39.696Z",
  "club": {
    "domain": "sandbox",
    "customData": []
  }
}
```

전체 필드 상세 설명은 [증명서 디자인 다건 조회](https://developers.kolleges.net/docs/design_get_list_certificate#certificatedesigns-object), [증명서 디자인 단건 조회](https://developers.kolleges.net/docs/design_get_certificate#certificatedesign-object), [배지 디자인 다건 조회](https://developers.kolleges.net/docs/design_get_list_badge#badgedesigns-object), [배지 디자인 단건 조회](https://developers.kolleges.net/docs/design_get_badge#badgedesign-object) 문서에서 확인할 수 있습니다.

## 🔐 API Key 사용 방식

패키지 사용 시 서버 요청에는 API Key가 필요합니다.  
자세한 정보는 https://developers.kolleges.net 참고 부탁드립니다.

---

## 📣 기여 및 문의

문의는 support@kolleges.net으로 보내주세요!

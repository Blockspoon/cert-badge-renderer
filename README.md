# json-to-certificate

JSON 데이터를 인증서/뱃지 이미지로 변환하는 라이브러리입니다.

## 설치

```bash
npm install json-to-certificate
```

## 사용 방법

### 기본 사용

```typescript
import { generateCertificateFile } from 'json-to-certificate';

const certificateData = {
  user: {
    name: "홍길동"
  },
  kollegeInfo: {
    name: "교육기관명",
    // ... 기타 교육기관 정보
  },
  achievementInfo: {
    name: "인증서명",
    // ... 기타 인증서 정보
  }
};

const options = {
  type: "certificate", // 또는 "badge"
  size: 600, // 이미지 크기 (픽셀)
  returnType: "base64" // 또는 "file"
};

// 파일로 저장
const result = await generateCertificateFile(certificateData, options);
if (options.returnType === "file") {
  // buffer와 파일명이 반환됨
  console.log(result.buffer);
  console.log(result.fileName);
} else {
  // base64 문자열이 반환됨
  console.log(result.base64);
}
```

### 옵션 설명

- `type`: 인증서 타입
  - `"certificate"`: 인증서 형식
  - `"badge"`: 뱃지 형식

- `size`: 생성될 이미지의 크기 (픽셀)
  - 기본값: 600

- `returnType`: 반환 형식
  - `"file"`: Buffer와 파일명 반환
  - `"base64"`: Base64 문자열 반환

### 반환값

#### returnType: "file"
```typescript
{
  buffer: Buffer;
  contentType: string;
  fileName: string;
}
```

#### returnType: "base64"
```typescript
{
  base64: string;
  contentType: string;
}
```

## 예제

### Base64 이미지로 저장하기
```typescript
const result = await generateCertificateFile(certificateData, {
  type: "badge",
  size: 300,
  returnType: "base64"
});

// base64 문자열에서 이미지 데이터 추출
const base64Data = result.base64.replace(/^data:image\/png;base64,/, "");
const buffer = Buffer.from(base64Data, 'base64');

// 이미지 파일로 저장
await fs.writeFile('certificate.png', buffer);
```


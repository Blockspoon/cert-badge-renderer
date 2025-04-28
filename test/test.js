const fs = require("fs");
const {
  generateAchievementHTML,
} = require("../dist/utils/generateAchievementHTML");
const {
  generateAchievementFile,
} = require("../dist/utils/generateAchievementFile");
const fsPromises = require("fs").promises;
const path = require("path");
const { generateDesignHTML } = require("../dist/utils/generateDesignHTML");
const { generateDesignFile } = require("../dist/utils/generateDesignFile");

const test_object = {
  statusCode: 200,
  message: "인증서 양식이 조회되었습니다.",
  achievement: {
    id: 1450,
    certificate_number: "CERT-202504-123456",
    expiration_date: "2025-12-02T00:00:00.000Z",
    is_received: false,
    issuance_method: "EMAIL",
    created_at: "2025-04-18T00:00:00.000Z",
    updated_at: "2025-04-06T18:17:39.116Z",
    user: {
      email: "eogks999@naver.com",
      name: "김천재",
      avatar: [
        "https://ufcglnoegwgklehhpzlj.supabase.co/storage/v1/object/public/blockspoon_images/uploads/user/avatar/background.webp",
        "https://ufcglnoegwgklehhpzlj.supabase.co/storage/v1/object/public/blockspoon_images/uploads/user/avatar/clothes.webp",
        "https://ufcglnoegwgklehhpzlj.supabase.co/storage/v1/object/public/blockspoon_images/uploads/user/avatar/face.webp",
        "https://ufcglnoegwgklehhpzlj.supabase.co/storage/v1/object/public/blockspoon_images/uploads/user/avatar/eye.webp",
        "https://ufcglnoegwgklehhpzlj.supabase.co/storage/v1/object/public/blockspoon_images/uploads/user/avatar/hair.webp",
        "https://ufcglnoegwgklehhpzlj.supabase.co/storage/v1/object/public/blockspoon_images/uploads/user/avatar/mouth.webp",
        "https://ufcglnoegwgklehhpzlj.supabase.co/storage/v1/object/public/blockspoon_images/uploads/user/avatar/accessory.webp",
      ],
      deleted_at: null,
      image: null,
      profileImageType: "avatar",
    },
    achievementForm: {
      id: 496,
      name: "OpenApi 테스트 인증서",
      achievementCertificateDesign: {
        id: 64,
        name: "배지리본합체!",
        main_color: "#FF1B64",
        sub_color: "#FF8FB1",
        extra_color_1: "yellow",
        extra_color_2: "green",
        layout_json: [
          {
            id: "2",
            order: 3,
            controlType: "text",
            designType: "props",
            type: "club",
            bindingKey: "name",
            text: "미세먼지 그만",
            fontSize: 28,
            fontWeight: "700",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            color: "black",
            width: 335,
            height: 50,
            x: 135,
            y: 405,
          },
          {
            id: "club-symbol",
            order: 3,
            controlType: "image",
            designType: "props",
            type: "club",
            bindingKey: "club_symbol",
            src: "https://ufcglnoegwgklehhpzlj.supabase.co/storage/v1/object/public/blockspoon_images/uploads/club/symbol/8a4656a6-eda5-4356-8240-155e70982e0e",
            text: "[발급기관[1].심볼]",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 90,
            height: 90,
            x: 423,
            y: 86,
          },
          {
            id: "0",
            order: 4,
            controlType: "text",
            designType: "text",
            text: "· CERTIFICATE of COMPLETION ·",
            fontSize: 16,
            fontWeight: "600",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            color: "black",
            width: 279,
            height: 38,
            x: 162,
            y: 172,
          },
          {
            id: "1",
            order: 5,
            controlType: "text",
            designType: "props",
            type: "achievement",
            bindingKey: "name",
            text: "OpenApi 테스트 인증서",
            fontSize: 48,
            fontWeight: "700",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            width: 360,
            height: 120,
            x: 125,
            y: 240,
          },
        ],
        template_type: "NewCertificateType33",
        created_at: "2025-04-09T18:37:27.940Z",
        updated_at: "2025-04-09T18:37:27.940Z",
      },
      club: {
        domain: "ddenzu2",
        name: "미세먼지 그만",
        type: "school",
        images: [
          {
            path: "https://ufcglnoegwgklehhpzlj.supabase.co/storage/v1/object/public/blockspoon_images/uploads/club/logo/5af4890f-8906-4562-92ee-d511742e5d39",
            type: "club_logo",
          },
          {
            path: "https://ufcglnoegwgklehhpzlj.supabase.co/storage/v1/object/public/blockspoon_images/uploads/club/symbol/8a4656a6-eda5-4356-8240-155e70982e0e",
            type: "club_symbol",
          },
          {
            path: "https://ufcglnoegwgklehhpzlj.supabase.co/storage/v1/object/public/blockspoon_images/uploads/achievement/form/sign/fb38b4e8-5a26-40a2-b827-7e8044f058a6",
            type: "sign_image",
          },
        ],
      },
    },
  },
};

const testCertificateData = {
  // user: test_object.achievement.user,
  achievementInfo: test_object.achievement,
};
const testOptions = {
  type: "certificate",
  size: 300,
  returnType: "base64",
};

async function runTests() {
  try {
    // HTML 변환 테스트
    // const htmlOutput = await generateDesignHTML(testDesignData, {
    //   size: 300,
    // });
    // fs.writeFileSync("test/certificate.html", htmlOutput, "utf8");
    // console.log("✅ HTML 변환 완료: test/certificate.html");

    // // PNG 변환 테스트
    // const pngResult = await generateDesignFile(testDesignData, {
    //   size: 300,
    // });
    // fs.writeFileSync("test/certificate.png", pngResult.buffer);
    // console.log("✅ PNG 변환 완료: test/certificate.png");

    // // HTML 변환 테스트
    const htmlOutput = await generateAchievementHTML(testCertificateData.achievementInfo, {
      type: "badge",
      size: 300,
      noSpace: false,
      mainColor: "#322899",
      subColor: "#7368E8",
    });
    fs.writeFileSync("test/certificate.html", htmlOutput, "utf8");
    // console.log("✅ HTML 변환 완료: test/certificate.html");

    // PNG 변환 테스트
    const pngResult = await generateAchievementFile(
      testCertificateData.achievementInfo,
      testOptions
    );

    if (testOptions.returnType === "base64") {
      console.log("✅ Base64 변환 완료");
      // base64 문자열에서 data:image/png;base64, 부분 제거
      const base64Data = pngResult.base64.replace(
        /^data:image\/png;base64,/,
        ""
      );
      // base64를 버퍼로 변환
      const buffer = Buffer.from(base64Data, "base64");
      // 이미지 파일로 저장
      await fsPromises.writeFile(
        path.join(__dirname, "certificate_base64.png"),
        buffer
      );
      console.log("✅ Base64 이미지 저장 완료: test/certificate_base64.png");
    } else {
      await fsPromises.writeFile(
        path.join(__dirname, "certificate.png"),
        pngResult.buffer
      );
      console.log("✅ PNG 변환 완료: test/certificate.png");
    }
  } catch (error) {
    console.error("❌ 테스트 실행 중 오류 발생:", error);
  }
}

runTests();

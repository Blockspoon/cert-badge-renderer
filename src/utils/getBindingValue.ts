import { format } from "date-fns";
import { IAchievementItem } from "../interface";
import { groupByType } from "../util";

// 데이터 타입별 헬퍼 함수
const getAchievementValue = (
  bindingKey: string,
  achievementInfo: IAchievementItem
) => {
  if (!achievementInfo) return null;

  const { tags } = achievementInfo.achievementForm || {};

  switch (bindingKey) {
    case "period":
      return achievementInfo.course_begin_at && achievementInfo.course_end_at
        ? `${format(
            new Date(achievementInfo.course_begin_at),
            "yyyy.MM.dd"
          )} ~ ${format(new Date(achievementInfo.course_end_at), "yyyy.MM.dd")}`
        : "-";

    case "created_at":
      return format(new Date(achievementInfo.created_at), "yyyy.MM.dd");

    case "certificate_number":
      return achievementInfo.certificate_number || "";

    case "tags":
      return tags?.length ? tags.map((tag) => `#${tag}`).join(" ") : null;

    case "qr_code":
      return `https://kolleges.net/ko/${`test`}/achievement/${
        achievementInfo.id
      }`;

    case "badge":
      return achievementInfo;

    case "expiration_date":
      return achievementInfo.expiration_date || "";

    default:
      return (achievementInfo.achievementForm as any)?.[bindingKey] || null;
  }
};

const getUserValue = (bindingKey: string, user: any) => {
  return bindingKey === "name"
    ? user?.name || "홍길동"
    : user?.[bindingKey] || null;
};

const getClubValue = (
  bindingKey: string,
  kollegeInfo: any,
  achievementInfo: any
) => {
  if (!kollegeInfo) return null;

  if (bindingKey.startsWith("name_")) {
    const index = Number(bindingKey.split("_")[1]) - 1;
    return (
      achievementInfo?.achievementForm?.clubInstitutions?.[index]?.name || ""
    );
  }

  if (
    ["sign_image_1", "sign_image_2", "club_symbol_1", "club_symbol_2"].includes(
      bindingKey
    )
  ) {
    const index = bindingKey.endsWith("1") ? 0 : 1;
    const imageKey = bindingKey.includes("sign_image")
      ? "sign_image"
      : "club_symbol";

    return achievementInfo?.achievementForm.clubInstitutions?.[index]?.images
      ? groupByType(
          achievementInfo?.achievementForm.clubInstitutions[index].images
        )[imageKey]?.[0]?.path
      : null;
  }

  if (["club_logo", "sign_image", "club_symbol"].includes(bindingKey)) {
    if (achievementInfo?.achievementForm.representativeInstitution) {
      const groupByTypeImages = groupByType(
        achievementInfo?.achievementForm.representativeInstitution.images
      );

      return (
        groupByTypeImages[bindingKey as keyof typeof groupByTypeImages]?.[0]
          ?.path || null
      );
    }

    return kollegeInfo.images[bindingKey]?.[0]?.path;
  }

  if (
    bindingKey === "name" &&
    achievementInfo?.achievementForm.representativeInstitution
  ) {
    return achievementInfo?.achievementForm.representativeInstitution?.name;
  }

  return kollegeInfo?.[bindingKey] || null;
};

const getCustomValue = (bindingKey: string, achievementInfo: any) => {
  if (!achievementInfo?.customAttributes) return null;
  return (
    achievementInfo.customAttributes.find((attr: { attribute_tag: string }) =>
      [`custom_${attr.attribute_tag}`, `custom-${attr.attribute_tag}`].includes(
        bindingKey
      )
    )?.attribute_value || null
  );
};

// 🔥 메인 함수: 데이터 타입별로 자동 호출하도록 변경!
export const getBindingValue = (
  type: string,
  bindingKey: string,
  data: any
) => {
  const { achievementInfo, user, kollegeInfo } = data;

  switch (type) {
    case "achievement":
      return getAchievementValue(bindingKey, achievementInfo);
    case "user":
      return getUserValue(bindingKey, user);
    case "club":
      return getClubValue(bindingKey, kollegeInfo, achievementInfo);
    case "custom":
      return getCustomValue(bindingKey, achievementInfo);
    default:
      return null;
  }
};

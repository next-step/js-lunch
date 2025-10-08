import {
  createFormItem,
  createFormItemHelpText,
  createFormItemInput,
  createFormItemLabel,
  createFormItemSelect,
} from "./form-item.js";

export function createCategoryItem() {
  const category = createFormItem({
    required: true,
  });
  const categoryLabel = createFormItemLabel("카테고리");
  const categorySelect = createFormItemSelect({
    category: "category",
    options: ["선택해주세요", "한식", "중식", "일식", "양식", "아시안", "기타"],
  });
  categorySelect.name = "category";
  category.append(categoryLabel, categorySelect);
  return category;
}

export function createNameItem() {
  const name = createFormItem({
    required: true,
  });
  const nameLabel = createFormItemLabel("이름");
  const nameInput = createFormItemInput({
    name: "name",
    type: "text",
  });
  name.append(nameLabel, nameInput);
  return name;
}

export function createDistanceItem() {
  const distance = createFormItem({
    required: true,
  });
  const distanceLabel = createFormItemLabel("거리(도보 이동 시간)");
  const distanceSelect = createFormItemSelect({
    name: "distance",
    options: ["선택해주세요", "5", "10", "15", "20", "30"],
  });
  distance.append(distanceLabel, distanceSelect);
  return distance;
}

export function createDescriptionItem() {
  const description = createFormItem();
  const descriptionLabel = createFormItemLabel("설명");
  const descriptionTextArea = document.createElement("textarea");
  descriptionTextArea.name = "description";
  const descriptionHelpText = createFormItemHelpText(
    "메뉴 등 추가 정보를 입력해 주세요."
  );
  description.append(
    descriptionLabel,
    descriptionTextArea,
    descriptionHelpText
  );
  return description;
}

export function createLinkItem() {
  const link = createFormItem();
  const linkLabel = createFormItemLabel("참고 링크");
  const linkInput = createFormItemInput({
    name: "link",
    type: "url",
  });
  const linkHelpText = createFormItemHelpText(
    "매장 정보를 확인할 수 있는 링크를 입력해 주세요."
  );
  link.append(linkLabel, linkInput, linkHelpText);
  return link;
}

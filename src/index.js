import data from "./data.js";
import { render } from "./render.js";
import { addSelectEvent } from "./select.js";
console.log("npm run dev 명령어를 통해 점심 뭐 먹지 미션을 시작하세요");

// 자바스크립트 코드에서 이미지 리소스 로드 테스트
// index.html 파일의 html 구조를 수정하셔도 됩니다.

addEventListener("load", () => {
  render(data.storeList);
  addSelectEvent();
});

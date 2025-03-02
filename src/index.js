import { App } from './app';
import { globalStore } from './stores';
import { bottomSheetStore } from './stores/bottom-sheet';
import './styles/index.css';

console.log('npm run dev 명령어를 통해 점심 뭐 먹지 미션을 시작하세요');
console.log(
  '%c ___       ___  ___  ________   ________  ___  ___     \n' +
    '|\\  \\     |\\  \\|\\  \\|\\   ___  \\|\\   ____\\|\\  \\|\\  \\    \n' +
    '\\ \\  \\    \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\___|\\ \\  \\\\\\  \\   \n' +
    ' \\ \\  \\    \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\    \\ \\   __  \\  \n' +
    '  \\ \\  \\____\\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\____\\ \\  \\ \\  \\ \n' +
    '   \\ \\_______\\ \\_______\\ \\__\\\\ \\__\\ \\_______\\ \\__\\ \\__\\\n' +
    '    \\|_______|\\|_______|\\|__| \\|__|\\|_______|\\|__|\\|__|',
  'color: #d81b60; font-size: 14px; font-weight: bold;',
);

// 자바스크립트 코드에서 이미지 리소스 로드 테스트
// index.html 파일의 html 구조를 수정하셔도 됩니다.
const render = () => {
  const app = document.querySelector('#app');

  if (app) {
    app.innerHTML = App();
  }
};

render();

globalStore.subscribe(render);
bottomSheetStore.subscribe(render);

import { createCaruselBlock } from './createCarusel';
import { createMainSection } from './creatMainSection';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const mainPaige = createMainSection();

  mainPaige.render();
});

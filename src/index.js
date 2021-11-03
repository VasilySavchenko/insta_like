import { createMainSection } from './creatMainSection';
export const root = document.getElementById('root');
document.addEventListener('DOMContentLoaded', () => {
  const mainPaige = createMainSection();

  mainPaige.render();
});

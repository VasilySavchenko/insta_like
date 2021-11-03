import { createImageBlock } from './iphone_block';
import { createElement } from './utils';
import { interval } from './creatMainSection';
import { IMAGE_URL } from './constant';
export function createCaruselBlock() {
  const div = createElement('div');

  IMAGE_URL.forEach((src) => {
    const img = createImageBlock(src);
    img.classList.add('carusel_block');
    div.appendChild(img);
  });

  const imageArray = div.querySelectorAll('img');

  imageArray[3].classList.add('visible');

  let index = 3;
  interval = setInterval(() => {
    index++;
    imageArray.forEach((el) => {
      el.classList.remove('visible');
    });
    if (index >= imageArray.length) {
      index = 0;
    }

    imageArray[index].classList.add('visible');
  }, 2000);

  return div;
}

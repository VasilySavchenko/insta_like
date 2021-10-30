import { createImageBlock } from './iphone_block';
import { createElement } from './utils';
export function createCaruselBlock() {
  const div = createElement('div');

  const imageSrc = [
    'https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg',
    'https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg',
    'https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg',
    'https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg',
  ];
  imageSrc.forEach((src) => {
    const img = createImageBlock(src);
    img.classList.add('carusel_block');
    div.appendChild(img);
  });

  const imageArray = div.querySelectorAll('img');

  imageArray[3].classList.add('visible');

  let index = 3;
  let interval = setInterval(() => {
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

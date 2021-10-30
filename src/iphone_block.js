import { createCaruselBlock } from './createCarusel';
export function createIPhoneBlock() {
  const iPhoneBlock = document.createElement('div');
  iPhoneBlock.appendChild(createCaruselBlock());
  iPhoneBlock.classList.add('first_div');

  const div = document.createElement('div');
  div.classList.add('main-carusel-block');

  const iPhonePicture = createImageBlock(
    'https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png'
  );
  iPhonePicture.classList.add('img_style');
  div.appendChild(iPhonePicture);
  iPhoneBlock.appendChild(div);
  return iPhoneBlock;
}

export function createImageBlock(src) {
  const img = document.createElement('img');
  img.src = src;

  return img;
}

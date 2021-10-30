import { createElement } from './utils';
export function createFooter() {
  const footerText = createElement('a');
  const footer = createElement('footer', {}, [footerText]);
  footerText.href = 'https://github.com/VasylSavchecnko/insta_like';
  let now = new Date();

  footerText.innerText = `\u00A9 by Vasyl, ${now.getFullYear()}`;

  return footer;
}

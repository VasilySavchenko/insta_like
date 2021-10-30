import { createIPhoneBlock } from './iphone_block';
import { createAuthorizationSection } from './createSingForm';
import { createFooter } from './footer';
import { createElement } from './utils';
export function createMainSection() {
  const wrapper = createElement('div', { class: 'wrapper' }, [
    createIPhoneBlock(),
    createAuthorizationSection(),
  ]);
  const mainSection = createElement('section', { class: 'main_section' }, [
    wrapper,
  ]);

  return {
    render() {
      root.appendChild(mainSection);
      root.appendChild(createFooter());
    },
    remuve() {
      root.innerHTML = '';
    },
  };
}

const root = document.getElementById('root');
const mainSection = document.createElement('section');
const instaLogo = document.createElement('img');
const instaNameLogo = document.createElement('img');

instaNameLogo.src =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png';
instaLogo.src =
  'https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png';

function creetDivElement() {
  let div = document.createElement('div');
  return div;
}
const firstDivInWrapper = creetDivElement();
const secondDivInWrapper = creetDivElement();
const divInForm = creetDivElement();
const wrapper = creetDivElement();

function createInput() {
  const input = document.createElement('input');

  return input;
}

function createForm() {
  const signInForm = document.createElement('form');
  const inputEmail = createInput();
  inputEmail.placeholder = 'Email-Name';
  inputEmail.type = 'email';
  inputEmail.name = 'email';
  //
  const inputPasword = createInput();
  inputPasword.placeholder = 'Pasword';
  inputPasword.type = 'password';
  inputPasword.name = 'pasword';
  //
  const inputSubmit = createInput();
  inputSubmit.type = 'submit';
  inputSubmit.value = 'Login';

  //
  signInForm.appendChild(instaNameLogo);
  signInForm.appendChild(divInForm);
  divInForm.appendChild(inputEmail);
  divInForm.appendChild(inputPasword);
  divInForm.appendChild(inputSubmit);
  return signInForm;
}

function addCssClass() {
  firstDivInWrapper.classList.add('first_div');
  secondDivInWrapper.classList.add('second_div');
  instaLogo.classList.add('img_style');
  wrapper.classList.add('wrapper');
  instaNameLogo.classList.add('insta_name_logo');
  divInForm.classList.add('form_class');
}
addCssClass();

function render() {
  firstDivInWrapper.appendChild(instaLogo);
  secondDivInWrapper.appendChild(createForm());
  root.appendChild(mainSection);
  mainSection.appendChild(wrapper);
  wrapper.appendChild(firstDivInWrapper);
  wrapper.appendChild(secondDivInWrapper);
}

render();

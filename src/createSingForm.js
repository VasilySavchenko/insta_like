import { createElement } from './utils';
export function createAuthorizationSection() {
  const instaHeadingName = createElement('h1');
  const instaDivHeadingName = createElement('div', {}, [instaHeadingName]);
  instaHeadingName.innerText = 'Instagram';
  const divInAuthorizationContainre = createElement(
    'div',
    { class: 'authorization_form' },
    [instaDivHeadingName, createSignInForm()]
  );

  const authorizationContainer = createElement('div', { class: 'second_div' }, [
    divInAuthorizationContainre,
  ]);

  return authorizationContainer;
}

export function createSignInFormInput(inputObject) {
  const input = document.createElement('input');
  input.type = inputObject.type;

  if (typeof inputObject.value !== 'undefined') {
    input.value = inputObject.value;
  }

  if (typeof inputObject.placeholder !== 'undefined') {
    input.placeholder = inputObject.placeholder;
  }

  if (typeof inputObject.name !== 'undefined') {
    input.name = inputObject.name;
  }

  return input;
}

function createSignInForm() {
  const signInForm = document.createElement('form');
  signInForm.classList.add('form_class');
  const emailInput = createSignInFormInput({
    type: 'email',
    placeholder: 'Email-Name',
    name: 'email',
  });
  const passwordInput = createSignInFormInput({
    type: 'password',
    placeholder: 'Password',
    name: 'password',
  });
  const submitButton = createSignInFormInput({
    type: 'submit',
    value: 'Login',
  });

  signInForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fields = event.target.querySelectorAll(
      'input[type=email], input[type=password]'
    );
    const values = {};

    fields.forEach((field) => {
      values[field.name] = field.value;
    });
    console.log(values);
  });

  signInForm.appendChild(emailInput);
  signInForm.appendChild(passwordInput);
  signInForm.appendChild(submitButton);

  return signInForm;
}

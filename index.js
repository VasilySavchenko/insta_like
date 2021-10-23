const root = document.getElementById('root');

function createMainSection() {
  const mainSection = document.createElement('section');
  mainSection.classList.add('main_section');

  function createCaruselBlock() {
    const div = document.createElement('div');

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

    return div;
  }

  function createIPhoneBlock() {
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

  function createImageBlock(src) {
    const img = document.createElement('img');
    img.src = src;

    return img;
  }

  const authorizationContainer = document.createElement('div');

  const divInAuthorizationContainre = document.createElement('div');

  const instaDivHeadingName = document.createElement('div');

  const instaHeadingName = document.createElement('h1');

  instaHeadingName.innerText = 'Instagram';

  authorizationContainer.appendChild(divInAuthorizationContainre);

  divInAuthorizationContainre.appendChild(instaDivHeadingName);

  divInAuthorizationContainre.classList.add('authorization_form');

  instaDivHeadingName.appendChild(instaHeadingName);

  authorizationContainer.classList.add('second_div');

  const wrapper = document.createElement('div');

  wrapper.classList.add('wrapper');

  //
  function createSignInFormInput(inputObject) {
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
  mainSection.appendChild(wrapper);
  wrapper.appendChild(createIPhoneBlock());
  wrapper.appendChild(authorizationContainer);
  divInAuthorizationContainre.appendChild(createSignInForm());

  return mainSection;
}

root.appendChild(createMainSection());

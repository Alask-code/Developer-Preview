const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = () => {
  const currentPlaceholder = input.placeholder;
  const isInputEmpty = input.value !== '' ? true : false;
  const inputUrl = input.value;

  if (isInputEmpty) {
    document.location.href = inputUrl;
  } else {
    input.classList.toggle('empty');
    input.placeholder = 'URL Cannot be empty.';

    setTimeout(() => {
      input.classList.toggle('empty');
      input.placeholder = currentPlaceholder;
    }, 500);
  }
};

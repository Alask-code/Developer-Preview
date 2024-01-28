const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = () => {
  const isInputEmpty = input.value !== '' ? true : false;
  const inputUrl = input.value;

  if (isInputEmpty) {
    document.location.href = inputUrl;
  } else {
    input.classList.toggle('empty');
    input.placeholder = 'URL Não Pode Estar Vazia.';

    setTimeout(() => {
      input.classList.toggle('empty');
      input.placeholder = 'Digite ou Cole sua URL';
    }, 500);
  }
};

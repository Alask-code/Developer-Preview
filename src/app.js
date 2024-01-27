const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  if (input.value !== '') {
    const url = input.value;
    document.location.href = url;
  } else {
    const url = input;
    url.classList.toggle('empty');
    url.placeholder = 'URL Não Pode Estar Vazia.';

    setTimeout(() => {
      url.classList.toggle('empty');
      url.placeholder = 'Digite ou Cole sua URL';
    }, 500);
  }
});

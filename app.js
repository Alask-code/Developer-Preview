const { log: alert } = require('console');

document.querySelector('button')
  .addEventListener('click', () => {
    alert('button clicked.');
    if (document.querySelector('input').value !== '') {
      const url = document.querySelector('input').value;
      document.location.href = url;
      alert('const url defined: ' + url);
    } else {
      alert('const url cannot be blank.');
    }
  });

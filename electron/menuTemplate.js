const { app } = require('electron');
module.exports = [
  {
    label: 'Voltar a Tela Inicial',
    click: () => {
      const win = require('./BrowserWindow');
      win.loadFile('index.html');
    }
  },
  {
    label: 'Sair',
    click: () => { app.quit(); }
  }
];

const { app } = require('electron');
const win = require('./BrowserWindow');
module.exports = [
  {
    label: 'Abrir Ferramentas de Desenvolvedor',
    click: () => {
      win.openDevTools({ mode: 'detach' });
    }
  },
  {
    label: 'Recarregar a Página',
    click: () => {
      win.reload();
    }
  },
  {
    label: 'Recarregar o Aplicativo',
    click: () => {
      app.quit();
      app.relaunch();
    }
  },
  {
    label: 'Voltar a Tela Inicial',
    click: () => {
      win.loadFile('src/index.html');
    }
  },
  { type: 'separator' },
  {
    label: 'Sair',
    click: () => { app.quit(); }
  }
];

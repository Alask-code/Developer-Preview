const { app } = require('electron');
const win = require('./BrowserWindow');
module.exports = [
  {
    label: 'Open Developer Tools',
    click: () => {
      win.openDevTools({ mode: 'detach' });
    }
  },
  {
    label: 'Reload',
    click: () => {
      win.reload();
    }
  },
  {
    label: 'Reload Application',
    click: () => {
      app.quit();
      app.relaunch();
    }
  },
  {
    label: 'Back to Home',
    click: () => {
      win.loadFile('index.html');
    }
  },
  { type: 'separator' },
  {
    label: 'Exit',
    click: () => { app.quit(); }
  }
];

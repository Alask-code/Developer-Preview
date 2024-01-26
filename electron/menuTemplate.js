const { app } = require('electron');
module.exports = [
  {
    label: 'Back to Home',
    click: () => {
      const win = require('./BrowserWindow');
      win.loadFile('index.html');
    }
  },
  {
    label: 'Exit',
    click: () => { app.quit(); }
  }
];

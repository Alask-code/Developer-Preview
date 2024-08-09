const { app } = require('electron');
const win = require('./BrowserWindow');
module.exports = [
  {
    label: 'Developer Tools',
    submenu: [
      {
        label: 'Open Chrome Dev Tools',
        click: () => {
          win.openDevTools({ mode: 'detach' });
        }
      },
      {
        label: 'Reload Page',
        click: () => {
          win.reload();
        }
      }
    ]
  },
  {
    label: 'Reload Application',
    click: () => {
      app.quit();
      app.relaunch();
    }
  },
  {
    label: 'Back to Home page',
    click: () => {
      win.loadFile('src/index.html');
    }
  },
  { type: 'separator' },
  {
    label: 'Close',
    click: () => { app.quit(); }
  }
];

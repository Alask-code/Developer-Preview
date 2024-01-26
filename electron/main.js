try { require('electron-reload')('../'); } catch (error) {}

const config = require('dotenv');
config.config();

const { app, Menu } = require('electron');
const ControlWindow = require('./ControlWindow');

function App () {
  function setOnPosition () {
    const { getPosition } = ControlWindow(win, tray);
    const { x, y } = getPosition();
    win.setPosition(x, y, false);
  }

  const win = require('./BrowserWindow');
  const tray = require('./Tray');

  setOnPosition();
  const { toggle } = ControlWindow(win, tray);

  tray.on('click', () => {
    toggle();
  });

  tray.on('right-click', () => {
    const menuTemplate = require('./menuTemplate');
    const contextMenu = Menu.buildFromTemplate(menuTemplate);

    tray.setContextMenu(contextMenu);
    tray.popUpContextMenu();
  });
}

app.whenReady().then(() => {
  App();
});

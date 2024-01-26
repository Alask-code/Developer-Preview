const { Tray } = require('electron');
const { resolve } = require('path');
const icon = resolve(__dirname, '../', 'assets', 'icon.png');

function createTray () {
  const tray = new Tray(icon);
  tray.setToolTip('Open Preview, Right-click to See Options.');
  return tray;
}

module.exports = createTray();

const remote = require('@electron/remote')



function fullscreen(){
    var window = remote.getCurrentWindow();
    window.focus();
    window.setMinimumSize(1600, 800);
    window.setResizable(true);
    window.setSize(1600, 800);
    window.maximize();
}

document.getElementById('min').addEventListener('click', minWindow);
document.getElementById('max').addEventListener('click', maxWindow);
document.getElementById('exit').addEventListener('click', exitWindow);

function minWindow () {
    var window = remote.BrowserWindow.getFocusedWindow();
    window.minimize();
}

function maxWindow () {
    var window = remote.BrowserWindow.getFocusedWindow();
    if(window.isMaximized()){
        window.unmaximize();
    }else{
        window.maximize();
    }
}

function exitWindow () {
    var window = remote.BrowserWindow.getFocusedWindow();
    window.close();
}
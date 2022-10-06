let $ = require('../../node_modules/jquery/dist/jquery.js');

i=0;
setInterval(() => {
    i++;
    $('.progress-bar').css('width', i+'%').attr('aria-valuenow', i);
    if(i == 140){
        var audio = new Audio('../AUDIO/startup.mp3');
    audio.volume = 0.5;
    audio.play();
    }
    if(i >= 185){
        window.location.href = '../HTML/main.html';
    }
}, 20);
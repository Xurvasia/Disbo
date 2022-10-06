const exec = require('child_process').exec;
const execFile = require('child_process').execFile;

window.addEventListener('DOMContentLoaded', () => {


  //START BOT
  exec('node bot.js',
  (error, stdout, stderr) => {
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
      if (error !== null) {
          console.log(`exec error: ${error}`);
      }
});


  //START WEB SERVER
  exec('node webserver.js',
  (error, stdout, stderr) => {
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
      if (error !== null) {
          console.log(`exec error: ${error}`);
      }
});


//START DATABASE
execFile('./DATABASE/database.exe',
  (error, stdout, stderr) => {
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
      if (error !== null) {
          console.log(`exec error: ${error}`);
      }
});

})
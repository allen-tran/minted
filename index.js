const fs = require('fs');
const readline = require('readline');
const prompt = require('prompt')
const path = require('path');
var process = require("process");

const moveFrom = './'
const goThroughEachFile = () => {
  
  displayUI()

  fs.readdir(moveFrom, function (err, files) {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }
    console.log('Searching for files...\n');
    console.log('Found', files, '\n');
    for (let file of files){
      if (file === 'node_modules' || file === 'README.md' || file === 'LICENSE' || file === 'index.js' || file === '.git' || file === '.gitignore' || file.toString().slice(0, 7)=== 'package') continue;
      // Make one pass and make the file complete
      var fromPath = path.join(moveFrom, file);
      console.log(file);
      // var toPath = path.join(moveTo, file);
      processLineByLine(file);
      
      // readLines(file)
      fs.stat(fromPath, function (error, stat) {

        if (error) {
          console.error("Error stating file.", error);
          return;
        }
      });
    }
  });
}

async function processLineByLine(file) {
  
  const fileStream = fs.createReadStream(file);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  let lineCount = 0;
  let consoleCount = 0;
  for await (const line of rl) {
    lineCount++;
    if (line.includes('console.log')){
        consoleCount++;
        console.log(`Line ${lineCount}: ${line.trim()}`);
    }
  }
  if (consoleCount > 0) console.log(`\n${consoleCount} console.logs detected!\n`);

}

const displayUI = () => {
  console.log('\n----------------');
  console.log('    Minting...');
  console.log('----------------\n');
}

goThroughEachFile();
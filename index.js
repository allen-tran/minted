const fs = require('fs');
const readline = require('readline');
const prompt = require('prompt')

async function processLineByLine() {
  const fileStream = fs.createReadStream('random.js');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  let lineCount = 0;
  let consoleCount = 0;
  console.log('\n----------------');
  console.log('    Minting...');
  console.log('----------------\n');
  for await (const line of rl) {
    lineCount++;
    // Each line in input.txt will be successively available here as `line`.
    if (line.includes('console.log')){
        consoleCount++;
        console.log(`Line ${lineCount}: ${line.trim()}`);
    }
  }
  if (consoleCount > 0) console.log(`\n${consoleCount} console.logs detected!\n`);
  console.log('Do you wish to remove them? [Y, n]');
  prompt.start()
  prompt.get(['SELECTION'], function (err, result) {
    if (result.SELECTION == '') console.log('Default yes');
    if (result.SELECTION.includes('n', 'N')) return


  });
}

processLineByLine();
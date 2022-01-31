// store input numbers
const prompt = require('prompt')
prompt.start()
prompt.get(['num1', 'num2'], function (err, result) {
    // console.log('Num1: ' + result.num1);
    // console.log('Num2: ' + result.num2);
    const sum = parseInt(result.num1) + parseInt(result.num2);
    if (sum) console.log(`The sum of ${result.num1} and ${result.num2} is ${sum}`);
  });
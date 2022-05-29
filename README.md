# Minted! - `console.log()` Removal 🚮
Minted is a command line tool that detects console logs and removes them for you! This will make sure they never end up in your diff again. Click [here](https://www.npmjs.com/package/minted) to see it on npm 📦

![ezgif com-gif-maker (1) (1)](https://user-images.githubusercontent.com/63386979/170893319-7513228f-6eef-42b4-9ece-0ff4068be701.jpg)

## Installation ⬇️
```cmd
$ npm i minted --save
```

## Usage 🪄
```cmd
$ npm run mint
```

## Demo 🤹🏼‍♂️

#### Example code with console.logs
```js
// store input numbers
const prompt = require('prompt')
prompt.start()
prompt.get(['num1', 'num2'], function (err, result) {
    // console.log('Num1: ' + result.num1);
    // console.log('Num2: ' + result.num2);
    const sum = parseInt(result.num1) + parseInt(result.num2);
    if (sum) console.log(`The sum of ${result.num1} and ${result.num2} is ${sum}`);
  });
```
#### Example output from Minted
<img width="643" alt=" 2022-01-31 at 3 34 40 PM" src="https://user-images.githubusercontent.com/63386979/151890953-82f1a85c-a3bc-40aa-89d1-8eefea0792c4.png">

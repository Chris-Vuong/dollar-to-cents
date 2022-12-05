import readline from 'readline';

// User enters a float.
var rl = readline.createInterface(
  process.stdin, process.stdout);

function input() {
  rl.question('Please enter a number:', (number) => {
    return parseFloat(number);
  })
}

console.log(input());
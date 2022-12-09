import readline from 'readline';
import change from './change.js'

const { divideQuarter, divideDime, divideNickel } = change;

const rl = readline.createInterface(
  process.stdin, process.stdout);

// User enters a float.
// TODO: add error handling and not print undefined. add
function input() {
  rl.question('Please enter a dollar amount:', (value) => {
    if (Number(value)) {
      const RESPONSE = parseFloat(value) * 100;
      const quarters = divideQuarter.operation(RESPONSE);
      const dimes = divideDime.operation(quarters.balance);
      const nickels = divideNickel.operation(dimes.balance);
      const pennies = nickels.balance;
      console.log('There are...')
      console.log(
        `\nQuarters: ${quarters.numberOfQuarters ? quarters.numberOfQuarters : 0}
        \nDimes: ${dimes.numberOfDimes ? dimes.numberOfDimes : 0}
        \nNickels: ${nickels.numberOfNickels ? nickels.numberOfNickels : 0}
        \nPennies: ${pennies ? pennies : 0}`)
        process.exit()
    } else {
      console.log('Please enter a numeric value!');
      input()
    }
  })
}

input()
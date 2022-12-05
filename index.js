import readline from 'readline';
import change from './change.js'

const { divideQuarter, divideDime, divideNickel } = change;

const rl = readline.createInterface(
  process.stdin, process.stdout);

// User enters a float.
// TODO add error handling and not print undefined.
function input() {
  rl.question('Please enter a number:', (number) => {
    const RESPONSE = parseFloat(number);
    const quarters = divideQuarter.operation(RESPONSE);
    const dimes = divideDime.operation(quarters.balance);
    const nickels = divideNickel.operation(dimes.balance);
    const pennies = nickels.balance;
    console.log('There are...')
    console.log(`Quarters: ${quarters.numberOfQuarters}, Dimes: ${dimes.numberOfDimes}, Nickels: ${nickels.numberOfNickels}
    and Pennies: ${pennies}`) 
  })
}

input()
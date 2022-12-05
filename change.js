export default {
    divideQuarter: {
      operation: (value) => {
        if (value < 25) { return {balance: value}}
        else {
          const mod = value % 25;
          return {
            numberOfQuarters: (value - mod) / 25,
            balance: mod
        };
      }
    }
  },
  divideDime: {
    operation: (value) => {
      if (value < 10) { return { balance: value } }
      else {
        const mod = value % 10;
        return {
          numberOfDimes: (value - mod) / 10,
          balance: mod
        };
      };
    }
  },
  divideNickel: {
    operation: (value) => {
      if (value < 5) { return { balance: value } }
      else {
        const mod = value % 5;
        return {
          numberOfNickels: (value - mod) / 5,
          balance: mod
        };
      };
    }
  }
}
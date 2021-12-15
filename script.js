const account = {
  accountName: "Elin's bank account",
  balance: 100,
  getBalance: function () {
    return this.balance;
  },

  deposit: function () {
    const depositAmount = parseFloat(prompt("How much would you like to deposit?"));
    if (!isNaN(depositAmount) && depositAmount > 0) {
      this.balance = this.getBalance() + depositAmount;
    } else { 
      this.accountError("Please enter a valid sum to deposit");
      this.deposit();
    }
  },

  withdrawal: function () {
    const withdrawalAmount = parseInt(prompt("How much would you like to withdraw?"));
    if (!isNaN(withdrawalAmount) && withdrawalAmount > 0 && this.getBalance() > withdrawalAmount) {
      this.balance = this.getBalance() - withdrawalAmount;
    } else if (this.getBalance() < withdrawalAmount) {
      this.accountError("You do not have enough money");
      this.withdrawal();
    } else { 
      this.accountError("Please enter a valid sum to withdraw");
      this.withdrawal();
    } 
  },

  getAccountName: function () {
    alert(this.accountName);
  },

  accountError: (errorMessage) => {
    alert(errorMessage);
  },

  exitAccount: function () {
    alert("Goodbye");
    close();
  },
}

function atm() {
  let choice = parseInt(prompt("Select a choice. 1) See balance, 2) Make a deposit, 3) Make a withdrawal, 4) Get account name, 5) Exit"));
  
  //prompt user for choice.
  switch (choice) {
    case 1: 
      parseInt(prompt("This is your balance: ", account.getBalance()));
      this.atm();
      break;
    case 2:
      account.deposit();
      this.atm();
      break;
    case 3:
      account.withdrawal();
      this.atm();
      break;
    case 4:
      account.getAccountName();
      this.atm();
      break;
    case 5:
      account.exitAccount();
      break;
  }
}

this.atm();
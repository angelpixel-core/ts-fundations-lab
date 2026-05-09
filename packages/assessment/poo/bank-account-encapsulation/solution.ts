export class BankAccount {
  private balance: number;

  constructor(initialBalance = 0) {
    if (initialBalance < 0) {
      throw new Error("El saldo inicial no puede ser negativo");
    }

    this.balance = initialBalance;
  }

  deposit(amount: number): boolean {
    if (amount <= 0) {
      return false;
    }

    this.balance += amount;
    return true;
  }

  withdraw(amount: number): boolean {
    if (amount <= 0 || amount > this.balance) {
      return false;
    }

    this.balance -= amount;
    return true;
  }

  getBalance(): number {
    return this.balance;
  }
}

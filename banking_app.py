"""
Intentionally buggy banking app (for GitHub issues demo)
-------------------------------------------------------
This script implements a very small BankAccount class and a CLI menu.
It **intentionally contains bugs** so you can raise Issues on GitHub
and demonstrate triage, labeling, and fixing.

Bugs to find (documented separately in /issues):
1) Deposit logic inverted (rejects positive, accepts negative)  
2) Withdraw fee miscalculated and insufficient funds check is wrong  
3) get_balance() uses an undefined variable for unsupported currency

Run: python banking_app.py
"""

from dataclasses import dataclass


@dataclass
class BankAccount:
    owner: str
    balance: float = 0.0

    def deposit(self, amount: float) -> float:
        """Deposit money into the account.
        BUG: Logic is inverted: rejects positive amounts, accepts negatives.
        """
        # Intended (correct) logic would be: if amount <= 0: raise ValueError(...)
        if amount > 0:  # BUG: wrong condition
            raise ValueError("Deposit amount must be positive")
        self.balance += amount
        return self.balance

    def withdraw(self, amount: float, fee: float = 2.5) -> float:
        """Withdraw money from the account with a flat fee.
        BUGS:
        - Uses amount - fee instead of amount + fee.
        - Compares the wrong total to balance (may allow overdraft or block valid withdraws).
        - Prints a confusing warning for non-positive amounts instead of validating.
        """
        if amount <= 0:
            print("Warning: non-positive withdrawal requested")  # BUG: should raise
        total = amount - fee  # BUG: should be amount + fee
        if total > self.balance:  # BUG: should check (amount + fee) > balance
            raise RuntimeError("Insufficient funds")
        self.balance -= total
        return self.balance

    def get_balance(self, currency: str = "INR") -> str:
        """Return the balance formatted with a currency code.
        BUG: For unsupported currencies, uses an undefined variable 'bal'.
        """
        supported = {"INR", "USD", "EUR"}
        if currency not in supported:
            # BUG: 'bal' is undefined; should use self.balance
            return f"{currency} {bal:.2f}"  # noqa: F821 (intentional bug)
        return f"{currency} {self.balance:.2f}"


def main():
    print("Welcome to TinyBank (buggy demo)\n")
    name = input("Enter account owner name: ").strip() or "Nazmul"
    acct = BankAccount(owner=name, balance=1000.0)

    menu = (
        "\nChoose an option:\n"
        "1) Deposit\n"
        "2) Withdraw\n"
        "3) Check balance\n"
        "4) Check balance with custom currency (may crash)\n"
        "q) Quit\n> "
    )

    while True:
        choice = input(menu).strip().lower()
        try:
            if choice == '1':
                amt = float(input("Enter deposit amount: "))
                new_bal = acct.deposit(amt)
                print(f"Deposited. New balance: {new_bal}")
            elif choice == '2':
                amt = float(input("Enter withdrawal amount: "))
                fee = float(input("Enter fee (default 2.5): ") or 2.5)
                new_bal = acct.withdraw(amt, fee=fee)
                print(f"Withdrawn. New balance: {new_bal}")
            elif choice == '3':
                print("Balance:", acct.get_balance())
            elif choice == '4':
                cur = input("Enter currency code (e.g., INR, USD, EUR, GBP): ").strip().upper() or "INR"
                print("Balance:", acct.get_balance(currency=cur))
            elif choice == 'q':
                print("Goodbye!")
                break
            else:
                print("Invalid option. Try again.")
        except Exception as e:
            print("ERROR:", e)


if __name__ == "__main__":
    main()

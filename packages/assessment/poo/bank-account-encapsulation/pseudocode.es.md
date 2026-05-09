# Pseudocodigo (ES)

1. Crear clase `BankAccount` con estado privado `balance`.
2. Constructor inicia con balance cero o valor inicial valido.
3. `deposit(amount)`:
   - validar `amount > 0`
   - sumar al balance
4. `withdraw(amount)`:
   - validar `amount > 0`
   - validar `amount <= balance`
   - restar al balance
5. `getBalance()` devuelve saldo actual sin exponer mutacion directa.

## Idea clave

La encapsulacion protege invariantes (ejemplo: no saldo negativo por operacion invalida).

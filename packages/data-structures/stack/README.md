# Stack

Implementacion de pila (LIFO: Last In, First Out) en TypeScript.

## Objetivo

Este modulo sirve para practicar:

- API basica de `Stack<T>`
- implementacion mutable eficiente
- alternativa inmutable para enfoque funcional
- `generic constraints` con datos serializables

## Estructura

```text
stack/
  src/
    stack.interface.ts
    array-stack.ts
    immutable-stack.ts
    serializable-stack.ts
    index.ts
  tests/
    stack.examples.ts
```

## Complejidad esperada

Para crear una pila inmutable vacia, usar `ImmutableStack.createEmpty<T>()`.

Para `ArrayStack` y `SerializableStack`:

- `push`: O(1) amortizado
- `pop`: O(1)
- `peek`: O(1)
- `size`: O(1)
- `isEmpty`: O(1)

Para `ImmutableStack`:

- `push`: O(n) por copia del arreglo
- `pop`: O(n) por `slice`
- `peek`: O(1)
- `size`: O(1)
- `isEmpty`: O(1)

## Nota de entrevista

Explicar por que elegir mutable vs inmutable demuestra criterio:

- mutable: mejor rendimiento y menor allocacion
- inmutable: mayor seguridad de estado y composicion funcional

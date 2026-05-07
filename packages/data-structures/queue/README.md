# Queue

Implementacion de cola (FIFO: First In, First Out) en TypeScript.

## Objetivo

Este modulo sirve para practicar:

- API basica de `Queue<T>`
- implementacion mutable didactica
- alternativa inmutable para enfoque funcional
- `generic constraints` con datos serializables

## Estructura

```text
queue/
  src/
    queue.interface.ts
    array-queue.ts
    optimized-queue.ts
    immutable-queue.ts
    serializable-queue.ts
    index.ts
  tests/
    queue.examples.ts
```

## Complejidad esperada

Para `ArrayQueue` y `SerializableQueue`:

- `enqueue`: O(1)
- `dequeue`: O(n) por uso de `shift`
- `peek`: O(1)
- `size`: O(1)
- `isEmpty`: O(1)

Para `OptimizedQueue`:

- `enqueue`: O(1)
- `dequeue`: O(1) amortizado
- `peek`: O(1)
- `size`: O(1)
- `isEmpty`: O(1)

Para `ImmutableQueue`:

- `enqueue`: O(n) por copia del arreglo
- `dequeue`: O(n) por `slice`
- `peek`: O(1)
- `size`: O(1)
- `isEmpty`: O(1)

## Nota de entrevista

La version didactica es ideal para explicar la semantica FIFO.
La version optimizada muestra criterio de rendimiento al evitar `shift`.

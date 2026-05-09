# Analisis

## Complejidad

- Tiempo: O(n), donde `n` es la cantidad de elementos del arreglo.
- Espacio: O(k), donde `k` es la cantidad de valores distintos.

## Trampas comunes

- Usar dos loops anidados (sube a O(n^2)).
- Olvidar inicializar la clave antes de incrementar.

## Traduccion academica

Se aplica la tecnica de frequency counter con tabla hash para contar ocurrencias en una pasada.

# Analisis

## Complejidad

- Tiempo: O(n) por dos recorridos lineales.
- Espacio: O(k), donde `k` es cantidad de caracteres distintos.

## Trampas comunes

- Usar `indexOf` dentro de loop (cae en O(n^2)).
- Olvidar devolver `undefined` cuando no hay unico.

## Traduccion academica

Este problema evalua combinacion de tabla hash + preservacion de orden.

# Analisis

## Complejidad

- Tiempo: O(n), se recorre una vez el string.
- Espacio: O(n) en el peor caso (todas aperturas).

## Trampas comunes

- Validar solo conteo de simbolos y no orden de cierre.
- No contemplar cierre sin apertura previa.

## Traduccion academica

El stack modela naturalmente escenarios LIFO para aperturas/cierres anidados.

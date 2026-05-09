# Analisis

## Respuesta

Falso.

## Justificacion

La eficiencia de queue depende de la implementacion concreta:

- Con arreglo + `shift`, `dequeue` puede costar O(n).
- Con puntero `head`, `dequeue` puede ser O(1) amortizado.

La afirmacion usa un absoluto ("siempre") y confunde concepto de estructura con
detalle de implementacion.

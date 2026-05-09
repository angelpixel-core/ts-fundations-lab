# Pseudocodigo (ES)

1. Crear un diccionario vacio llamado `frecuencias`.
2. Recorrer cada `numero` en `numbers`.
3. Si `numero` no existe en `frecuencias`, inicializarlo en 0.
4. Incrementar en 1 el valor de `frecuencias[numero]`.
5. Devolver `frecuencias`.

## Idea clave

Cada numero se procesa una sola vez y se actualiza su contador en acceso constante promedio.

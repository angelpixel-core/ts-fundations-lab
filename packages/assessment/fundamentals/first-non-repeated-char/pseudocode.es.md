# Pseudocodigo (ES)

1. Crear diccionario `count` vacio.
2. Recorrer cada caracter de `text` y acumular frecuencias.
3. Recorrer nuevamente `text` en el mismo orden.
4. Si `count[char]` es 1, devolver ese `char`.
5. Si termina el recorrido sin encontrar, devolver `undefined`.

## Idea clave

La primera pasada cuenta; la segunda respeta orden de aparicion.

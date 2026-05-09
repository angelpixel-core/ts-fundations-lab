# Pseudocodigo (ES)

1. Crear diccionario `seenIndex` vacio.
2. Recorrer arreglo con indice `i`.
3. Calcular `needed = target - numbers[i]`.
4. Si `needed` existe en `seenIndex`, devolver `[seenIndex[needed], i]`.
5. Guardar `numbers[i]` con indice `i` en `seenIndex`.
6. Si termina el recorrido sin match, devolver `undefined`.

## Idea clave

Transformar busqueda doble en busqueda simple con hash map.

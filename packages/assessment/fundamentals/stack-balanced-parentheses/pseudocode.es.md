# Pseudocodigo (ES)

1. Crear stack vacio.
2. Definir mapa de cierres a aperturas (`)` -> `(`, `]` -> `[`, `}` -> `{`).
3. Recorrer cada caracter de `input`.
4. Si es apertura, push en stack.
5. Si es cierre:
   - si stack esta vacio, devolver `false`.
   - hacer pop y validar que coincida con la apertura esperada.
6. Al terminar, devolver `true` solo si stack quedo vacio.

## Idea clave

La validacion depende del orden de cierre, no solo de la cantidad.

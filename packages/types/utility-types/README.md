# Utility Types

Implementacion de utility types clasicos para practicar TypeScript avanzado.

## Objetivo

Este submodulo demuestra como construir tipos utilitarios con mapped types:

- `MyPartial<T>`
- `MyReadonly<T>`
- `MyPick<T, K>`

## Estructura

```text
utility-types/
  src/
    my-partial.ts
    my-readonly.ts
    my-pick.ts
    index.ts
  tests/
    utility-types.test.ts
```

## Nota de entrevista

Poder reconstruir estos tipos desde cero es una senal fuerte de dominio en TypeScript,
porque muestra manejo de `keyof`, `in` y restricciones de generics.

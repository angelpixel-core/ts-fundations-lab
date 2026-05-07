# Type Testing

Helpers para hacer assertions de tipos en compile-time.

## Objetivo

Permitir validaciones puramente de tipos, sin depender de runtime:

- `Equal<A, B>`: compara dos tipos y devuelve `true` si son equivalentes.
- `Expect<T extends true>`: fuerza error de compilacion si `T` no es `true`.

## Estructura

```text
type-testing/
  src/
    equal.ts
    expect.ts
    index.ts
```

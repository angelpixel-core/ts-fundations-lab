# Conditional Infer

Implementacion de utility types basados en conditional types e `infer`.

## Objetivo

Practicar extraccion de informacion de tipos de funciones y promises:

- `ReturnTypeCustom<T>`
- `ParametersCustom<T>`
- `AwaitedCustom<T>`

## Estructura

```text
conditional-infer/
  src/
    return-type-custom.ts
    parameters-custom.ts
    awaited-custom.ts
    index.ts
  tests/
    conditional-infer.test.ts
```

## Nota de entrevista

Dominar `infer` permite explicar como TypeScript "desarma" tipos complejos para
extraer partes reutilizables de forma segura.

Referencia recomendada de base conceptual:
`packages/types/fundamentals/README.md`

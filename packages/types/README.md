# Types

Modulo para practicar TypeScript avanzado:

- utility types custom
- deep types
- conditional types e infer

Cada subcarpeta debe incluir ejemplos explicables en entrevista.

## Plan de trabajo

### Estructura estandar por submodulo

- [ ] `utility-types/` con `src/`, `tests/`, `README.md`, `index.ts`
- [ ] `deep-types/` con `src/`, `tests/`, `README.md`, `index.ts`
- [ ] `conditional-infer/` con `src/`, `tests/`, `README.md`, `index.ts`

### Implementacion minima

- [ ] `utility-types`: `MyPartial`, `MyReadonly`, `MyPick`
- [ ] `deep-types`: `DeepReadonly`, `DeepPartial`
- [ ] `conditional-infer`: `ReturnTypeCustom`, `ParametersCustom`, `AwaitedCustom`

### Testing y validacion

- [ ] Agregar helpers de type testing (`Equal`, `Expect`) para assertions de tipos
- [ ] Agregar tests por modulo con Vitest (runtime solo cuando aplique)
- [ ] Ejecutar `npm run pipeline` y dejar todo en verde

### Documentacion

- [ ] README por submodulo con objetivo, ejemplos y nota de entrevista
- [ ] Mantener comentarios en espanol en los casos no obvios

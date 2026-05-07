# Types

Modulo para practicar TypeScript avanzado:

- utility types custom
- deep types
- conditional types e infer

## Mapa rapido de type keywords

| Keyword     | Idea central                        | Cuando usar                                          | Riesgo comun                         |
| ----------- | ----------------------------------- | ---------------------------------------------------- | ------------------------------------ |
| `any`       | Desactiva chequeo de tipos          | Migraciones puntuales o prototipos rapidos           | Pierdes seguridad estatica           |
| `unknown`   | Tipo desconocido pero seguro        | Entradas externas (API, JSON, user input)            | Necesita narrowing antes de usar     |
| `never`     | Valor imposible / rama inalcanzable | Exhaustividad en `switch`, funciones que no retornan | Confundirlo con "vacio"              |
| `undefined` | Ausencia de valor                   | Retornos opcionales y propiedades no seteadas        | Mezclarlo con propiedad opcional `?` |
| `null`      | Ausencia intencional explicita      | Contratos que distinguen "sin dato" de "no definido" | Mezclar reglas con `undefined`       |
| `void`      | No se usa valor de retorno          | Funciones con efectos laterales                      | Usarlo como sinonimo de `undefined`  |

Referencia extendida: `packages/types/fundamentals/README.md`

Cada subcarpeta debe incluir ejemplos explicables en entrevista.

## Plan de trabajo

### Estructura estandar por submodulo

- [x] `utility-types/` con `src/`, `tests/`, `README.md`, `index.ts`
- [x] `deep-types/` con `src/`, `tests/`, `README.md`, `index.ts`
- [x] `conditional-infer/` con `src/`, `tests/`, `README.md`, `index.ts`
- [x] `fundamentals/` con `README.md` de conceptos base y comparativas

### Implementacion minima

- [x] `utility-types`: `MyPartial`, `MyReadonly`, `MyPick`
- [x] `deep-types`: `DeepReadonly`, `DeepPartial`
- [x] `conditional-infer`: `ReturnTypeCustom`, `ParametersCustom`, `AwaitedCustom`

### Testing y validacion

- [x] Agregar helpers de type testing (`Equal`, `Expect`) para assertions de tipos
- [x] Agregar tests por modulo con Vitest (runtime solo cuando aplique)
- [x] Ejecutar `npm run pipeline` y dejar todo en verde

### Documentacion

- [x] README por submodulo con objetivo, ejemplos y nota de entrevista
- [x] Mantener comentarios en espanol en los casos no obvios

# ts-algo-lab

Laboratorio de preparacion tecnica en TypeScript orientado a entrevistas.

## Objetivo

Este repositorio prioriza lo que mas impacto tiene en screenings tecnicos:

- estructuras de datos con implementaciones solidas
- algoritmos clasicos para velocidad mental
- TypeScript avanzado aplicado a problemas reales
- codigo legible, testeable y facil de explicar

## Estructura base

```text
packages/
  data-structures/
  algorithms/
  types/
  shared/
Docs/
```

## Principios

- evitar sobrearquitectura
- separar fundamentos, algoritmos y tipos avanzados
- mantener cada modulo autocontenible
- usar comentarios solo cuando aporten contexto no obvio

## Ruta de estudio sugerida

1. Stack, Queue, LinkedList + utility types
2. Trees + DFS/BFS + recursion patterns
3. Graphs + BFS/DFS + topological sort
4. Heaps + priority queue + mock interviews

## Proximos pasos

- completar la primera estructura (`stack`)
- agregar tests y notas de complejidad
- incorporar configuracion de lint, test y CI

## Tooling

Comandos principales:

- `npm run pipeline`: ejecuta validacion completa (format, types, lint, tests)
- `npm run test`: ejecuta los tests con Vitest
- `npm run test:watch`: modo watch de Vitest
- `npm run lint`: valida reglas de ESLint
- `npm run typecheck`: verifica tipos con TypeScript
- `npm run format`: aplica formato con Prettier
- `npm run format:check`: verifica formato sin modificar archivos

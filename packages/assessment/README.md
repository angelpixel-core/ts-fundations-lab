# Assessment (Privado)

Este modulo es de entrenamiento privado para modo examen.

## Objetivo

Entrenar traduccion academica y velocidad mental sin foco en portfolio.

## Reglas de trabajo

- Resolver primero en pseudocodigo (`pseudocode.es.md`).
- Traducir despues a TypeScript (`solution.ts`).
- Cerrar con analisis (`analysis.md`): Big O, trampas y decisiones.
- Evitar sobre-ingenieria: priorizar claridad de examen.

## Guia de lectura por ejercicio

Usar siempre este orden para entrenar modo examen:

1. `statement.md`
   - Identificar objetivo, entradas/salidas y restricciones.
   - Marcar palabras trampa como "siempre", "nunca", "mas eficiente".
2. `pseudocode.es.md`
   - Resolver en lenguaje academico simple, sin sintaxis de framework.
   - Definir pasos y estructura de datos antes de codificar.
3. `solution.ts`
   - Traducir 1:1 el pseudocodigo a implementacion.
   - Evitar refactors prematuros: primero resolver correcto.
4. `analysis.md`
   - Validar complejidad temporal/espacial.
   - Registrar trampas detectadas y como evitarlas.

## Timing sugerido por intento

- 3-5 min: lectura del enunciado.
- 8-12 min: pseudocodigo.
- 10-20 min: implementacion.
- 3-5 min: analisis final y edge cases.

## Checklist rapido (antes de cerrar)

- [ ] Identifique correctamente el tipo de problema.
- [ ] Elegi la estructura de datos adecuada.
- [ ] Justifique Big O en forma simple.
- [ ] Revise edge cases basicos.
- [ ] Verifique si habia afirmaciones absolutas o ambiguas.

## Ruta recomendada de uso

- `fundamentals/`: velocidad mental y patrones clasicos.
- `poo/`: vocabulario academico de encapsulacion/cohesion/SRP.
- `traps/`: verdadero/falso contextual y lectura critica.
- `mock-120/`: simulacro completo con timer real.

## Metricas minimas por sesion

- Tiempo total por ejercicio.
- Error principal (lectura, complejidad, modelado, edge case).
- Regla academica aprendida en una linea.

Usar plantilla comun de registro:
`packages/assessment/postmortem.template.md`

## Plan de etapa actual

### Fundamentos

- [x] `array-frequency-counter`
- [x] `first-non-repeated-char`
- [x] `stack-balanced-parentheses`
- [x] `big-o-array-claims`
- [x] `duplicates-detector`
- [x] `reverse-string`
- [x] `two-sum-indexes`

### POO

- [x] `library-cohesion`
- [ ] Agregar 2 ejercicios mas de encapsulacion/composicion

### Trampas

- [x] `queue-efficiency-claim`
- [ ] Agregar 2 casos mas de verdadero/falso contextual

### Simulacros

- [x] `micro-45-01`
- [x] `micro-45-02`
- [ ] `micro-45-03` (POO + trampas)
- [ ] Simulacro completo `120 min`

## Estructura

```text
assessment/
  fundamentals/
  poo/
  traps/
  mock-120/
```

## Nota

Este contenido es privado de practica y no esta orientado a publicacion.

# Type Fundamentals

Guia de conceptos base para entender diferencias entre keywords clave de TypeScript.

## Comparativa rapida

| Keyword     | Que representa                        | Asignable a                                  | Asignable desde              | Caso tipico                            |
| ----------- | ------------------------------------- | -------------------------------------------- | ---------------------------- | -------------------------------------- |
| `any`       | Cualquier valor sin chequeo real      | Casi todo                                    | Casi todo                    | Migracion legacy temporal              |
| `unknown`   | Valor desconocido, seguro por defecto | Solo `unknown` y `any` (sin narrowing)       | Cualquier tipo               | Datos externos sin validar             |
| `never`     | Estado imposible / inalcanzable       | Todo tipo (subtipo de todos)                 | Solo `never`                 | Exhaustividad y errores fatales        |
| `undefined` | Valor ausente por default de JS       | `undefined`, `void`, uniones que lo incluyan | `undefined`                  | Propiedad sin valor / retorno opcional |
| `null`      | Ausencia intencional explicita        | `null` y uniones que lo incluyan             | `null`                       | Campo vacio con semantica de negocio   |
| `void`      | Retorno ignorado                      | `void`, `any`, `unknown`                     | `undefined` (en la practica) | Funciones side-effect                  |

## Reglas practicas

- Usa `unknown` en bordes del sistema (HTTP, archivos, JSON) y refina con type guards.
  Motivo: en esos puntos no controlas el origen del dato; `unknown` te obliga a validar
  antes de usar, evitando errores de runtime y acceso inseguro a propiedades.
- Evita `any` en codigo estable; si lo usas, deja comentario de deuda tecnica.
  Motivo: `any` desactiva la verificacion de tipos y permite operaciones invalidas sin
  aviso del compilador, lo que reduce la confiabilidad del codigo a mediano plazo.
- Usa `never` para verificar exhaustividad en uniones discriminadas.
  Motivo: cuando agregas un nuevo caso en una union, `never` hace fallar compilacion
  si olvidaste manejarlo, evitando ramas silenciosamente incompletas.
- Distingue `prop?: T` de `prop: T | undefined`.
  Motivo: modelan intenciones distintas en contratos de datos y APIs:
  - `prop?: T` significa que la propiedad puede no existir (objeto parcial).
  - `prop: T | undefined` significa que la propiedad existe, pero puede venir sin valor.
- Usa `null` solo cuando quieras expresar ausencia intencional de negocio.
  Motivo: `null` comunica decision semantica explicita ("sin valor por regla funcional"),
  mientras `undefined` suele representar ausencia tecnica o no inicializacion.
- Usa `void` para funciones donde el resultado no se consume.
  Motivo: `void` expresa que el objetivo es el efecto secundario (log, persistencia,
  evento), no el valor de retorno; esto hace el contrato de la funcion mas claro.

## Ejemplos cortos

### `unknown` con narrowing

```ts
function parseUser(input: unknown): { id: number } {
  if (
    typeof input === "object" &&
    input !== null &&
    "id" in input &&
    typeof (input as { id: unknown }).id === "number"
  ) {
    return { id: (input as { id: number }).id };
  }

  throw new Error("Input invalido");
}
```

### `never` para exhaustividad

```ts
type Estado = { tipo: "ok" } | { tipo: "error"; mensaje: string };

function assertNever(value: never): never {
  throw new Error(`Caso no manejado: ${JSON.stringify(value)}`);
}

function resolver(estado: Estado): string {
  switch (estado.tipo) {
    case "ok":
      return "todo bien";
    case "error":
      return estado.mensaje;
    default:
      return assertNever(estado);
  }
}
```

## Nota de entrevista

Si explicas correctamente `any` vs `unknown` y usas `never` para exhaustividad,
demuestras criterio de seguridad de tipos y diseno robusto.

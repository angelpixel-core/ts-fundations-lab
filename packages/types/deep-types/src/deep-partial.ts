/**
 * Vuelve opcionales todas las propiedades de forma recursiva.
 *
 * A diferencia de `Partial<T>`, tambien entra en los objetos anidados.
 */
export type DeepPartial<T> =
  // Caso base: las funciones se mantienen igual para no romper su firma.
  // `never[]` en los argumentos significa "arreglo de parametros imposible".
  // Se usa como firma comodin para detectar cualquier funcion sin imponer
  // tipos concretos de entrada.
  // `unknown` en el retorno significa "resultado desconocido".
  // Es mas seguro que `any` porque obliga a refinar antes de usar el valor.
  T extends (...args: never[]) => unknown
    ? T
    : // Caso recursivo: cada clave pasa a opcional y su valor se transforma recursivamente.
      T extends object
      ? {
          // El operador `?` no convierte el tipo interno en `undefined`.
          // Lo que hace es volver opcional la presencia de la propiedad.
          // Diferencia clave:
          // - `prop?: X` => la propiedad puede no existir.
          // - `prop: X | undefined` => la propiedad existe, pero su valor puede ser undefined.
          // En nuestro caso elegimos opcion "propiedad opcional" para modelar parciales reales.
          [K in keyof T]?: DeepPartial<T[K]>;
        }
      : // Caso primitivo: se deja el valor original.
        T;

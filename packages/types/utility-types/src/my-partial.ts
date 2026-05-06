/**
 * Version simplificada de `Partial<T>`.
 *
 * Convierte todas las propiedades de `T` en opcionales.
 */
export type MyPartial<T> = {
  // `keyof T` produce la union de claves de `T` (por ejemplo: "id" | "nombre").
  // `K in keyof T` recorre cada clave y construye una nueva propiedad por cada una.
  // El sufijo `?` marca esa propiedad como opcional en el nuevo tipo resultante.
  // `T[K]` conserva el tipo original de cada propiedad (string, number, boolean, etc.).
  [K in keyof T]?: T[K];
};

/**
 * Version simplificada de `Pick<T, K>`.
 *
 * Selecciona solo las claves indicadas en `K`.
 */
export type MyPick<T, K extends keyof T> = {
  // `K extends keyof T` restringe K a claves validas de T (evita claves inventadas).
  // `P in K` recorre solo el subconjunto pedido en `K`.
  // `T[P]` mantiene el tipo real de cada propiedad seleccionada.
  [P in K]: T[P];
};

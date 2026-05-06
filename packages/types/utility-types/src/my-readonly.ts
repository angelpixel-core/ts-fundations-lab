/**
 * Version simplificada de `Readonly<T>`.
 *
 * Marca todas las propiedades de `T` como solo lectura.
 */
export type MyReadonly<T> = {
  // `readonly` impide reasignar estas propiedades una vez creado el objeto.
  // `K in keyof T` recorre todas las claves del tipo original para no perder ninguna.
  // `T[K]` reaprovecha exactamente el tipo de cada propiedad original.
  readonly [K in keyof T]: T[K];
};

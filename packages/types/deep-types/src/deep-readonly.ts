/**
 * Aplica `readonly` de forma recursiva en todo el arbol de propiedades.
 *
 * Si una propiedad es un objeto anidado, tambien se transforma a readonly.
 */
export type DeepReadonly<T> =
  // Caso base: para funciones, se conserva el tipo sin transformarlo.
  T extends (...args: never[]) => unknown
    ? T
    : // Caso recursivo: para objetos, se recorren sus claves y se aplica DeepReadonly.
      T extends object
      ? {
          readonly [K in keyof T]: DeepReadonly<T[K]>;
        }
      : // Caso primitivo: string/number/boolean/etc se devuelven tal cual.
        T;

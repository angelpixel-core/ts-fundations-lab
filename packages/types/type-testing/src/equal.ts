/**
 * Compara dos tipos y devuelve `true` si son equivalentes.
 *
 * Usa comparacion de funciones genericas para evitar falsos positivos.
 */
export type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;

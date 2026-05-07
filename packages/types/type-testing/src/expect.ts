/**
 * Fuerza que una condicion de tipos sea verdadera.
 *
 * Si `T` no es `true`, TypeScript marca error de compilacion.
 */
export type Expect<T extends true> = T;

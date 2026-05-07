/**
 * Version simplificada de `Awaited<T>`.
 *
 * Si recibe una Promise, desempaqueta su valor interno recursivamente.
 * Si recibe un valor no Promise, devuelve ese mismo tipo.
 */
export type AwaitedCustom<T> = T extends Promise<infer U> ? AwaitedCustom<U> : T;

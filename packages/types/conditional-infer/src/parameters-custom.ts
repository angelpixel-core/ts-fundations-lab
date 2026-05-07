/**
 * Version simplificada de `Parameters<T>`.
 *
 * `infer P` captura la tupla de parametros de una funcion.
 */
export type ParametersCustom<T> = T extends (...args: infer P) => unknown ? P : never;

/**
 * Version simplificada de `ReturnType<T>`.
 *
 * `infer R` captura el tipo de retorno de una funcion.
 */
export type ReturnTypeCustom<T> = T extends (...args: never[]) => infer R ? R : never;

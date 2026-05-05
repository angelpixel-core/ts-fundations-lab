/**
 * Contrato comun para cualquier implementacion de pila (LIFO).
 *
 * LIFO significa "Last In, First Out":
 * el ultimo elemento que entra es el primero en salir.
 */
export interface Stack<T> {
  /** Inserta un elemento en el tope de la pila. */
  push(item: T): void;

  /**
   * Extrae y devuelve el elemento del tope.
   * Si la pila esta vacia, devuelve `undefined`.
   */
  pop(): T | undefined;

  /**
   * Devuelve el elemento del tope sin removerlo.
   * Si la pila esta vacia, devuelve `undefined`.
   */
  peek(): T | undefined;

  /** Devuelve la cantidad de elementos almacenados. */
  size(): number;

  /** Devuelve `true` cuando no hay elementos en la pila. */
  isEmpty(): boolean;
}

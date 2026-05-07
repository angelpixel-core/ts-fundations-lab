/**
 * Contrato comun para una cola FIFO.
 *
 * FIFO significa "First In, First Out":
 * el primer elemento en entrar es el primero en salir.
 */
export interface Queue<T> {
  /** Inserta un elemento al final de la cola. */
  enqueue(item: T): void;

  /**
   * Extrae y devuelve el primer elemento.
   * Si la cola esta vacia, devuelve `undefined`.
   */
  dequeue(): T | undefined;

  /**
   * Devuelve el primer elemento sin removerlo.
   * Si la cola esta vacia, devuelve `undefined`.
   */
  peek(): T | undefined;

  /** Devuelve la cantidad de elementos actuales. */
  size(): number;

  /** Devuelve `true` cuando no hay elementos. */
  isEmpty(): boolean;
}

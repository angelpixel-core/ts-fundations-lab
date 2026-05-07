import type { Queue } from "./queue.interface";

/**
 * Implementacion didactica de Queue con arreglo.
 *
 * Esta version prioriza legibilidad para entrevistas iniciales.
 */
export class ArrayQueue<T> implements Queue<T> {
  // Almacena los elementos en orden de llegada.
  private readonly items: T[] = [];

  /** Agrega un elemento al final de la cola. */
  enqueue(item: T): void {
    this.items.push(item);
  }

  /**
   * Remueve y devuelve el primer elemento.
   * `shift` desplaza el resto del arreglo, por eso cuesta O(n).
   */
  dequeue(): T | undefined {
    return this.items.shift();
  }

  /** Lee el primer elemento sin mutar estado. */
  peek(): T | undefined {
    return this.items[0];
  }

  /** Cantidad de elementos en la cola. */
  size(): number {
    return this.items.length;
  }

  /** Indica si la cola no tiene elementos. */
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

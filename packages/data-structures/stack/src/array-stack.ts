import { Stack } from "./stack.interface";

/**
 * Implementacion mutable de Stack basada en arreglo.
 *
 * Esta version es la mas directa para entrevistas:
 * - API simple
 * - operaciones O(1) amortizado para push/pop
 * - facil de explicar paso a paso
 */
export class ArrayStack<T> implements Stack<T> {
  // Arreglo interno que mantiene el estado de la pila.
  private readonly items: T[] = [];

  /** Agrega un elemento al final del arreglo (tope de la pila). */
  push(item: T): void {
    this.items.push(item);
  }

  /**
   * Remueve y devuelve el ultimo elemento.
   * Si no hay elementos, `Array.prototype.pop` ya devuelve `undefined`.
   */
  pop(): T | undefined {
    return this.items.pop();
  }

  /**
   * Lee el ultimo elemento sin modificar el estado.
   * `this.items.length - 1` apunta al indice del tope.
   */
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  /** Cantidad actual de elementos almacenados. */
  size(): number {
    return this.items.length;
  }

  /** Indica si la pila esta vacia. */
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

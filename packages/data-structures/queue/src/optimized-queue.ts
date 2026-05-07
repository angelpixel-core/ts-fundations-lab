import type { Queue } from "./queue.interface";

/**
 * Implementacion optimizada de Queue para evitar `shift`.
 *
 * Estrategia:
 * - `items` conserva todos los elementos ingresados.
 * - `head` marca el indice del primer elemento valido.
 * - `dequeue` avanza `head` en O(1).
 */
export class OptimizedQueue<T> implements Queue<T> {
  private readonly items: T[] = [];
  private head = 0;

  /** Inserta al final en O(1). */
  enqueue(item: T): void {
    this.items.push(item);
  }

  /**
   * Extrae en O(1) amortizado moviendo el puntero `head`.
   *
   * Para evitar crecer indefinidamente, compacta el arreglo cuando
   * el head supera un umbral y hay "basura" al inicio.
   */
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const item = this.items[this.head];
    this.head += 1;

    // Compactacion ocasional para liberar memoria y acotar crecimiento.
    if (this.head > 50 && this.head * 2 >= this.items.length) {
      this.items.splice(0, this.head);
      this.head = 0;
    }

    return item;
  }

  /** Lee el primero en O(1). */
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.head];
  }

  /** Cantidad de elementos vigentes en cola. */
  size(): number {
    return this.items.length - this.head;
  }

  /** Indica si ya no hay elementos disponibles. */
  isEmpty(): boolean {
    return this.head >= this.items.length;
  }
}

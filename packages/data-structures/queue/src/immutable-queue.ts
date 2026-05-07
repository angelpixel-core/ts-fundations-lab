/**
 * Implementacion inmutable de Queue.
 *
 * Cada operacion devuelve una nueva instancia en lugar de mutar la actual.
 */
export class ImmutableQueue<T> {
  private constructor(private readonly items: ReadonlyArray<T>) {}

  /** Crea una cola vacia. */
  static createEmpty<T>(): ImmutableQueue<T> {
    return new ImmutableQueue<T>([]);
  }

  /**
   * Retorna una nueva cola con `item` agregado al final.
   */
  enqueue(item: T): ImmutableQueue<T> {
    return new ImmutableQueue([...this.items, item]);
  }

  /**
   * Devuelve una tupla:
   * 1) elemento extraido (o `undefined`)
   * 2) nueva cola resultante
   */
  dequeue(): [T | undefined, ImmutableQueue<T>] {
    if (this.isEmpty()) {
      return [undefined, this];
    }

    const firstItem = this.items[0];
    const newItems = this.items.slice(1);

    return [firstItem, new ImmutableQueue(newItems)];
  }

  /** Lee el primer elemento sin removerlo. */
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[0];
  }

  /** Devuelve el tamano actual. */
  size(): number {
    return this.items.length;
  }

  /** Devuelve `true` si esta vacia. */
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

import type { Queue } from "./queue.interface";

export type Serializable =
  | string
  | number
  | boolean
  | null
  | Serializable[]
  | { [key: string]: Serializable };

/**
 * Variante de Queue con restriccion a datos serializables.
 */
export class SerializableQueue<T extends Serializable> implements Queue<T> {
  private readonly items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[0];
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /** Serializa el estado actual para persistencia/debug. */
  toJSON(): string {
    return JSON.stringify(this.items);
  }
}

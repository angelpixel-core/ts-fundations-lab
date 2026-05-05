import { Stack } from "./stack.interface";

// Tipo base para restringir elementos serializables en JSON.
export type Serializable =
  | string
  | number
  | boolean
  | null
  | Serializable[]
  | { [key: string]: Serializable };

/**
 * Variante de Stack con restriccion de tipo.
 *
 * Esta implementacion demuestra `generic constraints`:
 * solo acepta valores serializables.
 */
export class SerializableStack<T extends Serializable> implements Stack<T> {
  // Estado interno mutable con los elementos permitidos por el constraint.
  private readonly items: T[] = [];

  /** Inserta un elemento serializable en el tope. */
  push(item: T): void {
    this.items.push(item);
  }

  /** Extrae y devuelve el tope actual. */
  pop(): T | undefined {
    return this.items.pop();
  }

  /** Devuelve el tope sin removerlo. */
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  /** Numero de elementos almacenados. */
  size(): number {
    return this.items.length;
  }

  /** Indica si la pila esta vacia. */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Serializa el contenido actual.
   * Sirve como utilidad practica para debugging y persistencia.
   */
  toJSON(): string {
    return JSON.stringify(this.items);
  }
}

/**
 * Implementacion inmutable de Stack.
 *
 * En lugar de mutar el estado actual, cada operacion devuelve
 * una nueva instancia. Esto es util para demostrar pensamiento
 * funcional y uso de `readonly` en TypeScript.
 */
export class ImmutableStack<T> {
  // El constructor es privado para controlar la creacion de instancias.
  private constructor(private readonly items: ReadonlyArray<T>) {}

  /** Crea una pila vacia con el tipo indicado. */
  static createEmpty<T>(): ImmutableStack<T> {
    return new ImmutableStack<T>([]);
  }

  /**
   * Retorna una nueva pila con `item` agregado al tope.
   * No modifica la instancia actual.
   */
  push(item: T): ImmutableStack<T> {
    // Paso a paso:
    // 1) `...this.items` copia los elementos actuales en un nuevo arreglo.
    // 2) `item` se agrega al final del nuevo arreglo (nuevo tope).
    // 3) `new ImmutableStack(...)` crea una nueva instancia sin mutar la original.
    return new ImmutableStack([...this.items, item]);
  }

  /**
   * Devuelve una tupla:
   * 1) elemento extraido (o `undefined` si esta vacia)
   * 2) nueva pila resultante
   */
  pop(): [T | undefined, ImmutableStack<T>] {
    if (this.isEmpty()) {
      // Caso base: no hay nada para extraer, se reutiliza la misma instancia.
      return [undefined, this];
    }

    // Copia todos los elementos menos el ultimo.
    const newItems = this.items.slice(0, -1);

    // Ultimo elemento previo al recorte.
    const topItem = this.items[this.items.length - 1];

    return [topItem, new ImmutableStack(newItems)];
  }

  /** Lee el tope sin modificar la pila. */
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.items.length - 1];
  }

  /** Devuelve el tamano actual de la pila. */
  size(): number {
    return this.items.length;
  }

  /** Indica si no hay elementos. */
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

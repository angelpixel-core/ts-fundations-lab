import assert from "node:assert/strict";
import { ArrayStack, ImmutableStack, SerializableStack } from "../src";

// Prueba minima para validar el comportamiento LIFO mutable.
{
  const stack = new ArrayStack<number>();
  stack.push(10);
  stack.push(20);

  assert.equal(stack.peek(), 20);
  assert.equal(stack.pop(), 20);
  assert.equal(stack.pop(), 10);
  assert.equal(stack.pop(), undefined);
  assert.equal(stack.isEmpty(), true);
}

// Prueba minima para validar inmutabilidad.
{
  const base = ImmutableStack.createEmpty<number>();
  const withOne = base.push(1);
  const withTwo = withOne.push(2);

  const [top, afterPop] = withTwo.pop();

  assert.equal(base.size(), 0);
  assert.equal(withOne.size(), 1);
  assert.equal(top, 2);
  assert.equal(afterPop.peek(), 1);
}

// Prueba minima para validar restriccion y serializacion.
{
  const stack = new SerializableStack<{ id: number; activo: boolean }>();
  stack.push({ id: 1, activo: true });

  assert.equal(stack.size(), 1);
  assert.equal(stack.toJSON(), '[{"id":1,"activo":true}]');
}

// Si no hubo errores de assert, el script termina en silencio.

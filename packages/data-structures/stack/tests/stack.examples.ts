import { describe, expect, it } from "vitest";
import { ArrayStack, ImmutableStack, SerializableStack } from "../src";

describe("stack", () => {
  it("valida comportamiento LIFO en ArrayStack", () => {
    const stack = new ArrayStack<number>();
    stack.push(10);
    stack.push(20);

    expect(stack.peek()).toBe(20);
    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
    expect(stack.pop()).toBeUndefined();
    expect(stack.isEmpty()).toBe(true);
  });

  it("valida inmutabilidad en ImmutableStack", () => {
    const base = ImmutableStack.createEmpty<number>();
    const withOne = base.push(1);
    const withTwo = withOne.push(2);

    const [top, afterPop] = withTwo.pop();

    expect(base.size()).toBe(0);
    expect(withOne.size()).toBe(1);
    expect(top).toBe(2);
    expect(afterPop.peek()).toBe(1);
  });

  it("valida restriccion y serializacion en SerializableStack", () => {
    const stack = new SerializableStack<{ id: number; activo: boolean }>();
    stack.push({ id: 1, activo: true });

    expect(stack.size()).toBe(1);
    expect(stack.toJSON()).toBe('[{"id":1,"activo":true}]');
  });
});

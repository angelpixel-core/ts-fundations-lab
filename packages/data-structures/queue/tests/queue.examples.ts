import { describe, expect, it } from "vitest";
import { ArrayQueue, ImmutableQueue, SerializableQueue } from "../src";

describe("queue", () => {
  it("valida comportamiento FIFO en ArrayQueue", () => {
    const queue = new ArrayQueue<number>();
    queue.enqueue(10);
    queue.enqueue(20);

    expect(queue.peek()).toBe(10);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.isEmpty()).toBe(true);
  });

  it("valida inmutabilidad en ImmutableQueue", () => {
    const base = ImmutableQueue.createEmpty<number>();
    const withOne = base.enqueue(1);
    const withTwo = withOne.enqueue(2);

    const [first, afterDequeue] = withTwo.dequeue();

    expect(base.size()).toBe(0);
    expect(withOne.size()).toBe(1);
    expect(first).toBe(1);
    expect(afterDequeue.peek()).toBe(2);
  });

  it("valida restriccion y serializacion en SerializableQueue", () => {
    const queue = new SerializableQueue<{ id: number; activo: boolean }>();
    queue.enqueue({ id: 1, activo: true });

    expect(queue.size()).toBe(1);
    expect(queue.toJSON()).toBe('[{"id":1,"activo":true}]');
  });
});

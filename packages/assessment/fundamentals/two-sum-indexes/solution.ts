export function twoSumIndexes(numbers: number[], target: number): [number, number] | undefined {
  const seenIndex: Record<number, number> = {};

  for (const [index, current] of numbers.entries()) {
    const needed = target - current;

    if (seenIndex[needed] !== undefined) {
      return [seenIndex[needed], index];
    }

    if (seenIndex[current] === undefined) {
      seenIndex[current] = index;
    }
  }

  return undefined;
}

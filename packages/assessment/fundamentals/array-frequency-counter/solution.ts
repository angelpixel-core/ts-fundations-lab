export function frequencyCounter(numbers: number[]): Record<number, number> {
  const frequencies: Record<number, number> = {};

  for (const number of numbers) {
    if (frequencies[number] === undefined) {
      frequencies[number] = 0;
    }

    frequencies[number] += 1;
  }

  return frequencies;
}

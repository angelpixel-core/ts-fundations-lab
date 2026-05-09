export function hasDuplicates(numbers: number[]): boolean {
  const seen = new Set<number>();

  for (const number of numbers) {
    if (seen.has(number)) {
      return true;
    }

    seen.add(number);
  }

  return false;
}

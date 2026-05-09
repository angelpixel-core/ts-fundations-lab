export function firstNonRepeatedChar(text: string): string | undefined {
  const count: Record<string, number> = {};

  for (const char of text) {
    if (count[char] === undefined) {
      count[char] = 0;
    }

    count[char] += 1;
  }

  for (const char of text) {
    if (count[char] === 1) {
      return char;
    }
  }

  return undefined;
}

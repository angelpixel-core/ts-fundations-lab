export function isBalancedParentheses(input: string): boolean {
  const stack: string[] = [];
  const matchingOpen: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  for (const char of input) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      continue;
    }

    if (matchingOpen[char] !== undefined) {
      const lastOpen = stack.pop();
      if (lastOpen !== matchingOpen[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

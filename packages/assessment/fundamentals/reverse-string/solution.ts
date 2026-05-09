export function reverseString(text: string): string {
  let reversed = "";

  for (let index = text.length - 1; index >= 0; index -= 1) {
    reversed += text[index];
  }

  return reversed;
}

export class LibraryAccount {
  private readonly loanedBooks = new Set<string>();

  borrow(bookId: string): boolean {
    if (this.loanedBooks.has(bookId)) {
      return false;
    }

    this.loanedBooks.add(bookId);
    return true;
  }

  returnBook(bookId: string): boolean {
    if (!this.loanedBooks.has(bookId)) {
      return false;
    }

    this.loanedBooks.delete(bookId);
    return true;
  }

  getLoanedBooks(): string[] {
    return [...this.loanedBooks];
  }
}

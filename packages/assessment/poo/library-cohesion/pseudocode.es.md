# Pseudocodigo (ES)

1. Definir clase `LibraryAccount` con estado privado `loanedBooks`.
2. Crear metodo `borrow(bookId)` que agregue un libro si no existe.
3. Crear metodo `returnBook(bookId)` que quite el libro si existe.
4. Crear metodo `getLoanedBooks()` que devuelva una copia del estado.
5. Mantener alta cohesion: solo metodos relacionados con prestamos.

## Idea clave

La clase debe proteger su estado y exponer comportamiento de su dominio.

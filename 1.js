//1
class Library {
    #books = [];

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.#books.find(book => book.title === title)) {
            throw new Error("Книга с таким названием уже существует в списке");
        }
        this.#books.push({ title });
    }

    removeBook(title) {
        const index = this.#books.findIndex(book => book.title === title);
        if (index === -1) {
            throw new Error("Книги с таким названием нет в списке");
        }
        this.#books.splice(index, 1);
    }
}
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. 
//Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку. 
//Не получилось корректно сделать... Как было правильно?



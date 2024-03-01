class Library {
    #books = [];

    constructor(books) {
        this.#books = books;
    }

    get getBooks() {
        return this.#books;
    }

    allBooks() {
        for (const el of this.#books) {
            console.log(`${this.#books.indexOf(el) + 1}
          Название: ${el.title} 
          Автор: ${el.author} 
          Год выпуска: ${el.year}`);
        }
    }

    addBook(titleBook, authorBook, yearBook) {
        const book = {
            title: titleBook,
            author: authorBook,
            year: yearBook,
        };
        this.#books.push(book);
    }

    removeBook(titleBook) {
        for (const el of this.#books) {
            if (el.title === titleBook) {
                this.#books.splice(this.#books.indexOf(el), this.#books.indexOf(el));
                return 'Книга удалена';
            }
        }
        return 'Книга не найдена';
    }
    hasBook(titleBook) {
        for (const el of this.#books) {
            if (el.title === titleBook) {
                return true;
            }
        }
        return false;
    }
}

const arrBooks = [
    {
        title: 'Маленькие женщины',
        author: 'Луиза Мэй Олкотт',
        year: 1868,
    },
    {
        title: 'Маленький принц',
        author: 'Антуан де Сент-Экзюпери',
        year: 1942,
    },
];

const library = new Library(arrBooks);

library.addBook(
    'Гарри Поттер и философский камень',
    'Джоан Роулинг',
    1990,
);
library.allBooks();
console.log('-------------------------------------------');
console.log(library.removeBook('Маленькие женщины'));
library.allBooks();
console.log(library.hasBook('Маленькие женщины'));
console.log(library.hasBook('Гарри Поттер и философский камень'));
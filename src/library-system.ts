interface Author {
  name: string;
  books: Book[];
  addBook(book: Book): void;
}

interface Book {
  id: number;
  title: string;
  year: number;
  author: Author;
}

class AuthorImpl implements Author {
  name: string;
  books: Book[] = [];
  constructor(name: string) {
    this.name = name;
  }
  addBook(book: Book): void {
    this.books.push(book);
  }
}

class BookImpl implements Book {
  id: number;
  title: string;
  year: number;
  author: Author;
  constructor(id: number, title: string, year: number, author: Author) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.author = author;
    author.addBook(this);
  }
}

class Library {
  private books: Book[] = [];
  addBook(book: Book): void {
    this.books.push(book);
  }
  listBooks(): string[] {
    return this.books.map((b) => `${b.title} (${b.year}) by ${b.author.name}`);
  }
}

const createIdGenerator = () => {
  let id = 0;
  return () => ++id;
};

const getNextId = createIdGenerator();

const tolkien = new AuthorImpl("J.R.R. Tolkien");
const book1 = new BookImpl(getNextId(), "The Hobbit", 1937, tolkien);

const library = new Library();
library.addBook(book1);
console.log(library.listBooks());

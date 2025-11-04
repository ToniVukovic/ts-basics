"use strict";
class AuthorImpl {
    constructor(name) {
        this.books = [];
        this.name = name;
    }
    addBook(book) {
        this.books.push(book);
    }
}
class BookImpl {
    constructor(id, title, year, author) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.author = author;
        author.addBook(this);
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
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

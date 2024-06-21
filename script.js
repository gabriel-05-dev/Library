const userLibrary = [];

function newBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function appendBook(book) {
    userLibrary.push(book);
};
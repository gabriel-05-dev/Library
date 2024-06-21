const userLibrary = [];
const libraryElement = document.querySelector('.library');

const addBooksBtn = document.querySelector('#addBook');
const dialog = document.querySelector('#dialog');
const closeDialog = document.querySelector('#closeDialog');


function newBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function appendBook(book) {
    userLibrary.push(book);
};

/* Open/close the dialog */

addBooksBtn.addEventListener('click', ()=> {
    dialog.showModal();
});

closeDialog.addEventListener('click', ()=> {
    dialog.close();
});


/*

addBooksBtn.addEventListener('click', function() {
    const NewCard = document.createElement('div');
    NewCard.classList.add("card");
    libraryElement.appendChild(NewCard);
});

*/
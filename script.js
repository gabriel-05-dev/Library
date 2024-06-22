const userLibrary = [];
const libraryElement = document.querySelector('.library');

const addBooksBtn = document.querySelector('#addBook');
const dialog = document.querySelector('#dialog');
const closeDialog = document.querySelector('#closeDialog');

const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);
    /* move obj data into variables. */
    let book = obj.bookName;
    let author = obj.author;
    let pages = obj.pages;
    createCard(book, author, pages);
    form.reset();
});

function createCard(book, author, pages) {
    const NewCard = document.createElement('div');
    const BookTitle = document.createElement('h3');
    const BookAuthor = document.createElement('p');
    const BookPages = document.createElement('p');
    BookTitle.innerText = book;
    BookAuthor.innerText = 'Author : ' + author;
    BookPages.innerText = 'Pages : ' + pages;
    

    NewCard.classList.add("card");
    NewCard.appendChild(BookTitle);
    NewCard.appendChild(BookAuthor);
    NewCard.appendChild(BookPages);
    libraryElement.appendChild(NewCard);
};

addBooksBtn.addEventListener('click', ()=> {
    dialog.showModal();
});

closeDialog.addEventListener('click', ()=> {
    dialog.close();
});
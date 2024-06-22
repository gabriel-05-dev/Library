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

    let book = obj.bookName;
    let author = obj.author;
    let pages = obj.pages;
    console.log(book);
    console.log(author);
    console.log(pages);
    return book, author, pages;
});

function createCard(book, author, pages) {
    const NewCard = document.createElement('div');
    NewCard.classList.add("card");
    libraryElement.appendChild(NewCard);
};

addBooksBtn.addEventListener('click', ()=> {
    dialog.showModal();
});

closeDialog.addEventListener('click', ()=> {
    dialog.close();
});
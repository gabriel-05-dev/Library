const user_library = [];
const library_element = document.querySelector('.library');
const add_books_btn = document.querySelector('#addBook');
const dialog = document.querySelector('#dialog');
const close_dialog = document.querySelector('#closeDialog');
const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const bookObj = Object.fromEntries(formData);
    /* move obj data into variables. */
    user_library.push(bookObj);
    create_card();
    form.reset();
});

function create_card() {

    library_element.innerHTML = '';

    for (let i = 0; i<userLibrary.length; i++) {

        //* for each element in the array, create a card & push it onto the library*/
        const new_card = document.createElement('div');
        const book_title = document.createElement('h3');
        const book_author = document.createElement('p');
        const BookPages = document.createElement('p');
        book_title.innerText = userLibrary[i].bookName;
        book_author.innerText = userLibrary[i].author;
        BookPages.innerText = userLibrary[i].pages;
        new_card.classList.add("card");
        new_card.appendChild(book_title);
        new_card.appendChild(book_author);
        new_card.appendChild(BookPages);
        library_element.appendChild(new_card);
        };
    };

add_books_btn.addEventListener('click', ()=> {
    dialog.showModal();
});

close_dialog.addEventListener('click', ()=> {
    dialog.close();
});
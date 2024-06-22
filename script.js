let user_library = [];
const library_element = document.querySelector('.library');
const add_books_btn = document.querySelector('#addBook');
const dialog = document.querySelector('#dialog');
const close_dialog = document.querySelector('#closeDialog');
const form = document.getElementById('form');
const display_btn = document.querySelector('#displayLibrary');
const clear_books_btn = document.querySelector('#clearBooks');
let display_counter = 0;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const bookObj = Object.fromEntries(formData);
    /* move obj data into variables. */
    user_library.push(bookObj);
    create_card();
    form.reset();
});

add_books_btn.addEventListener('click', ()=> {
    dialog.showModal();
});

close_dialog.addEventListener('click', ()=> {
    dialog.close();
});

display_btn.addEventListener('click', function() {
    display_cards();
});

clear_books_btn.addEventListener('click', function() {
    clear_books();  
});

function create_card() {

    library_element.innerHTML = '';

    for (let i = 0; i<user_library.length; i++) {

        //* for each element in the array, create a card & push it onto the library*/
        const new_card = document.createElement('div');
        const book_title = document.createElement('h3');
        const book_author = document.createElement('p');
        const book_pages = document.createElement('p');

        const read_book_div = document.createElement('div');
        const read_book_checkbox = document.createElement('input');
        const read_book_text = document.createElement('p');
        read_book_checkbox.type = 'checkbox';
        read_book_text.innerText = 'Read?'
        read_book_div.appendChild(read_book_text);
        read_book_div.appendChild(read_book_checkbox);
        read_book_div.classList.add('readStatus');

        book_title.innerText = user_library[i].bookName;
        book_author.innerText = 'Author: '+user_library[i].author;
        book_pages.innerText = 'Pages: '+user_library[i].pages;
        new_card.classList.add("card");
        new_card.appendChild(book_title);
        new_card.appendChild(book_author);
        new_card.appendChild(book_pages);
        new_card.appendChild(read_book_div);
        library_element.appendChild(new_card);
        };
    };

function display_cards() {
    if (display_counter % 2 != 0) {
        library_element.style = 'display:none;';
        display_counter++
    } else {
        library_element.style = '';
        display_counter++
    }};


function clear_books() {
    user_library = [];
    library_element.innerHTML = '';
};
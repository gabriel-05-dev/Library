let user_library = [];
const library_element = document.querySelector('.library');
const add_books_btn = document.querySelector('#addBook');
const dialog = document.querySelector('#dialog');
const close_dialog = document.querySelector('#closeDialog');
const form = document.getElementById('form');
const display_btn = document.querySelector('#displayLibrary');
const clear_books_btn = document.querySelector('#clearBooks');
let checkbox_btn = document.querySelector('#readCheck');
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

function remove_from_library(id) {
    if (id == 0) {
        user_library.shift(id);
        create_card();
    } else {
        user_library.splice(id,id);
        create_card();
    };

}

function create_card() {

    library_element.innerHTML = '';

    for (let i = 0; i<user_library.length; i++) {
        //* for each element in the array, create a card & push it onto the library*/
        user_library[i].id = i;
        console.log(user_library[i], user_library.id)
        const new_card = document.createElement('div');
        const book_title = document.createElement('h3');
        const book_author = document.createElement('p');
        const book_pages = document.createElement('p');
        const remove_book = document.createElement('button');
        const read_book_div = document.createElement('div');
        const read_book_btn = document.createElement('button');
        remove_book.addEventListener('click', function() {
            remove_from_library(i);
        });
        remove_book.innerText = 'remove?';
        read_book_btn.innerText = 'read?';
        read_book_div.appendChild(read_book_btn);
        book_title.innerText = user_library[i].bookName;
        book_author.innerText = 'Author: '+user_library[i].author;
        book_pages.innerText = 'Pages: '+user_library[i].pages;
        new_card.classList.add("card");
        new_card.appendChild(book_title);
        new_card.appendChild(book_author);
        new_card.appendChild(book_pages);
        new_card.appendChild(remove_book);
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
    if (user_library.length != 0 && library_element.innerHTML != '') {
    user_library = [];
    library_element.innerHTML = '';
    } else {
        console.log('Library Empty.');
    };
};
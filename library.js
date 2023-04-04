let myLibrary = [];
const modalDiv = document.getElementById('modal-form');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayAddBookModal () {

    // Display modal by setting display to block
    modalDiv.style.display = 'block';

    }

function closeAddBookModal (event) {

    event.preventDefault();
    modalDiv.style.display = 'none';
}

function addBookToLibrary(event) {

    let title = document.querySelector("#formTitle").value;
    let author = document.querySelector("#formAuthor").value;
    let pages = document.querySelector("#formPages").value;
    let read = document.querySelector("#formRead").value;

    if((title === "" || author === "" || pages === "")) {
        event.preventDefault();
        alert("Please make sure all fields are filled out before proceeding");
        return;
    } else if(pages <= 0) {
        event.preventDefault();
        alert("Please make sure pages is a number between 1 and 10,000");
        return;
    } else {
        event.preventDefault();
        const book = new Book(title, author, pages, read);
        myLibrary.push(book);
        modalDiv.style.display = 'none';
        displayBook();
        document.querySelector('#formTitle').value = '';
        document.querySelector('#formAuthor').value = '';
        document.querySelector('#formPages').value = '';
        document.querySelector('#formRead').value = 'Not Completed';
    }

    
}

function displayBook() {

    const bookShelfContainer = document.querySelector(".bookShelfContainer");

        for (let books = (myLibrary.length - 1); books < myLibrary.length; books++) {

            const bookObject = document.createElement('div');
            bookObject.classList.add("bookObject");
            bookShelfContainer.appendChild(bookObject);

            // Index
            const bookIndex = document.createElement('div');
            bookIndex.textContent = (parseInt(books) + 1);
            bookIndex.setAttribute("id", (parseInt(books) + 1));
            bookIndex.classList.add("bookObjectElementIndex");
            bookObject.appendChild(bookIndex);

            // Title
            const bookTitle = document.createElement('div');
            bookTitle.textContent = myLibrary[books].title;
            bookTitle.setAttribute("id", "title");
            bookTitle.classList.add("bookObjectElement");
            bookObject.appendChild(bookTitle);

            // Author
            const bookAuthor = document.createElement('div')
            bookAuthor.textContent = myLibrary[books].author
            bookAuthor.setAttribute("id", "author");
            bookAuthor.classList.add("bookObjectElement");
            bookObject.appendChild(bookAuthor);

            // Pages
            const bookPages = document.createElement('div');
            bookPages.textContent = myLibrary[books].pages
            bookPages.setAttribute("id", "pages");
            bookPages.classList.add("bookObjectElement");
            bookObject.appendChild(bookPages);

            // Read
            const bookRead = document.createElement('div')
            bookRead.textContent = myLibrary[books].read
            bookRead.setAttribute("id", "completed");
            bookRead.classList.add("bookObjectElement");
            bookObject.appendChild(bookRead);

            // Button Container, Edit Button, Remove Button
            const bookObjectContainer = document.createElement('div')
            const editButton = document.createElement('button')
            const removeButton = document.createElement('button')

            bookObjectContainer.setAttribute("id", `edit/remove for book: ${books}`)
            bookObjectContainer.classList.add("bookObjectContainer");
            bookObject.appendChild(bookObjectContainer);

            editButton.setAttribute("id", `edit: ${books}`);
            editButton.classList.add("editButton");
            editButton.textContent = "Edit"
            bookObjectContainer.appendChild(editButton);

            removeButton.setAttribute("id", `remove book: ${books}`);
            removeButton.classList.add("removeButton");
            removeButton.textContent = "Remove"
            bookObjectContainer.appendChild(removeButton);

        }
    }


const bookButton = document.querySelector("button.submitButton#addBookButton");
const bookButtonPress = bookButton.addEventListener("click", displayAddBookModal);

const submitButton = document.querySelector("#formSubmitButton");
const pressedSubmitButton = submitButton.addEventListener("click", addBookToLibrary);
// const showBookInLibrary = submitButton.addEventListener("click", displayBook);

const exitModal= document.querySelector("#formTopExitButton");
const pressedExitModal = exitModal.addEventListener("click", closeAddBookModal)


// TO DO LIST: 
// - Create a function that validates form "correctness" ~ this is so that I can pass this function to my addBookToLibrary() and displayBook() functions
// - Wire up logic 
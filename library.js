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

// function to push book into the Library
function addBookToLibrary(event) {

    let title = document.querySelector("#formTitle").value;
    let author = document.querySelector("#formAuthor").value;
    let pages = document.querySelector("#formPages").value;
    let read = document.querySelector("#formRead").value;

    if((title === "" || author === "" || pages === "")) {
        event.preventDefault();
        alert("Please make sure all fields are filled out before proceeding");
    } else if(pages <= 0) {
        event.preventDefault();
        alert("Please make sure pages is a number between 1 and 10,000")
    } else {
        event.preventDefault();
        const book = new Book(title, author, pages, read);
        myLibrary.push(book);
        modalDiv.style.display = 'none';
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
        bookIndex.classList.add("bookObjectElement");
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

    }
}

const bookButton = document.querySelector("button.submitButton#addBookButton");
const bookButtonPress = bookButton.addEventListener("click", displayAddBookModal);

const submitButton = document.querySelector("#formSubmitButton");
const pressedSubmitButton = submitButton.addEventListener("click", addBookToLibrary);
const showBookInLibrary = submitButton.addEventListener("click", displayBook);

const exitModalOne = document.querySelector("#formTopExitButton");
const pressedExitModalOne = exitModalOne.addEventListener("click", closeAddBookModal)

const exitModalTwo = document.querySelector("#formRemoveButton");
const pressedExitModalTwo = exitModalTwo.addEventListener("click", closeAddBookModal)


// addBookToLibrary(disciplineIsDestiny2);
    
// displayBook();

// Code below is to create a modal form when a button is pressed:

  // // Create form
    // const form = document.createElement('form');
    // form.setAttribute("class", "bookForm");

    // // Create exit button at top of Modal
    // const formTop = document.createElement('div');
    // const formTopExitButton = document.createElement('button')

    // formTop.setAttribute("class", "formTop");
    // form.appendChild(formTop);

    // formTopExitButton.setAttribute("class", "formTopButton");
    // formTopExitButton.setAttribute("id", "formTopExitButton");
    // formTopExitButton.textContent = "X";   
    // formTop.appendChild(formTopExitButton);
    

    // // Iterate over formFieldNames array to get the subject of each form name
    // for (const names in formFieldNames) {

    //     linebreak = document.createElement("br");
    //     const fieldName = formFieldNames[names];

    //     // create a label element
    //     const label = document.createElement('label');
    //     label.setAttribute('for', fieldName);
    //     label.textContent = fieldName;
    
    //     // create an input element
    //     var input = document.createElement('input');
    //     input.setAttribute('type', 'text');
    //     input.setAttribute('name', fieldName);
    //     input.setAttribute('id', fieldName);
    
    //     // append the label and input to the form
    //     form.appendChild(label);
    //     form.appendChild(input);
    //     form.appendChild(linebreak);

    //   }
      
    
    
    // // Add Submit and Remove Buttons to Form Modal
    // formButtonDiv = document.createElement("div");
    // formButtonDiv.setAttribute("class", "formButtonDiv");
    // form.appendChild(formButtonDiv)

    // submitButton = document.createElement("button");
    // submitButton.setAttribute("class", "formButton");
    // submitButton.setAttribute("id", "formSubmitButton");
    // submitButton.textContent = "Submit";
    // formButtonDiv.appendChild(submitButton);

    // removeButton = document.createElement("button");
    // removeButton.setAttribute("class", "formButton");
    // removeButton.setAttribute("id", "formRemoveButton");
    // removeButton.textContent = "Remove";
    // formButtonDiv.appendChild(removeButton);
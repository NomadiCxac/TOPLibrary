let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// function to push book into the Library
function addBookToLibrary(book) {
    
    // hook up html to perform this push
    myLibrary.push(book);
}

function displayBook() {
    for (const books in myLibrary) {

        // push this to a card 
        console.log(myLibrary[books]);
    }
}

const disciplineIsDestiny = new Book ('disciplineIsDestiny', 'Ryan Holiday', '312', 'No');
const disciplineIsDestiny2 = new Book ('disciplineIsDestiny2', 'Ryan Holidays', '413', 'Yes');


addBookToLibrary(disciplineIsDestiny);
addBookToLibrary(disciplineIsDestiny2);

displayBook();
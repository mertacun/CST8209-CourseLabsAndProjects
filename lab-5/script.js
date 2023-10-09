class Book {
    constructor(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }
}

let myBookArray = [
    new Book('Fahrenheit 451', 'Ray Bradbury', 'Dystopian'),
    new Book('When Nietzsche Wept', 'Irvin D. Yalom', 'Philosophical Fiction'),
    new Book('Pride and Prejudice', 'Jane Austen', 'Romance'),
];

function addBook(title, author, genre) {
    const newBook = new Book(title, author, genre);
    myBookArray.push(newBook);
    return "Added: " + title + " by " + author + " (" + genre + ")";
}

function showBooks() {
    for (let i = 0; i < myBookArray.length; i++) {
        const book = myBookArray[i];
        console.log("Book " + (i + 1) + ": " + book.title);
    }
}

function showBook(index) {
    const book = myBookArray[index];
    if (book) {
        console.log("Title: " + book.title);
        console.log("Author: " + book.author);
        console.log("Genre: " + book.genre);
    } else {
        console.log("Book not found.");
    }
}

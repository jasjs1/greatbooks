// // Custom template literal tag function for HTML elements
// function html(strings, ...values) {
//     let result = strings[0];
//     for (let i = 0; i < values.length; i++) {
//         result += String(values[i]).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
//         result += strings[i + 1];
//     }
//     return result;
// }

// // Book class
// class Book {
//     constructor(title, rating, startDate, endDate, cover) {
//         this.title = title;
//         this.rating = rating;
//         this.startDate = startDate;
//         this.endDate = endDate;
//         this.cover = cover;
//     }
// }

// // Book Logger class
// class BookLogger {
//     constructor() {
//         this.books = JSON.parse(localStorage.getItem('books')) || [];
//     }

//     addBook(book) {
//         this.books.push(book);
//         this.saveBooksToLocalStorage();
//     }

//     displayBooks() {
//         const bookListDiv = document.getElementById('bookList');
//         bookListDiv.innerHTML = '';

//         this.books.forEach(book => {
//             const bookDiv = document.createElement('div');
//             bookDiv.classList.add('book-item');

//             const bookTemplate = html`
//                 <img src="${book.cover}" alt="${book.title}">
//                 <h3 id="title">Title: ${book.title}</h3>
//                 <p>Rating: ${book.rating}</p>
//                 <p>Start Date: ${book.startDate}</p>
//                 <p>End Date: ${book.endDate}</p>
//             `;

//             bookDiv.innerHTML = bookTemplate;
//             bookListDiv.appendChild(bookDiv);
//         });
//     }

//     saveBooksToLocalStorage() {
//         localStorage.setItem('books', JSON.stringify(this.books));
//     }
// }

// // Event Listener for form submission
// const bookForm = document.getElementById('bookForm');
// bookForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const title = document.getElementById('title').value;
//     const rating = parseFloat(document.getElementById('rating').value);
//     const startDate = document.getElementById('startDate').value;
//     const endDate = document.getElementById('endDate').value;
//     const coverFile = document.getElementById('cover').files[0];

//     if (!coverFile) {
//         alert("Please select a cover image.");
//         return;
//     }

//     const reader = new FileReader();
//     reader.onload = function () {
//         const cover = reader.result; // This is the base64 encoded cover image data
//         const newBook = new Book(title, rating, startDate, endDate, cover);
//         bookLogger.addBook(newBook);
//         bookLogger.displayBooks();
//         bookForm.reset();
//     };
//     reader.readAsDataURL(coverFile);
// });

// const bookLogger = new BookLogger();
// bookLogger.displayBooks(); // Display existing books when the page loads

// // ... Your existing code ...

// // Event Listener for opening the modal
// const openModalBtn = document.getElementById('openModalBtn');
// const modal = document.getElementById('modal');
// const closeModalBtn = document.getElementsByClassName('close')[0];

// openModalBtn.addEventListener('click', function () {
//     modal.style.display = 'block';
// });

// // Event Listener for closing the modal
// closeModalBtn.addEventListener('click', function () {
//     modal.style.display = 'none';
// });

// // When the user clicks outside the modal, close it
// window.addEventListener('click', function (event) {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// });

// // ... Your existing code ...

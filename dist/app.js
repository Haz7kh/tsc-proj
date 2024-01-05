"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books');
        const data = yield response.json();
        return data;
    });
}
function renderBooks(books) {
    const appElement = document.getElementById('app');
    if (appElement) {
        appElement.innerHTML = '';
        books.forEach((book) => {
            const bookContainer = document.createElement('div');
            bookContainer.classList.add('book-container');
            bookContainer.style.backgroundColor = book.color;
            const detailsContainer = document.createElement('div');
            detailsContainer.classList.add('book-details');
            detailsContainer.innerHTML = `<p>${book.title}</p><p>${book.author}</p>`;
            bookContainer.appendChild(detailsContainer);
            bookContainer.addEventListener('click', () => {
                showBookDetails(book);
            });
            appElement.appendChild(bookContainer);
        });
        // Add clearfix after rendering books
        const clearfixElement = document.createElement('div');
        clearfixElement.classList.add('clearfix');
        appElement.appendChild(clearfixElement);
    }
}
// Navigate to the book-details.html page with the book ID as a query parameter
function showBookDetails(book) {
    window.location.href = `book-details.html?id=${book.id}`;
}
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const books = yield fetchBooks();
        renderBooks(books);
    });
}
init();

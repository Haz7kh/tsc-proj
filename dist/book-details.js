"use strict";
// book-details.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    const urlParams = new URLSearchParams(window.location.search);
    const bookIdString = urlParams.get('id');
    const bookId = bookIdString !== null ? parseInt(bookIdString) : 0;
    if (!isNaN(bookId)) {
        // Fetch the book details based on the bookId
        const bookDetails = yield fetchBookDetails(bookId);
        // Display the book details on the page
        displayBookDetails(bookDetails);
    }
    else {
        console.error('Invalid book ID');
    }
}));
function fetchBookDetails(bookId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books/${bookId}`);
        const bookDetails = yield response.json();
        return bookDetails;
    });
}
function displayBookDetails(book) {
    const titleElement = document.getElementById('book-title');
    const authorElement = document.getElementById('book-author');
    const descriptionElement = document.getElementById('book-description');
    const detailsContainer = document.getElementById('book-details-container');
    if (titleElement && authorElement && descriptionElement && detailsContainer) {
        titleElement.textContent = `${book.title}`;
        authorElement.textContent = `by ${book.author}`;
        descriptionElement.textContent = `Plot: ${book.plot}`;
        if (book.color) {
            detailsContainer.style.backgroundColor = book.color;
        }
    }
    else {
        console.error('One or more elements not found.');
    }
}

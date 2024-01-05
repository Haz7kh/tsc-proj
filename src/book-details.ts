// book-details.ts

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const bookIdString = urlParams.get('id');
    const bookId = bookIdString !== null ? parseInt(bookIdString) : 0;
  
    if (!isNaN(bookId)) {
      // Fetch the book details based on the bookId
      const bookDetails = await fetchBookDetails(bookId);
      // Display the book details on the page
      displayBookDetails(bookDetails);
    } else {
      console.error('Invalid book ID');
    }
  });
  
  async function fetchBookDetails(bookId: number): Promise<Book> {
    const response = await fetch(`https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books/${bookId}`);
    const bookDetails: Book = await response.json();
    return bookDetails;
  }
  
  function displayBookDetails(book: Book): void {
    const titleElement = document.getElementById('book-title');
    const authorElement = document.getElementById('book-author');
    const descriptionElement = document.getElementById('book-description');
    const detailsContainer = document.getElementById('book-details-container');
  
    if (titleElement && authorElement && descriptionElement && detailsContainer ) {
      titleElement.textContent = `${book.title}`;
      authorElement.textContent = `by ${book.author}`;
      descriptionElement.textContent = `Plot: ${book.plot}`
      if (book.color) {
        detailsContainer.style.backgroundColor = book.color;
      }
    }else {
      console.error('One or more elements not found.');
    }
  }
  
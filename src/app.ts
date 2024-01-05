interface Book {
    plot: any;
    id: number;
    title: string;
    author: string;
    description: string;
    color: string; // Assuming there's a 'color' property in your Book interface
  }
  
  async function fetchBooks(): Promise<Book[]> {
    const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books');
    const data: Book[] = await response.json();
    return data;
  }
  
  function renderBooks(books: Book[]): void {
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
  function showBookDetails(book: Book): void {
    window.location.href = `book-details.html?id=${book.id}`;
  }
  async function init(): Promise<void> {
    const books = await fetchBooks();
    renderBooks(books);
  }
  
  init();
  
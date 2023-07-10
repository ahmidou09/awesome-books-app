export default class BookList {
  constructor() {
    this.form = document.querySelector('.form');
    this.titleInput = document.querySelector('.titleInput');
    this.authorInput = document.querySelector('.authorInput');
    this.listBooks = document.querySelector('.listBooks');
    this.header = document.querySelector('.header');
    this.navItems = document.querySelectorAll('.nav__item');
    this.contentDynamic = document.querySelectorAll('.dynamic');
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  init = () => {
    this.form.addEventListener('submit', this.handleFormSubmit);
    this.navItems.forEach((link) => link.addEventListener('click', this.handleContent));
    this.renderBooks();
    this.displayCurrentDate();
  };

  renderBooks = () => {
    this.listBooks.innerHTML = '';
    this.books.forEach((book, index) => {
      const bookDiv = document.createElement('ul');
      bookDiv.classList.add('book');

      const spanTitle = document.createElement('li');
      spanTitle.innerText = `Title: ${book.title}`;
      spanTitle.classList.add('title');

      const spanAuthor = document.createElement('li');
      spanAuthor.innerText = `Author: ${book.author}`;

      const removeButton = document.createElement('button');
      removeButton.innerHTML = 'remove';
      removeButton.classList.add('removeBook');

      removeButton.addEventListener('click', () => {
        this.removeBook(index);
      });

      bookDiv.appendChild(spanTitle);
      bookDiv.appendChild(spanAuthor);
      bookDiv.appendChild(removeButton);

      this.listBooks.appendChild(bookDiv);
    });
  };

  removeBook = (index) => {
    this.books = this.books.filter((book, i) => index !== i);

    localStorage.setItem('books', JSON.stringify(this.books));
    this.renderBooks();
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const title = this.titleInput.value;
    const author = this.authorInput.value;

    if (title && author) {
      const itemBook = {
        title,
        author,
      };

      this.books.push(itemBook);

      localStorage.setItem('books', JSON.stringify(this.books));

      this.titleInput.value = '';
      this.authorInput.value = '';

      this.renderBooks();
    }
  };

  handleContent = (e) => {
    this.navItems.forEach((link) => link.classList.remove('blue'));
    this.contentDynamic.forEach((el) => {
      el.classList.remove('active');
      if (el.classList.contains(e.currentTarget.dataset.id)) {
        el.classList.add('active');
        e.currentTarget.classList.add('blue');
      }
    });
  };
}

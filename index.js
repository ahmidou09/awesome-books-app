import BookList from './modules/bookList.js';
import displayCurrentDate from './modules/displayDate.js';

const book = new BookList();
displayCurrentDate();

book.init();
import { DateTime } from '../node_modules/luxon/src/luxon.js';

const displayCurrentDate = () => {
  const header = document.querySelector('.header');
  const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  const htmlDate = `<div class="currentDate">${currentDate}</div>`;
  header.insertAdjacentHTML('afterend', htmlDate);
};

export default displayCurrentDate;
let adv = document.querySelector('.adv');
adv.remove();

let body = document.querySelector('body');
body.setAttribute('style','background-image:url(./image/you-dont-know-js.jpg)');

let books = document.querySelector('.books');
let book = document.querySelectorAll('.book');

books.appendChild(book[2]);
books.insertBefore(book[1], book[0]);
books.insertBefore(book[4], book[3]);

let headTwo = document.querySelectorAll('.book h2');
headTwo[2].textContent = 'Книга 3. this и Прототипы Объектов';

let ul = document.querySelectorAll('.book ul ');
ul[1].classList = 'second';

let li = document.querySelectorAll('.second li');
ul[1].insertBefore(li[6], li[4]);
ul[1].insertBefore(li[2], li[10]);
ul[1].insertBefore(li[8], li[4]);

ul[4].classList = 'five';
let liBookFive =  document.querySelectorAll('.five li');
ul[4].insertBefore(liBookFive[9], liBookFive[2]);
ul[4].insertBefore(liBookFive[2], liBookFive[6]);
ul[4].insertBefore(liBookFive[5], liBookFive[8]);

let esSix = document.createElement('li');
esSix.textContent = 'Глава 8: За пределами ES6';
ul[5].classList = 'six';
let liBookSix = document.querySelectorAll('.six li');
ul[5].insertBefore(esSix, liBookSix[9]);



const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}


// destructuring
const book = getBook(2);
book;

// const title = book.title;
// title;
// const author = book.author;
// author 

const {title, author, publicationDate, genres, pages, hasMovieAdaptation} = book;
title;
author;
publicationDate;
genres
hasMovieAdaptation 

// *************************
// destructuring with spread operator in array
// spread operator must be the last elem
// const firstGenre = genres[0]
// const secondGenre = genres[1]
const [firstGenre, secondGenre,...otherGenres] = genres;
firstGenre;
secondGenre;
otherGenres

const newGenres = [genres, 'man']
newGenres;
// we dont need that 
// we can put the array at first and begining 
const newGenres2 = [...genres, 'woman']
newGenres2;

// *************************
// destructuring with spread operator in objects
// if you put pages after spread operator he will override on the old value
const bookUpdated = {...book,
  // adding new property
   moviPubDate: '2020-2-3',
   // overriding old property
    pages: '300' }
bookUpdated; 



// ****************************
// ternary operator 

const pagesRange = pages > 1000 ? 'pages more than 1000' : 'pages less than 1000'
pagesRange;


// *****************************
// arrow function 


// function getYear(str){
//   return str.split('-')[0]
// }

const getYear = (str) => str.split('-')[0]
console.log(getYear(publicationDate) );

// if i want to many operations 

const getBookData = () => {
  const {title, author, publicationDate, genres, pages} = book;
  return (
    title, author, publicationDate, genres, pages
  )
}
 
getBookData()



// short circuting and logical operator 

console.log(true && 'any thing');
console.log(false && 'any thing');
console.log(hasMovieAdaptation && 'any thing with');

// truthy and falsy values
// falsy : 0, '', null, undefined

console.log(0 && 'ANY THING');
console.log('ALI' && 'ANY THING');

console.log(true || 'something');
console.log(false || 'something');

const koreanTranslation = book.translations.korean || 'No korean translation'
koreanTranslation

const reviews = book.reviews.librarything.reviewsCount || 'No reviews for this book';
reviews

//  work with null and undefined not 0 
const reviews2 = book.reviews.librarything.reviewsCount ?? 'No reviews for this book';
reviews2

// ********************************

// optional chaining

function getTotalReviews(book){
const countReviews = book.reviews.reviewsCount ?? 0
//  book.reviews.librarythings? we add ? if there is value continue else willnot give me error message
const librarythings = book.reviews.librarythings?.reviews ?? 0
librarythings;
countReviews;
      // number + undifined = nan
return countReviews + librarythings
}

console.log(getTotalReviews(book));



//  ******************************
//  Array methods map-filter-reduce-sort

const x = [1,2,3,4,5].map((ele)=>ele*2)
console.log(x)

const mybooks = getBooks()
const bookData = mybooks.map(
  (book) => {
    // we can replace {return{}} by ({})
    return {
    title:book.title,
    author:book.author,
    date:book.publicationDate,
    reviewsCount: getTotalReviews(book)
    }
  }
)

bookData;

const longestBooks = mybooks
  .filter((book) => book.pages > 500)
  .map((book) => book.title)
  // .filter((book) => book.author === 'Frank Herbert')

longestBooks

// acc starts with 0 and every time is store the new value
// reduce is the most powerfull method
// 0 initial value could be an array or object or string 
const countAllPages = mybooks.reduce((sum,book) => sum + book.pages , 0)
countAllPages;



const myarr = [5,2,3,4,9,1]
const ascSorting = myarr.sort((a,b) => a - b)
ascSorting;
myarr;

const desSorting = myarr.sort((a,b) => b - a)
ascSorting;
myarr;
/*sort method changing the arr to prevent that 
    we can use slice method to take a copy from array */

    const myarr2 = [5,2,3,4,9,1]
    const ascSort = myarr.slice().sort((a,b) => a - b)
    ascSorting;
    myarr2;


const sortByPages = mybooks.slice().sort((a,b) => b.pages - a.pages)
sortByPages;


// 1) add book to array 

const newBook = {
  id:6,
  title: 'Harry Potter and the Sorcerer\'s Stone',
  author: 'J. K. Rowling',
  publicationDate: '1997-06-26',
  genres: ['fantasy', 'adventure'],
  hasMovieAdaptation: true,
}

const newBooks = [...mybooks,newBook]
newBooks;

// 2) remove book from array

const newBooks2 = mybooks.filter((book) => book.id!== 6)
newBooks2;

// 3) update book in array
const bookAfterUpdating = mybooks.map(
  (book)=>book.id === 1 ? {...book, pages:1020} : book )

bookAfterUpdating;


// fetching data 

// fetch('https://jsonplaceholder.typicode.com/todos') // pending
// .then((res) => res.json()) // fullfilled
// .then((data) => console.log(data))

// console.log('ay haga');


async function getTodos(){
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  console.log(data);
  return data;
}

console.log(getTodos());
getTodos()
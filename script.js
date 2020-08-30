"use strict";

const numberOfFilms = +prompt('Как много фильмов вы посмотрели?', '');
console.log(typeof (numberOfFilms));

let personalMovieDB = {
    count : numberOfFilms,
    movies : {} ,
    actors : {} ,
    genres : [],
    privat : false
};

const a = prompt('whats films?', ''),
      b = prompt('score', ''),
      c = prompt('whats films?', ''),
      d = prompt('score', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
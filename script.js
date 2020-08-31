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

for (let i = 0; i < 2; i++) {
    let a = prompt('Whats film?', '');
    let b = prompt('how many score?', '');

    if(a != null && b != null && a != '' && b != '' && a.length <= 50 && b.length <= 50){
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else{
        console.log('error');
        i--;
    }   
}

if(personalMovieDB.count < 10) {
    alert('мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('вы класический зритель');
} else {
    alert('вы киноман');
}
console.log(personalMovieDB);



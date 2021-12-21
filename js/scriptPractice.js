const  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ' ');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из просмотренных фильмов?',''),
      b = prompt('На сколько вы его оцените?',''), 
      c = prompt('Какого жанра?'),
      d = prompt('Один из просмотренных фильмов?',''),  
      e = prompt('На сколько вы его оцените?',''),
      f = prompt('Какого жанра?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
personalMovieDB.genres[c.f];
console.log(personalMovieDB);
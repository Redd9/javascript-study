'use strict';

// let drink = prompt("Газировка или сок?");

// for (let i = 0; i < 1; i++) {
//     if (drink == "газировка" || "Газировка") {
//         let a = prompt('Cola or Sprite?', '');

//         if (a == 'Cola' && 'cola' && 'pepsi' && 'Pepsi') {
//             alert('Свято наближається!');
//         }
//     }

//     if (drink != "газировка" != "Газировка") {
//         alert('В здоровом теле - дух и много сахара :(');
//     }
    
//     else {
//         alert('Харош');
//     }
// }


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Красавчик");
    } else if (personalMovieDB.count >= 30) {
        console.log("Тупо топ!");
    } else {
        console.log("Баран тупой, ош1бка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`CHoose your fav genre by number ${i}`);
    }
}

writeYourGenres();
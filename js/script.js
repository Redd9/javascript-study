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




const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false, 
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function() {
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Красавчик");
        } else if (personalMovieDB.count >= 30) {
            console.log("Тупо топ!");
        } else {
            console.log("Баран тупой, ош1бка");
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`CHoose your fav genre by number ${i}`);

            if (genre === '' || genre == null) {
                console.log('Wrong data');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Lovely genre ${i + 1} is ${item}`);
        });
    }
};

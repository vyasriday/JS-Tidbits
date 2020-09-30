// Use the API 'https://omdbapi.com' to log in which the movie "titanic" was released.

fetch('https://omdbapi.com?t=titanic&apikey=YOURAPIKEY')
    .then(function (movie) {
        console.log(movie.year);
    })
    .catch(function (err) {
        console.log(err);
    });

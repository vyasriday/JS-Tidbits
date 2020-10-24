// Introduction to promises.
// A one time guaranteed return of some future value.
// When that value is figured out - the promise is resolved/fulfilled or rejected.
// Friendly way to refactor callback code.
// Libraries like JQuery have implemented Promises for a while, ES2015 is a little late to the game.

//Behind the scenes of a promise
// Created using the`new` keyword.
// Every promise constructor accepts a callback function which contains two parameters, resolve and reject.
// You can call these parameters whatever you like, resolve and reject are most common.
// These parameters are both functions to be run if the promise is resolved or rejected.

// Classic Example
// imagine as if setTimeout as a server request
function displayAtRandomTime() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() > .5) {
                resolve('Yes!');
            } else {
                reject('No!');
            }
        }, 1000)
    });
}

// and then the magic of .then(executes callback for resolved state) and .catch(executes callback for rejected state)
displayAtRandomTime().then(function (value) {
    console.log(value);
}).catch(function (error) {
    console.log(error);
});

//api example using promises

// Use the API 'https://omdbapi.com' to log in which the movie "titanic" was released.

fetch('https://omdbapi.com?t=titanic&apikey=YOURAPIKEY')
    .then(function (movie) {
        console.log(movie.year);
    })
    .catch(function (err) {
        console.log(err);
    });
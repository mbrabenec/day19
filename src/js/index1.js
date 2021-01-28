// 'use strict';
 
// const month = 11;
// const day = 23;
 
// const url = `https://api.abalin.net/namedays?country=cz&month=${month}&day=${day}`


// fetch(url)
//     .then((result) => 
//         result.json())
//     .then((data) => {
//     console.log(data.data.namedays.cz);
// });

// const url2 = `http://bootcamp.podlomar.org/api/departures`


// fetch(url2)
//     .then((result) => 
//         result.json())
//     .then((data) => {
//     console.log(data);
// });



document.querySelector("button").addEventListener("click", getJoke)
const output = document.querySelector(".chuck");
 



function getJoke() {

    const url = 'https://api.chucknorris.io/jokes/random'

    fetch(url)
        .then((result) => 
            result.json())
        .then((data) => {

            output.textContent = (data['value']);

});

}

getJoke();

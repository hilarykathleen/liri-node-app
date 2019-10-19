require("dotenv").config();

// link keys 
var keys = require("./keys.js");

// require packages
var fs = require('fs');
var axios = require('axios');
var moment = require('moment');
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

// user command and input
var command = process.argv[2];
var userQuery = process.argv.slice(3).join(" ");

if (command === 'concert-this') {
    concertThis();
}
else if (command === 'spotify-this-song') {
    spotifyThisSong();
}
else if (command === 'movie-this') {
    movieThis();
}
else if (command === 'do-what-it-says') {
    doWhatItSays(userQuery);
}
else {
    console.log('please enter valid command');

}

function concertThis() {
    axios.get("https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp")
        .then(function (response) {
        // console.log(response.data[0], "response");
        console.log("venue:" + response.data[0].venue.name);
        console.log("location:" + response.data[0].venue.city);
        var concertDate = moment(response.data[0].datetime).format("MM/DD/YYYY hh:00 A");
                    console.log(`Date and Time: ${concertDate}\n\n`);
    })
        .catch(function (error) {
        console.log(error);
  })
};


function spotifyThisSong() {
console.log()
}

function movieThis() {
    axios.get("http://www.omdbapi.com/?t=" + userQuery + "&y=&plot=short&apikey=trilogy")
    .then(function(response) {
        console.log("title: " + response.data.Title);
        console.log("year: " + response.data.Year);
        console.log("IMBD rating: " + response.data.imdbRating);
        console.log("rotten tomatoes rating: " + response.data.Ratings[1].Value);
        console.log("country: " + response.data.Country);
        console.log("language: " + response.data.Language);
        console.log("plot: " + response.data.Plot);
        console.log("actors: " + response.data.Actors);
  })
        .catch(function (error) {
         console.log(error);
})
};

//    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'



function doWhatItSays() {
console.log()
}





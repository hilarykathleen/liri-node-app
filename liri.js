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
var input = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

if (input === 'concert-this') {
    concertThis();
}
else if (input === 'spotify-this-song') {
    spotifyThisSong(searchType);
}
else if (input === 'movie-this') {
    movieThis(searchType);
}
else if (input === 'do-what-it-says') {
    doWhatItSays(searchType);
}
else {
    console.log('please enter valid command');

}

function concertThis() {
    axios.get("https://rest.bandsintown.com/artists/" + "Madonna" + "/events?app_id=codingbootcamp")
        .then(function (response) {
        console.log(response, "response");
    })
        .catch(function (error) {
        console.log(error);
  })
};
// `node liri.js concert-this <artist/band name here>`
//  * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
//  * Name of the venue
//  * Venue location
//  * Date of the Event (use moment to format this as "MM/DD/YYYY")
//  * **Important**: There is no need to sign up for a Bands in Town `api_id` key. Use the `codingbootcamp` as your `app_id`. For example, the URL used to search for "Celine Dion" would look like the following:
//  * `https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp`

function spotifyThisSong() {
console.log('')
}

function movieThis() {

}

function doWhatItSays() {

}





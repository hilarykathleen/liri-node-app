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
        console.log(response.data[0].venue.name, "venue");
        console.log(response.data[0].venue.city, "location");
        var concertDate = moment(response.data[0].datetime).format("MM/DD/YYYY hh:00 A");
                    console.log(`Date and Time: ${concertDate}\n\n`);
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
console.log()
}

function movieThis() {
console.log()
}

function doWhatItSays() {
console.log()
}





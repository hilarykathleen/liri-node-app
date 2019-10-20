# liri-node-app
LIRI is a command line node app that takes in parameters and gives you back data.

Liri is a command line node app that takes in parameters and gives you back data from API's. The following commands have been hard coded into the program to give the user the capability to look up songs, concerts and movie information: concert-this, spotify-this-song, movie-this and do-what-it-says.

`node liri.js concert-this <artist/band name here>` function takes the command and the userQuery(artist), and returns the next concert time and date for that artist, as well as location and city.

![](images/Screenshot%202019-10-20%20at%204.48.14%20PM.png)

`node liri.js spotify-this-song '<song name here>'` function takes the command and the userQuery(song name), and returns the artist, song name, album and preview link of hte song from Spotify. If no song is provided then your program will default to "The Sign" by Ace of Base.

`node liri.js movie-this '<movie name here>'` function takes the command and the userQuery (movie name), and returns title, year the movei came out, IMBD rating, Rotten Tomatoes rating, country where the movie was produced, language, plot and actors. If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

`node liri.js do-what-it-says` LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
       

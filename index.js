// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "The Chain", artist: "Fleetwood Mac", genre: "Rock" },
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlistContainer = document.getElementById("playlists");

    // Clear any existing content in the playlists container
    playlistContainer.innerHTML = '';

    Object.entries(guardians).forEach(([guardian, genre]) => {
        // Filter songs based on the guardian's preferred genre
        const guardianSongs = songs.filter(song => song.genre === genre);

        // Create a new div for each guardian's playlist
        const playlistDiv = document.createElement("div");
        playlistDiv.className = "playlist";

        // Create and append the guardian's name heading
        const nameHeading = document.createElement("h2");
        nameHeading.textContent = `${guardian}'s Playlist`;
        playlistDiv.appendChild(nameHeading);

        // Create and append the list of songs
        const songList = document.createElement("ul");
        guardianSongs.forEach(song => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${song.title}</strong> by ${song.artist}`;
            songList.appendChild(listItem);
        });
        playlistDiv.appendChild(songList);

        // Append the completed playlist div to the main container
        playlistContainer.appendChild(playlistDiv);
    });
}

// Call generatePlaylist to display the playlists for each Guardian
generatePlaylist(guardians, songs);

function fetchSongInfo() {
  var iframe = document.getElementById("app-player");
  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  var name = innerDoc.getElementById("track-name").childNodes[0].text;
  var artist = innerDoc.getElementById("track-artist").childNodes[0].text;
  return {"name": name, "artist": artist}
}

var updateSongURL = "https://2bGTAhSCE5SQv5zFtAKgW4zQvYOGwfAuDOnISgPV:javascript-key=SaD6YMlhfP0E0cGEqUMizpZngYwT9u3A3zZh7Ahh@api.parse.com/1/classes/song/aZBIGOMi8M";

function updateSong(song_data) {
  song_data = JSON.stringify(song_data);
  var xhr = new XMLHttpRequest();
  xhr.open("PUT", updateSongURL, false);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(song_data);
}

setInterval(function() {
  updateSong(fetchSongInfo());
},
10000);
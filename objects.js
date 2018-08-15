var playlist = {Asheck: 'You too big'}

function updatePlaylist(playlist, artistName, songTitle){
<<<<<<< HEAD
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
=======
  playlist.artistName = 'songTitle';
}
function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
>>>>>>> 06ca2c6f9a7a51e44069e961e5f12c7a0426186c
}
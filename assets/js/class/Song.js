class Song {
    constructor(id, cover, nameSongs, artistName, songsPrice, releaseDate, songLength, musicGner, audioSong, linkSong) {
        this.id = id;
        this.cover = cover;
        this.nameSongs = nameSongs;
        this.artistName = artistName;
        this.songsPrice = songsPrice;
        this.releaseDate = releaseDate;
        this.songLength = this.getMinutes(songLength);
        this.musicGner = musicGner;
        this.audioSong = audioSong;
        this.linkSong = linkSong;
    }
    getMinutes(val) {
        var min = Math.floor(val / 60000);
        var sec = ((val % 60000) / 1000).toFixed(0);
        return min + ":" + (sec < 10 ? '0' : '') + sec;

    }
}
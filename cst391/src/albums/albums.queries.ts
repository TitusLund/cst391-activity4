export const albumQueries = {
    readAlbums:
    "SELECT id as albumId, title as title, artist as artist, description as description, year as year, image as image from music.albums",
    readAlbumsByArtist:
    "SELECT id as albumId, title as title, artist as artist, description as description, year as year, image as image from music.albums where music.albums.artist = ?",
    readAlbumsByArtistSearch:
    "SELECT id as albumId, title as title, artist as artist, description as description, year as year, image as image from music.albums where music.albums.artist like ?",
    readAlbumsByDescriptionSearch:
    "SELECT id as albumId, title as title, artist as artist, description as description, year as year, image as image from music.albums where music.albums.description like ?",
    readAlbumsByAlbumId:
    "SELECT id as albumId, title as title, artist as artist, description as description, year as year, image as image from music.albums where music.albums.id = ?",
    createAlbum:
    "INSERT INTO albums(title, artist, description, year, image) VALUES(?,?,?,?,?)",
    updateAlbum:
    "UPDATE music.albums SET title = ?, artist = ?, year = ?, image = ? description = ? WHERE id = ?",
    deleteAlbum:
    "DELETE FROM music.albums where id = ?"
}
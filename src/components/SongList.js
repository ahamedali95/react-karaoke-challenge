import React from 'react';
import Song from "./Song.js";

const SongList = (props) => {
  const rows = props.songs.map((songObj) => {
    return <Song song={songObj} playSong={props.playSong}/>;
  });

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
          <th>No. of plays</th>
        </tr>
        {rows}
      </tbody>
    </table>
  )
}

export default SongList;

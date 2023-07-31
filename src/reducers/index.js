import { combineReducers } from "redux";

const SongsReducer = () => {
  return [
    { title: "Beyond Descrip", duration: "3:10" },
    { title: "Love lifted Me", duration: "4:50" },
    { title: "Pass Me not", duration: "2:44" },
    { title: "Love at Home", duration: "5:05" },
  ];
};

const SelectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.song;
  }

  return selectedSong;
};

export default combineReducers({
  songs: SongsReducer,
  selectedSong: SelectedSongReducer,
});

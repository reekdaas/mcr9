import { videos } from "../Utils/videoData";

export const initialplaylistValue = {
  videoList: JSON.parse(localStorage.getItem("videolist")) || videos,
  playlist: JSON.parse(localStorage.getItem("playlist")) || [],
};

export default function playlistReducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TO_PLAYLIST": {
      const newPlaylist = [...state.playlist, payload];
      localStorage.setItem("playlist", JSON.stringify(newPlaylist));
      return { ...state, playlist: newPlaylist };
    }
    case "DELETE_FROM_PLAYLIST": {
      const newPlaylist = state.playlist.filter((data) => data.id !== payload);
      localStorage.setItem("playlist", JSON.stringify(newPlaylist));

      return { ...state, playlist: newPlaylist };
    }
    case "ADD_VIDEO_TO_PLAYLIST": {
      const video = state.videoList.find(
        (data) => data?._id === payload.videoId
      );
      const newPlaylist = state.playlist.map((data) =>
        data.name === payload.playlistName
          ? { ...data, videos: [...data.videos, video] }
          : data
      );
      localStorage.setItem("playlist", JSON.stringify(newPlaylist));
      return { ...state, playlist: newPlaylist };
    }

    case "DELETE_VIDEO_FROM_PLAYLIST": {
      console.log(state);
      console.log(payload);
      const newPlaylist = state.playlist.map((data) =>
        data.name === payload.playListName
          ? {
              ...data,
              videos: data.videos.filter(
                (video) => video._id !== +payload.videoId
              ),
            }
          : data
      );
      console.log(newPlaylist);
      localStorage.setItem("playlist", JSON.stringify(newPlaylist));
      return { ...state, playlist: newPlaylist };
    }

    case "ADD_TO_WATCH_LATER": {
      const newVideoList = state.videoList.map((data) =>
        data._id === payload ? { ...data, watchlater: true } : data
      );
      localStorage.setItem("videolist", JSON.stringify(newVideoList));
      return { ...state, videoList: newVideoList };
    }
    case "REMOVE_FROM_WL": {
      const newVideoList = state.videoList.map((data) =>
        data?._id === payload ? { ...data, watchlater: false } : data
      );
      localStorage.setItem("videolist", JSON.stringify(newVideoList));
      return { ...state, videoList: newVideoList };
    }
    case "ADD_NOTES": {
      // console.log(payload);
      let newVideoList;
      const isNotePresent = state.videoList.find(
        ({ _id }) => _id === payload?.videoId
      )?.notes;
      if (isNotePresent) {
        newVideoList = state.videoList.map((data) =>
          data?._id === +payload?.videoId
            ? { ...data, notes: [...data?.notes, payload.note] }
            : { ...data, notes: [] }
        );
      } else {
        newVideoList = state.videoList.map((data) =>
          data?._id === +payload?.videoId
            ? { ...data, notes: [payload.note] }
            : { ...data, notes: [] }
        );
      }

      localStorage.setItem("videolist", JSON.stringify(newVideoList));
      return { ...state, videoList: newVideoList };
    }
    case "DELETE_POST": {
      const newVideoList = state.videoList.map((data) =>
        data?._id === payload.videoId
          ? {
              ...data,
              notes: data.notes.filter((note) => note.id !== payload.noteId),
            }
          : data
      );
      localStorage.setItem("videolist", JSON.stringify(newVideoList));
      return { ...state, videoList: newVideoList };
    }
    default:
      return state;
  }
}

import { useState } from "react";
import { usePlaylistContext } from "../../Context/playlistContext";
import styles from "./addtoPlaylist.module.css";
import { v4 as uuid } from "uuid";
import { MdCancel } from "react-icons/md";

export default function AddToPlaylist({ handlePlaylist, videoData }) {
  const [inputvalue, setInputvalue] = useState("");

  const {
    playlistValue: { playlist },
    playlistDispatch,
  } = usePlaylistContext();

  return (
    <div className={styles.addtoPlaylist}>
      <label htmlFor="playlistName"></label>
      <input
        type="text"
        id="playlistName"
        placeholder="New Playlist"
        value={inputvalue}
        onChange={(e) => {
          setInputvalue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (inputvalue.length > 0) {
            playlistDispatch({
              type: "ADD_TO_PLAYLIST",
              payload: { id: uuid(), name: inputvalue, videos: [] },
            });
          }
          handlePlaylist(false);
        }}
      >
        Create new playlist
      </button>

      <div>
        {playlist?.map(({ id, name }) => (
          <div key={id} className={styles.card}>
            <h2
              onClick={() => {
                playlistDispatch({
                  type: "ADD_VIDEO_TO_PLAYLIST",
                  payload: {
                    videoId: videoData?._id,
                    playlistName: name,
                  },
                });
              }}
            >
              {name}
            </h2>
            <span
              onClick={() => {
                playlistDispatch({ type: "DELETE_FROM_PLAYLIST", payload: id });
              }}
            >
              <MdCancel />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

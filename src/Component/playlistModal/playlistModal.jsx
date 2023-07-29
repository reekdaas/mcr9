import { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./modal.module.css";
import { MdCancel } from "react-icons/md";
import { usePlaylistContext } from "../../Context/playlistContext";

export default function PlayListModal({ openModal, handleModal }) {
  const [inputvalue, setInputvalue] = useState("");
  const { playlistDispatch } = usePlaylistContext();

  return (
    <div>
      <div
        className={styles.modalOverlay}
        onClick={() => {
          handleModal(false);
        }}
      ></div>
      <div className={styles.modalContainer}>
        <div className={styles.editmodalHeader}>
          <h2>Add To Playlist</h2>
          <span
            className={styles.cancelBtn}
            onClick={() => {
              handleModal(false);
            }}
          >
            <MdCancel />
          </span>
        </div>
        <div className={styles.addInput}>
          {" "}
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
              handleModal(false);
              playlistDispatch({
                type: "ADD_TO_PLAYLIST",
                payload: {
                  id: uuid(),
                  name: inputvalue,
                  videos: [],
                },
              });
            }}
          >
            Create New Playlist
          </button>
        </div>
      </div>
    </div>
  );
}

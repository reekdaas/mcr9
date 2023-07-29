import { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./noteModal.module.css";
import { usePlaylistContext } from "../../Context/playlistContext";

export default function NoteModal({ handleModal, data }) {
  const [inputvalue, setInputvalue] = useState("");
  const { playlistDispatch } = usePlaylistContext();

  const handleClick = () => {
    handleModal(false);
    if (inputvalue.length > 0) {
      playlistDispatch({
        type: "ADD_NOTES",
        payload: {
          videoId: data._id,
          note: { id: uuid(), value: inputvalue },
        },
      });
    }
  };

  return (
    <div>
      <div
        className={styles.modalOverlay}
        onClick={() => {
          handleModal(false);
        }}
      ></div>
      <div className={styles.modalContainer}>
        <h1>Add New Note</h1>
        <input
          required
          type="text"
          // id=""
          placeholder="Add Note...."
          value={inputvalue}
          onChange={(e) => {
            setInputvalue(e.target.value);
          }}
        />
        <button onClick={handleClick}>Add New Note</button>
      </div>
    </div>
  );
}

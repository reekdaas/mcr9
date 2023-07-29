import { useState } from "react";
import Navbar from "../../Component/navbar/navbar";
import styles from "./playList.module.css";
import PlayListModal from "../../Component/playlistModal/playlistModal";
import { usePlaylistContext } from "../../Context/playlistContext";
import PlaylistCard from "../../Component/playlisCard/playlistCard";

export default function PlayListPage() {
  const { playlistValue } = usePlaylistContext();
  const [openModal, setOpenmodal] = useState(false);
  // console.log(playlistValue);
  return (
    <div className={styles.playListpage}>
      <Navbar />
      <div>
        <button
          className={styles.btn}
          onClick={() => {
            setOpenmodal((prev) => !prev);
          }}
        >
          Add To PlayList
        </button>
        <div className={styles.playListcontainer}>
          {playlistValue.playlist?.map((data) => (
            <PlaylistCard key={data.id} data={data} />
          ))}
        </div>
      </div>
      {openModal && (
        <PlayListModal openModal={openModal} handleModal={setOpenmodal} />
      )}
    </div>
  );
}

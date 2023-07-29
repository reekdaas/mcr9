import { useNavigate } from "react-router-dom";
import { usePlaylistContext } from "../../Context/playlistContext";
import styles from "./playlist.module.css";
import { MdCancel } from "react-icons/md";

export default function PlaylistCard({ data }) {
  const navigate = useNavigate();
  const { playlistDispatch } = usePlaylistContext();

  return (
    <div
      className={styles.playlistCard}
      onClick={() => {
        navigate(`/playlist/${data.name}`);
      }}
    >
      <span>
        {" "}
        <MdCancel
          onClick={() => {
            playlistDispatch({
              type: "DELETE_FROM_PLAYLIST",
              payload: data.id,
            });
          }}
        />
      </span>
      <img src="https://picsum.photos/seed/picsum/200/300" alt={data?.name} />
      <p>{data?.name}</p>
    </div>
  );
}

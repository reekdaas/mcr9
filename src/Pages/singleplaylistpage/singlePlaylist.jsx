import { useParams } from "react-router-dom";
import styles from "./siplay.module.css";
import Navbar from "../../Component/navbar/navbar";
import { usePlaylistContext } from "../../Context/playlistContext";
import VideoCard from "../../Component/videoCard/videoCard";
import { MdCancel } from "react-icons/md";

export default function SinglePlaylistPage() {
  const { name } = useParams();
  const {
    playlistValue: { playlist },
    playlistDispatch,
  } = usePlaylistContext();
  const playList = playlist.find((data) => data.name === name);
  console.log(playList.videos);
  return (
    <div className={styles.singleplaylistpage}>
      <Navbar />
      <div>
        <h1>Playlist</h1>
        <div className={styles.playlistContainer}>
          {playList.videos?.map((data) => (
            <div key={data._id} className={styles.card}>
              <span
                onClick={() => {
                  playlistDispatch({
                    type: "DELETE_VIDEO_FROM_PLAYLIST",
                    payload: {
                      playListName: name,
                      videoId: data?._id,
                    },
                  });
                }}
              >
                <MdCancel />
              </span>
              <VideoCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

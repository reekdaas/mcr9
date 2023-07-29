import Navbar from "../../Component/navbar/navbar";
import VideoCard from "../../Component/videoCard/videoCard";
import { usePlaylistContext } from "../../Context/playlistContext";
import styles from "./watchLater.module.css";

export default function WatchLater() {
  const {
    playlistValue: { videoList },
  } = usePlaylistContext();
  // console.log(videoList);

  const watchLater = videoList.filter((video) => video?.watchlater);

  return (
    <div className={styles.watchlater}>
      <Navbar />
      <div>
        <h1>Watchlater</h1>
        <div className={styles.watchlaterContainer}>
          {watchLater.map((data) => (
            <VideoCard data={data} key={data._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

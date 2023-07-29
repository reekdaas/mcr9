import Navbar from "../../Component/navbar/navbar";
import VideoCard from "../../Component/videoCard/videoCard";
import { usePlaylistContext } from "../../Context/playlistContext";
import { videos } from "../../Utils/videoData";
import styles from "./explore.module.css";

export default function ExplorePage() {
  const {} = usePlaylistContext();
  return (
    <div className={styles.explorPage}>
      <Navbar />
      <div>
        <h1>Explore</h1>
        <div className={styles.exploreContainer}>
          {videos.map((data) => (
            <VideoCard data={data} key={data._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

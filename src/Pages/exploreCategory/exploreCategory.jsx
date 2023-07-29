import { useParams } from "react-router-dom";
import styles from "./explore.module.css";
import Navbar from "../../Component/navbar/navbar";
import VideoCard from "../../Component/videoCard/videoCard";
import { usePlaylistContext } from "../../Context/playlistContext";
export default function ExploreCategory() {
  const {
    playlistValue: { videoList },
  } = usePlaylistContext();

  const { category } = useParams();
  // console.log(category);
  const videodata = videoList.filter((video) => video.category === category);
  console.log(videodata);
  return (
    <div className={styles.explorePage}>
      <Navbar />
      <div>
        <h2>{category}</h2>
        <div className={styles.exploreContainer}>
          {videodata.map((data) => (
            <VideoCard data={data} key={data?._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

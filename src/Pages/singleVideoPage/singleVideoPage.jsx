import { useParams } from "react-router-dom";
import Navbar from "../../Component/navbar/navbar";
import YoutubeEmbedded from "../../Component/youtubeCard/youtubeCard";
import styles from "./singleVideo.module.css";
import MoreVideos from "../../Component/moreVideos/moreVideos";
import { usePlaylistContext } from "../../Context/playlistContext";

export default function SingleVideo() {
  const {
    playlistValue: { videoList },
  } = usePlaylistContext();
  const { id } = useParams();
  const video = videoList.find((data) => data?._id === Number(id));
  const videolist = videoList
    .filter((data) => data?._id !== Number(id))
    .slice(0, 5);
  // console.log(videoList);
  return (
    <div className={styles.singleVideo}>
      <Navbar />
      <YoutubeEmbedded videoLink={video.src} data={video} />
      <MoreVideos videoList={videolist} />
    </div>
  );
}

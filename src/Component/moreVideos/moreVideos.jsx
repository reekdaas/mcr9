import { useNavigate } from "react-router-dom";
import styles from "./moreVideo.module.css";

export default function MoreVideos({ videoList }) {
  const navigate = useNavigate();
  return (
    <div className={styles.moreVideo}>
      <h1>More Videos</h1>
      <div>
        {videoList.map((video) => (
          <div
            className={styles.videoCard}
            key={video?._id}
            onClick={() => {
              navigate(`/video/${video?._id}`);
            }}
          >
            <img src={video.thumbnail} alt={video.title} />
            <div>
              <p>{video.title}</p>
              <p>{video.creator}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

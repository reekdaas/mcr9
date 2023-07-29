import { useState } from "react";
import styles from "./youtube.module.css";
import { MdWatchLater, MdPlaylistAdd } from "react-icons/md";
import AddToPlaylist from "./addtoPlaylist";
import { usePlaylistContext } from "../../Context/playlistContext";

export default function YoutubeEmbedded({ videoLink, data }) {
  const [showplaylist, setShowplaylist] = useState(false);
  const {
    playlistValue: { videoList, playlist },
  } = usePlaylistContext();
  // const alreadyInPlaylist=playlist?.m(({videos})=>videos.find)

  return (
    <div className={styles.videoResponsive}>
      <iframe
        width="800"
        height="480"
        src={videoLink}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <div className={styles.videoInfo}>
        <div>
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt={data.title}
          />
          <p>{data.title}</p>
        </div>
        <div className={styles.icon}>
          <span>
            <MdWatchLater />
          </span>
          <span
            onClick={() => {
              setShowplaylist((prev) => !prev);
            }}
          >
            <MdPlaylistAdd />
          </span>
        </div>
      </div>
      {showplaylist && (
        <AddToPlaylist handlePlaylist={setShowplaylist} videoData={data} />
      )}
    </div>
  );
}

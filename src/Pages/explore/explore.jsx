import { useState } from "react";
import Navbar from "../../Component/navbar/navbar";
import VideoCard from "../../Component/videoCard/videoCard";
import { usePlaylistContext } from "../../Context/playlistContext";
import { videos } from "../../Utils/videoData";
import styles from "./explore.module.css";

export default function ExplorePage() {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState(videos);
  return (
    <div className={styles.explorPage}>
      <Navbar />
      <div>
        <div className={styles.exploreHeader}>
          {" "}
          <h1>Explore</h1>
          <input
            placeholder="Search By Titile.."
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setFilteredData(
                videos.filter((data) =>
                  data.title
                    .trim()
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())
                )
              );
            }}
          />
        </div>

        <div className={styles.exploreContainer}>
          {filteredData.map((data) => (
            <VideoCard data={data} key={data._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

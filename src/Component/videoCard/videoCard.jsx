import { useNavigate } from "react-router-dom";
import styles from "./videoCard.module.css";

export default function VideoCard({ data }) {
  // console.log(data);
  const navigate = useNavigate();

  return (
    <div
      className={styles.videoCard}
      onClick={() => {
        navigate(`/video/${data?._id}`);
      }}
    >
      <img src={data?.thumbnail} alt={data.title} />
      <div className={styles.details}>
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          alt={data.creator}
        />
        <div className={styles.detailsInfo}>
          <h2>{data.title}</h2>
          <p>{data.category}</p>
          <p>
            {" "}
            <span>{data.views}</span> || <span>{data.creator}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

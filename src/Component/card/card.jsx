import { useNavigate } from "react-router-dom";
import styles from "./card.module.css";

export default function Card({ data }) {
  // console.log(data);
  const navigate = useNavigate();
  return (
    <div
      className={styles.card}
      onClick={() => {
        navigate(`/${data.category}`);
      }}
    >
      <img src={data?.thumbnail} alt={data?.category} />
      <p>{data?.category}</p>
    </div>
  );
}

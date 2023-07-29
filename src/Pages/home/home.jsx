import Card from "../../Component/card/card";
import Navbar from "../../Component/navbar/navbar";
import { categories } from "../../Utils/categoryData";
import styles from "./home.module.css";

export default function Home() {
  // console.log(categories);
  return (
    <div className={styles.homePage}>
      <Navbar />
      <div>
        <h1>Category</h1>
        <div className={styles.categoryContainer}>
          {categories.map((data) => (
            <Card data={data} key={data._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

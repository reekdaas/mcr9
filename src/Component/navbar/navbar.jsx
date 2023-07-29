import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MdPlaylistAdd, MdWatchLater } from "react-icons/md";

export default function Navbar() {
  const giveClassName = ({ isActive }) =>
    isActive ? `${styles.activeLink} ${styles.navLink}` : `${styles.navLink} `;

  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <NavLink className={giveClassName} to="/">
            <span>
              <AiFillHome />
            </span>
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={giveClassName} to="/explore">
            <span>
              <BiSearch />
            </span>
            <p>Explore</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={giveClassName} to="/playlist">
            <span>
              <MdPlaylistAdd />
            </span>
            <p>Playlist</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={giveClassName}>
            <span>
              <MdWatchLater />
            </span>
            <p>Watch Later</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

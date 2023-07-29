import { Route, Routes } from "react-router-dom";
import Home from "../Pages/home/home";
import ExplorePage from "../Pages/explore/explore";
import ExploreCategory from "../Pages/exploreCategory/exploreCategory";
import SingleVideo from "../Pages/singleVideoPage/singleVideoPage";
import PlayListPage from "../Pages/playList/playList";
import SinglePlaylistPage from "../Pages/singleplaylistpage/singlePlaylist";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/:category" element={<ExploreCategory />} />
      <Route path="/video/:id" element={<SingleVideo />} />
      <Route path="/playlist" element={<PlayListPage />} />
      <Route path="/playlist/:name" element={<SinglePlaylistPage />} />
    </Routes>
  );
}

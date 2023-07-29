import { createContext, useContext, useReducer } from "react";
import playlistReducer, {
  initialplaylistValue,
} from "../Reducer/playlistReducer";

export const PlaylistContext = createContext(null);

export default function PlaylistContextProvider({ children }) {
  const [playlistValue, playlistDispatch] = useReducer(
    playlistReducer,
    initialplaylistValue
  );

  // console.log(playlistValue);
  const value = { playlistValue, playlistDispatch };
  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
}

export const usePlaylistContext = () => {
  const context = useContext(PlaylistContext);
  return context;
};

import { useState } from "react";
import styles from "./youtube.module.css";
import { AiFillDelete } from "react-icons/ai";
import {
  MdWatchLater,
  MdPlaylistAdd,
  MdOutlineWatchLater,
} from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import AddToPlaylist from "./addtoPlaylist";
import { usePlaylistContext } from "../../Context/playlistContext";
import NoteModal from "../noteModal/noteModal";
const alreadyInWatchLater = (videolist, data) => {
  const watchLaterArray = videolist.filter((video) => video?.watchlater);
  const isPresent = watchLaterArray?.find(({ _id }) => _id === data?._id);
  return isPresent ? true : false;
};
export default function YoutubeEmbedded({ videoLink, data }) {
  const [showplaylist, setShowplaylist] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const {
    playlistValue: { videoList, playlist },
    playlistDispatch,
  } = usePlaylistContext();

  const isPresntinWL = alreadyInWatchLater(videoList, data);
  // console.log(isPresntinWL);
  console.log(videoList);

  const handleWatchLater = () => {
    if (isPresntinWL)
      playlistDispatch({ type: "REMOVE_FROM_WL", payload: data?._id });
    else
      playlistDispatch({
        type: "ADD_TO_WATCH_LATER",
        payload: data?._id,
      });
  };
  const notesList = videoList.find(({ _id }) => _id === data?._id)?.notes;

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
          <span onClick={handleWatchLater}>
            {isPresntinWL ? <MdWatchLater /> : <MdOutlineWatchLater />}
          </span>
          <span
            onClick={() => {
              setShowplaylist((prev) => !prev);
            }}
          >
            <MdPlaylistAdd />
          </span>
          <span>
            <BiEditAlt
              onClick={() => {
                setShowNoteModal((prev) => !prev);
              }}
            />
          </span>
        </div>
      </div>

      <div className={styles.notesList}>
        {notesList
          ? notesList.map((note) => (
              <div className={styles.noteCard} key={note.id}>
                <h2>{note?.value}</h2>
                <span
                  onClick={() => {
                    playlistDispatch({
                      type: "DELETE_POST",
                      payload: { videoId: data._id, noteId: note.id },
                    });
                  }}
                >
                  <AiFillDelete />
                </span>
              </div>
            ))
          : null}
      </div>

      {showplaylist && (
        <AddToPlaylist handlePlaylist={setShowplaylist} videoData={data} />
      )}
      {showNoteModal && (
        <NoteModal handleModal={setShowNoteModal} data={data} />
      )}
    </div>
  );
}

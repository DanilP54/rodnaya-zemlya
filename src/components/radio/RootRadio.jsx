import { Header } from "../header/header";
import { PlayList } from "./player-radio/Playlist";
import { PodcastBlock } from "./player-radio/PodcastBlock";
import { useState } from "react";

import { ToastContainer } from "react-toastify";


export default function RootRadio() {
  const [tracks, setTracks] = useState(null);
  const [name, setName] = useState(null);

  const handleSetTracks = (data, name) => {
    setTracks(data);
    setName(name)
  };

  return (
    <>
      <div id="radio" style={{ height: "100vh" }}>
        <Header page={"radio"} radio={!!tracks} />
        <PodcastBlock handleSetTracks={handleSetTracks} radio={!!tracks} />
      </div>
      <PlayList playlist={tracks} name={name} />
      <ToastContainer />
    </>
  );
}

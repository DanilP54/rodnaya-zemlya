import React, { useState, useRef, useEffect } from "react";
import { TrackList } from "./trackList";
import { TrackInfo } from "./TrackInfo";
import { tracks } from "./tracks";

 
  const styles = {
  container: {
    display: "flex",
    gap: "1.5rem",
    padding: "1.5rem",
    maxWidth: "1200px",
    margin: "0 auto",
    height: "60vh",
  },
  trackListContainer: {
    width: "50%",
    height: "100%",
  },
  trackInfoContainer: {
    width: "50%",
    position: "relative",
    height: "500px",
  },
};

export default function PodcastPlayer({ handleSetTracks, radio = false }) {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleTrackSelect = (track) => {
      document.querySelector("#radio").style.transition = 'background-image .3s';
      document.querySelector('#radio').style.backgroundImage = `url(${track.image})`
      handleSetTracks(track.playlist, track.title)
      setSelectedTrack(track);
  };


  return (
    <div style={styles.container}>
      <div style={styles.trackListContainer}>
        <TrackList
          radio={radio}
          tracks={tracks}
          selectedTrack={selectedTrack}
          onTrackSelect={handleTrackSelect}
          setSelectedTrack={setSelectedTrack}
          handleSetTracks={handleSetTracks}
        />
      </div>

      <div style={styles.trackInfoContainer}>
        {selectedTrack && (
          <TrackInfo
            radio={radio}
            track={selectedTrack}
            // tracks={tracks}
          />
        )}
      </div>
    </div>
  );
}

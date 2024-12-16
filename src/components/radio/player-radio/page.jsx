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
  const [playingTrackId, setPlayingTrackId] = useState(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio());
  const trackRefs = useRef([]);


  useEffect(() => {
    const audio = audioRef.current;


    const updateProgress = () => {
      const audio = audioRef.current;
      if (audio.duration && audio.currentTime) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };


    const updateDuration = () => {
      setDuration(audio.duration ?? 30);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);


  const handleTrackSelect = (track) => {
      document.querySelector("#radio").style.transition = 'background-image .3s';
      document.querySelector('#radio').style.backgroundImage = `url(${track.image})`
      handleSetTracks(track.playlist, track.title)
      setSelectedTrack(track);
  };


  const handlePlayPause = (trackId, image) => {
    const audio = audioRef.current;

    if (playingTrackId === trackId) {

      audio.pause();
      setPlayingTrackId(null);
    } else {
      document.querySelector("#radio").style.transition = 'background-image .3s';
      document.querySelector('#radio').style.backgroundImage = `url(${image})`
      const track = tracks.find((track) => track.id === trackId);
      if (track) {
        handleSetTracks(track.playlist, track.title)
        setSelectedTrack(track);
        setPlayingTrackId(trackId);
        audio.src = track.trackSrc;

        audio.play();
      }
    }
  };



  const handleRewind = () => {
    const audio = audioRef.current;
    if (audio && !isNaN(audio.currentTime)) {

      if (audio.currentTime <= 10) {
        audio.currentTime = 0;
      } else {
        audio.currentTime = audio.currentTime - 10;
      }

    }
  };



  const handleForward = () => {
    const audio = audioRef.current;
    if (audio && !isNaN(audio.currentTime) && !isNaN(audio.duration)) {

      if (audio.currentTime + 10 >= audio.duration) {
        audio.currentTime = audio.duration;
        if (!audio.paused) {
          audio.pause();
        }
      } else {
        audio.currentTime = audio.currentTime + 10;


      }
    }
  };


  const handleVolumeChange = (volume) => {
    audioRef.current.volume = volume / 100;
  };



  const handleProgressChange = (progress) => {
    audioRef.current.currentTime = (progress / 100) * audioRef.current.duration;
  };

  return (
    <div style={styles.container}>
      <div style={styles.trackListContainer}>
        <TrackList
          radio={radio}
          tracks={tracks}
          selectedTrack={selectedTrack}
          playingTrackId={playingTrackId}
          onTrackSelect={handleTrackSelect}
          onPlayPause={handlePlayPause}
          setSelectedTrack={setSelectedTrack}
          handleSetTracks={handleSetTracks}
          trackRefs={trackRefs}
        />
      </div>

      <div style={styles.trackInfoContainer}>
        {selectedTrack && (
          <TrackInfo
            radio={radio}
            duration={duration}
            track={selectedTrack}
            progress={progress}
            onProgressChange={handleProgressChange}
            onRewind={handleRewind}
            onForward={handleForward}
            onVolumeChange={handleVolumeChange}
          />
        )}
      </div>
    </div>
  );
}

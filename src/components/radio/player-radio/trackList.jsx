import React, { useEffect, useLayoutEffect } from "react";
import { Button } from "./Button";
import { Pause, Play } from "lucide-react";
import { useThemeContext } from "../../../context/ThemeContext";
import { usePlayerContext } from "../../../context/usePlayerContext";


const styles = {
  container: {
    padding: '5px',
    overflow: "auto",
    backdropFilter: 'blur(30px)',
  },
  trackItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem 2rem",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out",
  },
  trackItemHover: {
    backgroundColor: "#35353520",
  },
  trackInfo: {
    flex: 1,
  },
  trackTitle: {
    fontSize: '17px',
    fontWeight: "600",
  },
  trackArtist: {
    fontSize: "0.875rem",
    // color: "#292a2d",
  },
  button: {
    height: "2rem",
    width: "2rem",
    backgroundColor: "transparent",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export const TrackList = ({
  radio,
  tracks,
  selectedTrack,
  onTrackSelect,
  setSelectedTrack,
  trackRefs,
  handleSetTracks
}) => {
  
  const { theme } = useThemeContext();
  const {onPlayTrackAndNoOpen, handleOnPause, handleOnPlay, getCurrentTrackId, isPlayPlayer, setOpen} = usePlayerContext()
  
  



  const handleTogglePlayAndPause = (track) => {
    const currentId = getCurrentTrackId()

    if(!!currentId && currentId === track.id && isPlayPlayer) {
      return handleOnPause()
    }

    if(!!currentId && currentId === track.id && !isPlayPlayer) {
      return handleOnPlay()
    }
 
    onPlayTrackAndNoOpen({
      id: track.id,
      title: track.title,
      imageSrc: track.image,
      trackSrc: track.trackSrc
    })
  }


  useLayoutEffect(() => {
    tracks.forEach((track) => {
      if(getCurrentTrackId() === track.id) {
        document.querySelector('#radio').style.backgroundImage = `url(${track.image})`
        setSelectedTrack(track)
        handleSetTracks(track.playlist, track.title)
        setOpen(false)
      }
    })
  }, [])


  return (
    <div style={styles.container}>
      {tracks.map((track, index) => (
        <div
          key={track.id}
          ref={(el) => (trackRefs.current[index] = el)}
          style={{
            ...styles.trackItem,
            ...(selectedTrack?.id === track.id ? styles.trackItemHover : {}),
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleTogglePlayAndPause(track)
            onTrackSelect(track)
          }}
        >
          <div style={{
            backgroundSize: 'cover',
            width: '3rem',
            height: '3rem',
          }}
          >
            <img src={track.image} style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}  alt="" />
          </div>




          <div style={{
            flex: 1,
            color: radio ? "black" : theme === "light" ? "black" : "white",
          }} >
            <div style={styles.trackTitle}>{track.title}</div>
            <div style={styles.trackArtist}>{track.artist}</div>
          </div>
          <Button
            style={styles.button}

          >
            {getCurrentTrackId() === track.id && isPlayPlayer ? (
              <Pause fill="3" color={radio ? 'black' : theme === 'light' ? 'black' : 'white'} />
            ) : (
              <Play fill="3" color={radio ? 'black' : theme === 'light' ? 'black' : 'white'} />
            )}
          </Button>
        </div>
      ))}
    </div>
  );
};

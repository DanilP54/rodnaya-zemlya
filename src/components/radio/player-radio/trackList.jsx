import React from "react";
import { Button } from "./Button";
import { Pause, Play } from "lucide-react";
import { useThemeContext } from "../../../context/ThemeContext";

// Внешние inline-стили
const styles = {
  container: {
    height: "100%",
    padding: '5px',
    overflow: "auto",
    // border: '1px solid #0b0b0b36'
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
  playingTrackId,
  onTrackSelect,
  onPlayPause,
  trackRefs,
}) => {
  const { theme } = useThemeContext();

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
            onPlayPause(track.id, track.color);
          }}
          // onClick={() => onTrackSelect(track)}
        >
          <div
            style={{
              width: '3rem',
              height: '3rem',
              backgroundColor: track.color,
            }}
          ></div>
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
            {playingTrackId === track.id ? (
              <Pause fill="3" color={radio ? 'black' :theme === 'light' ? 'black' : 'white'} />
            ) : (
              <Play fill="3" color={radio ? 'black' : theme === 'light' ? 'black' : 'white'} />
            )}
          </Button>
        </div>
      ))}
    </div>
  );
};

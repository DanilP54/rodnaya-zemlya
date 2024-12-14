import React from "react";
import { formatTime } from "./formatTime.js";
import { Button } from "./Button";
import { Music, RewindIcon } from "lucide-react";
import { Slider, Tooltip } from "@mantine/core";
// import { useThemeContext } from "../../../context/ThemeContext.jsx";
import './trackinfo.module.css'

// Внешние inline-стили
const styles = {
  container: {
    position: "absolute",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
    padding: "1rem",
    width: "500px",
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  artist: {
    fontSize: "0.875rem",
    color: "#222324",
    marginBottom: "0.5rem",
  },
  description: {
    fontSize: "1rem",
    fontWeight: '500'
  },
  progressContainer: {
    marginTop: "1rem",
  },
  progressBar: {
    width: "70%",
  },
  timeContainer: {
    marginTop: "10px",
    display: "flex",
    width: "70%",
    justifyContent: "space-between",
    fontSize: "0.875rem",
    color: "#6b7280",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: ".5rem",
    marginTop: "1rem",
  },
};

export const TrackInfo = ({
  radio,
  duration,
  track,
  progress,
  onProgressChange,
  onRewind,
  onForward,
  onVolumeChange,
}) => {
  
  // const { theme } = useThemeContext();

  
  return (
    <div
      style={{
        ...styles.container,
        top: "0",
      }}
    >
      <div style={styles.content}>
        <div style={{
          color: 'black'
        }}>
          <h2 style={styles.title}>{track.title}</h2>
          <div style={styles.artist}>{track.artist}</div>
          <div style={styles.description}>
            <p>{track.description}</p>
          </div>
        </div>

        <div
          style={{
            marginTop: "10px",
            textAlign: "end",
            cursor: "pointer",
          }}
        >
          {/* <Tooltip
            position="top"
            offset={10}
            label="Показать список треков из подкаста"
          >
            <Music color="black" size={20} />
          </Tooltip> */}
        </div>

        <div style={styles.progressContainer}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "50px",
            }}
          >
            <Slider showLabelOnHover={false} size={"lg"} radius={"sm"} thumbSize={18} color="dark" style={styles.progressBar} mih={0} max={100} value={Math.floor(progress)}  onChange={(value) => onProgressChange(value)} />
            <Slider size={"lg"} radius={"sm"} thumbSize={18} color="dark" style={{width: '70px'}} min={0} max={100} defaultValue={70} onChange={(value) => onVolumeChange(Number(value))}  />
          </div>

          <div style={styles.timeContainer}>
            <span style={{
              color: 'black'
            }}>
              {formatTime(Math.floor(progress * 0.01 * duration))}
            </span>
            <span style={{
              color: 'black'
            }}>{formatTime(Math.floor(duration))}</span>
          </div>

          <div style={styles.buttonsContainer}>
            <Button
              style={{
                color: "black",
                backgroundColor: "transparent",
              }}
              onClick={onRewind}
            >
              <Tooltip label="-10s">
                <RewindIcon fill="3" />
              </Tooltip>
            </Button>
            <Button
              style={{
                color: "black",
                backgroundColor: "transparent",
              }}
              onClick={onForward}
            >
              <Tooltip label="+10s">
                <RewindIcon
                  fill="3"
                  style={{
                    transform: "rotate(.5turn)",
                  }}
                />
              </Tooltip>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

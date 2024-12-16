import React, { useEffect, useState } from "react";
import { formatTime } from "./formatTime.js";
import { Button } from "./Button";
import { Music, RewindIcon } from "lucide-react";
import { Slider, Tooltip } from "@mantine/core";
import './trackinfo.module.css'
import { usePlayerContext } from "../../../context/usePlayerContext.jsx";


const styles = {
  container: {
    position: "absolute",
    padding: "1rem",
    position: 'sticky',
    top: '-60px',
    maxHeight: '150px',
    backdropFilter: 'blur(20px)',
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
    color: "#000000",
    marginBottom: "0.2rem",
  },
  artist: {
    fontSize: "0.875rem",
    color: "#000000",
    marginBottom: "0.2rem",
  },
  description: {
    fontSize: "1rem",
    color: "#000000",
    fontWeight: '500'
  },
  progressContainer: {
    marginTop: ".5rem",
  },
  progressBar: {
    width: "70%",
  },
  timeContainer: {
    marginTop: "5px",
    display: "flex",
    width: "70%",
    justifyContent: "space-between",
    fontSize: "0.875rem",
    color: "#000000",
  },
  buttonsContainer: {
    display: "flex",
    alignItems: 'start',
    justifyContent: "center",
    height: 'min-content',
    gap: ".5rem",
  },
};

export const TrackInfo = ({ track, onRewind, onForward, radio }) => {

  const { meta, isPlayPlayer, getCurrentTrackId, setOpen } = usePlayerContext()

  const [localProgress, setLocalProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!isDragging && meta.currentTime && meta.totalTime) {
      setLocalProgress((meta.currentTime / meta.totalTime) * 100);
    }
  }, [meta.currentTime, meta.totalTime, isDragging]);

  const handleChangeCurrentTime = (value) => {
    setLocalProgress(value);
    const newTime = (value / 100) * meta.totalTime;
    meta.audio.current.audio.current.currentTime = newTime;
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleOnVolumeChange = (value) => {
    meta.audio.current.audio.current.volume = value / 100
  }

  const handleNext = () => {
    if(meta.currentTime + 10 >= meta.totalTime) {
      meta.audio.current.audio.current.currentTime = meta.totalTime
      return
    }

    meta.audio.current.audio.current.currentTime = meta.currentTime + 10 
  }

  const handlePrev = () => {
    if(meta.currentTime - 10 <= 0) {
      meta.audio.current.audio.current.currentTime = 0
      return
    }
    meta.audio.current.audio.current.currentTime = meta.currentTime - 10
  }


  useEffect(() => {

    setOpen(false)

    return () => {
      if (getCurrentTrackId() === track.id) {
        setOpen(true)
      }
    }
  }, [setOpen])

  return (
    <div style={{ ...styles.container, top: "0" }}>
      <div style={styles.content}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ color: 'black', display: 'flex', flexDirection: 'column' }}>
            <h2 style={styles.title}>{track.title}</h2>
            <div style={styles.artist}>{track.artist}</div>
            <div style={styles.description}>
              <p>{track.description}</p>
            </div>
          </div>
          <div style={styles.buttonsContainer}>
            <Button style={{ color: 'black', backgroundColor: "transparent" }} onClick={handlePrev}>
              <Tooltip label="-10s">
                <RewindIcon size={20} fill="3" />
              </Tooltip>
            </Button>
            <Button
              style={{ color: "black", backgroundColor: "transparent" }} onClick={handleNext}>
              <Tooltip label="+10s">
                <RewindIcon fill="3" size={20} style={{ transform: "rotate(.5turn)" }} />
              </Tooltip>
            </Button>
          </div>
        </div>

        <div style={styles.progressContainer}>
          <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
            <Slider
              showLabelOnHover={false}
              size={"sm"}
              radius={"xs"}
              thumbSize={17}
              color="black"
              style={styles.progressBar}
              mih={0}
              max={100}
              value={Math.floor(localProgress)}
              onChange={handleChangeCurrentTime}
              onChangeEnd={handleDragEnd}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            />
            <Slider
              showLabelOnHover={false}
              size={"sm"}
              radius={"xs"}
              thumbSize={17}
              color="black"
              style={{ width: '70px' }}
              min={0}
              max={100}
              defaultValue={(meta.audio.current.audio.current.volume * 100)}
              onChange={(value) => handleOnVolumeChange(value)}
            />
          </div>

          <div style={styles.timeContainer}>
            <span style={{ color: 'inherit' }}>
              {meta.dataLoaded ? formatTime(Math.floor(meta.currentTime)) : ''}
            </span>
            <span style={{ color: 'inherit' }}>{meta.dataLoaded ? formatTime(Math.floor(meta.totalTime)) : ''}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

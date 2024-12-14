import React, { useState, useRef, useEffect } from "react";
import { TrackList } from "./trackList";
import { TrackInfo } from "./TrackInfo";
import { tracks } from "./tracks";

// Внешние inline-стили
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

export default function PodcastPlayer({handleSetTracks, radio = false}) {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [playingTrackId, setPlayingTrackId] = useState(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio());
  const trackRefs = useRef([]);
  // const [currentTime, setCurrentTime] = useState(0);

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
 
    setSelectedTrack(track);
    setPlayingTrackId(track.id);
    audioRef.current.src = track.trackSrc;
    audioRef.current.play();
  };


  const handlePlayPause = (trackId, color) => {
    const audio = audioRef.current;
  
    if (playingTrackId === trackId) {
      // Если трек уже играет, ставим его на паузу и сохраняем текущее время
      // setCurrentTime(audio.currentTime);
      audio.pause();
      setPlayingTrackId(null);
    } else {
      // Если выбран новый трек, меняем источник и начинаем воспроизведение с сохраненного времени
      document.querySelector("#radio").style.transition = 'background-color .6s';
      document.querySelector("#radio").style.backgroundColor = color;
   
      const track = tracks.find((track) => track.id === trackId);
      if (track) {
        handleSetTracks(track.playlist, track.title)
        setSelectedTrack(track);
        setPlayingTrackId(trackId);
        audio.src = track.trackSrc;
  
        // Устанавливаем время на сохраненное значение или на начало
        // audio.currentTime = currentTime;
        audio.play();
      }
    }
  };

  // const handlePlayPause = (trackId, color) => {
  //   if (playingTrackId === trackId) {
  //     audioRef.current.pause();
  //     setPlayingTrackId(null);
  //   } else {
  //     document.querySelector("#radio").style.transition = 'background-color .6s';
  //     document.querySelector("#radio").style.backgroundColor = color;
  //     setPlayingTrackId(trackId);
  //     const track = tracks.find((track) => track.id === trackId);
  //     if (track) {

  //       setSelectedTrack(track);
  //       audioRef.current.src = track.trackSrc;
  //       audioRef.current.play();
  //     }
  //   }
  // };

  const handleRewind = () => {
    const audio = audioRef.current;
    if (audio && !isNaN(audio.currentTime)) {
      // Если мы перематываем назад и оказываемся в начале трека
      if (audio.currentTime <= 10) {
        audio.currentTime = 0;
      } else {
        audio.currentTime = audio.currentTime - 10;
      }
  
      // Убедиться, что трек воспроизводится после перемотки назад
      // if (audio.paused) {
      //   audio.play();
      // }
    }
  };

  // const handleRewind = () => {
  //   const audio = audioRef.current;
  //   if (audio && !isNaN(audio.currentTime)) {
  //     audio.currentTime = Math.max(0, audio.currentTime - 10); // Ограничиваем снизу до 0
  //   }
  // };
  
  const handleForward = () => {
    const audio = audioRef.current;
    if (audio && !isNaN(audio.currentTime) && !isNaN(audio.duration)) {
      // Если мы перематываем вперед и оказываемся в конце трека
      if (audio.currentTime + 10 >= audio.duration) {
        audio.currentTime = audio.duration;
        if (!audio.paused) {
          audio.pause(); // Остановить трек, если достигнут конец
        }
      } else {
        audio.currentTime = audio.currentTime + 10;
        // setCurrentTime(audio.currentTime);
  
        // // Убедиться, что трек воспроизводится после перемотки вперед
        // if (audio.paused && (audio.currentTime >= audio.duration)) {
        //   audio.play();
        // }
      }
    }
  };

  // const handleForward = () => {
  //   audioRef.current.currentTime = Math.min(audioRef.current.duration, audioRef.current.currentTime + 10);
  // };

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

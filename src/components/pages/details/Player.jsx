import React, { useState, useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import VolumeControl from "./VolumeControl";
import styles from './player.module.css';

function PlayIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
}

export const Player = ({ songs, currentSongIndex, setCurrentSongIndex }) => {
    const audioElement = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(4200);
    const [volume, setVolume] = useState(0.5); // Default volume
    const [muted, setMuted] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }
    }, [isPlaying]);

    const SkipSong = (forwards = true) => {
        if (forwards) {
            setCurrentSongIndex((prevIndex) => {
                let temp = prevIndex + 1;
                if (temp > songs.length - 1) {
                    temp = 0;
                }
                return temp;
            });
        } else {
            setCurrentSongIndex((prevIndex) => {
                let temp = prevIndex - 1;
                if (temp < 0) {
                    temp = songs.length - 1;
                }
                return temp;
            });
        }
    };

    const handleTimeUpdate = () => {
        const currentTime = audioElement.current.currentTime;
        const duration = audioElement.current.duration;
        setCurrentTime(currentTime);
        if (!duration) {
            setDuration(audioElement.current.duration);
        }
    };

    const handleVolumeChange = (newVolume) => {
        setVolume(newVolume);
        setMuted(newVolume === 0 ? true : false);
        audioElement.current.volume = newVolume;
    };

    const handleMute = () => {
        setMuted(!muted);
        setVolume(muted ? 0.5 : 0);
        audioElement.current.volume = muted ? 0.5 : 0;
    };

    return (
        <div className={styles.box}>
            <audio
                src={songs[currentSongIndex].src}
                ref={audioElement}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleTimeUpdate}
                volume={volume}
            />

            <div className={styles.title}>
                <span className={styles.name}>nine-inch nails - year zero</span>
                <div className={styles.time_box}>
                    <span className={`${styles.time} ${styles.current}`}>{formatTimeFull(currentTime)}</span>
                    <span style={{
                        color: 'gray',
                        margin: '0 3px'
                    }}>/</span>
                    <span className={styles.time}>{formatTimeFull(duration)}</span>
                </div>
            </div>
            <div className={styles.music_player}>
                <div className={styles.play_box}>
                    <button onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <FaPause color="white" size={20} /> : <PlayIcon />}
                    </button>
                </div>
                <div className={styles.progress_bar}>
                    <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={(e) => {
                            audioElement.current.currentTime = e.target.value;
                        }}
                    />
                </div>
                <div className={styles.controls}>
                    <button disabled onClick={() => SkipSong(false)}>
                        <TbPlayerTrackPrevFilled size={18} />
                    </button>
                    <button onClick={() => SkipSong(true)}>
                        <TbPlayerTrackNextFilled size={18} />
                    </button>
                </div>
                <div>
                    <VolumeControl
                        volume={volume}
                        onVolumeChange={handleVolumeChange}
                        muted={muted}
                        onMute={handleMute}
                    />
                </div>
            </div>

        </div>
    );
};

const formatTimeFull = (secs) => {
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor((secs % 3600) / 60);
    let seconds = Math.ceil(secs % 60);

    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${hours}:${minutes}:${seconds}`;
};

const formatTime = (secs) => {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.ceil(secs - minutes * 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
};

export default Player;
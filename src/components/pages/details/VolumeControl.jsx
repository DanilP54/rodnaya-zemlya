import React from "react";
import { AiOutlineMuted } from "react-icons/ai";
import { HiVolumeUp } from "react-icons/hi";
import styles from './volume.module.css'
import { useThemeContext } from "../../../context/ThemeContext";

const VolumeControl = ({ volume, onVolumeChange, muted, onMute }) => {


    const { theme } = useThemeContext()
    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value) / 100;
        onVolumeChange(newVolume);
    };

    const handleMute = () => {
        onMute(!muted);
    };

    return (
        <div className={styles.volume_control}>
            <button onClick={handleMute}>
                {muted ? <AiOutlineMuted color={theme === 'light' ? 'black' : 'white'} size={17} /> : <HiVolumeUp color={theme === 'light' ? 'black' : 'white'} size={17} />}
            </button>
            <input
                type="range"
                min="0"
                max="100"
                value={volume * 100}
                onChange={handleVolumeChange}
            />
        </div>
    );
};

export default VolumeControl;
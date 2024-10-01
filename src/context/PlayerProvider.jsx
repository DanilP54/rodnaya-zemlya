import { createContext, useState } from "react";
import { albumsList } from "./albumsList";
import AudioPlayer from 'react-h5-audio-player';
import Close from '../../public/close.svg';
import collapsSvg from '../../public/collapsPlayer.svg'
import rightCollapsSvg from '../../public/right-collaps.svg'
export const PlayerContext = createContext()

// const obj = {
// id
// active: false,
//     title: '',
//     imageSrc: '',
//     trackSrc: ''
// }


export function PlayerProvider({ children }) {

    const [open, setOpen] = useState(false)
    const [track, setTrack] = useState({})
    const [play, setPlay] = useState(false)
    const [collaps, setCollaps] = useState(false)


    const onClose = () => {
        setCollaps(false)
        setTrack({})
        setPlay(false)
        setOpen(false)
    }

    const onCollaps = () => {
        const volumeControl = document.querySelector('.rhap_volume-controls')
        const progressContainer = document.querySelector('.rhap_progress-container')
        const progressSection = document.querySelector('.rhap_progress-section')
        const time = document.querySelector('.rhap_time')
        const repeat = document.querySelector('.rhap_repeat-button')
        const container = document.querySelector('.rhap_container')
        console.log(volumeControl)
        if (!collaps) {
            progressContainer.style.display = 'none'
            progressSection.style.display = 'none'
            volumeControl.style.display = 'none'
            time.style.display = 'none'
            container.style.borderRadius = '5px'
            container.style.padding = ''
            repeat.style.display = 'none'
            setCollaps(true)
        } else {
            volumeControl.style.display = 'flex'
            progressContainer.style.display = ''
            progressSection.style.display = 'flex'
            container.style.borderRadius = '0'
            container.style.padding = '10px 15px'
            time.style.display = ''
            repeat.style.display = ''
            setCollaps(false)
        }




    }


    const handleOnPause = () => {
        const audio = document.querySelector('audio')
        audio.pause()
    }

    const handleOnPlay = () => {
        const audio = document.querySelector('audio')
        audio.play()
    }

    const playerActions = {

        onPlayTrack(track) {
            setOpen(true)
            setTrack(track)
        },
        handleOnPause,
        handleOnPlay,
        getCurrentTrackId() {
            return track.id
        },
        isOpen: !!open,
        isPlayPlayer: play,
        onClose,

    }



    return (
        <PlayerContext.Provider value={playerActions}>
            {children}
            {
                open &&
                <div style={{
                    position: 'fixed',
                    borderRadius: collaps ? '10px' : 0,
                    zIndex: 111,
                    width: collaps ? '120px' : '100%',
                    bottom: collaps ? '10px' : 0,
                    left: collaps ? '10px' : 0,
                }}>
                    <AudioPlayer
                        showDownloadProgress={true}
                        header={
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                {
                                    !collaps && <span
                                        style={{
                                            fontSize: '13px',
                                            fontWeight: 'bold',
                                        }}>
                                        {track.title}
                                    </span>
                                }

                                <div
                                    style={{
                                        display: 'flex',
                                        width: collaps ? '100%' : '',
                                        justifyContent: collaps ? 'space-between' : '',
                                        gap: '5px',
                                        alignItems: 'center'
                                    }}>
                                    <img
                                        onClick={() => onCollaps()}
                                        style={{
                                            cursor: 'pointer',
                                        }}
                                        src={collaps ? rightCollapsSvg : collapsSvg} alt="" />
                                    <img
                                        onClick={() => onClose()}
                                        style={{
                                            cursor: 'pointer',
                                            width: '16px'
                                        }}
                                        src={Close}
                                        alt=""
                                    />
                                </div>
                            </div>
                        }
                        layout={'horizontal-reverse'}
                        src={track.trackSrc}
                        autoPlay
                        onPlay={() => setPlay(true)}
                        onPause={(e) => setPlay(false)}
                    />
                </div>
            }

        </PlayerContext.Provider>
    )
}
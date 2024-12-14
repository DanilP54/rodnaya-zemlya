import { createContext, useLayoutEffect, useState, useEffect, useRef } from "react";
import AudioPlayer from 'react-h5-audio-player';


import { useThemeContext } from "./ThemeContext";


function Close({ color }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-x">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
    </svg>
}


function CollapsSvg({ color }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill='none'
        stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 6l-6 6l6 6" />
    </svg>
}

function RightCollapsSvg({ color }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill='none' stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
}


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
    const { theme } = useThemeContext()

    const audioRef = useRef(null)

    useLayoutEffect(() => {

        let playerContainer = document.querySelector('.rhap_container')
        let repeatButton = document.querySelector('.rhap_repeat-button')
        let mainControl = document.querySelectorAll('.rhap_main-controls-button')
        let volumeButton = document.querySelector('.rhap_volume-button')
        let time = document.querySelector('.rhap_time')
        let totalTime = document.querySelector('.rhap_total-time')
        let progress = document.querySelector('.rhap_progress-filled')

        if (!playerContainer) return

        if (theme === 'light') {
            playerContainer.id = 'light__container'
            repeatButton.id = 'light__repeat'
            volumeButton.id = 'light__volume'
            totalTime.id = 'light__volume'
            time.id = 'light__time'
            progress.id = 'light__progress'
            for (let node of mainControl) {

                node.id = 'light__main'
            }
        } else {
            playerContainer.id = 'dark__container'
            repeatButton.id = 'dark__repeat'
            volumeButton.id = 'dark__volume'
            totalTime.id = 'dark__volume'
            progress.id = 'dark__progress'
            time.id = 'dark__time'
            for (let node of mainControl) {
                node.id = 'dark__main'
            }
        }
    }, [theme])


    const onClose = () => {

        setCollaps(false)
        setTrack({})
        setPlay(false)
        setOpen(false)
    }

    useEffect(() => {
        const onCollaps = () => {
            const volumeControl = document.querySelector('.rhap_volume-controls')
            const progressContainer = document.querySelector('.rhap_progress-container')
            const progressSection = document.querySelector('.rhap_progress-section')
            const time = document.querySelector('.rhap_time')
            const repeat = document.querySelector('.rhap_repeat-button')
            const container = document.querySelector('.rhap_container')

            if (collaps) {
                progressContainer.style.display = 'none'
                progressSection.style.display = 'none'
                volumeControl.style.display = 'none'
                time.style.display = 'none'
                container.style.borderRadius = '5px'
                container.style.padding = ''
                repeat.style.display = 'none'

            } else {
                volumeControl.style.display = 'flex'
                progressContainer.style.display = ''
                progressSection.style.display = 'flex'
                container.style.borderRadius = '0'
                container.style.padding = '10px 15px'
                time.style.display = ''
                repeat.style.display = ''

            }
        }

        onCollaps()

    }, [collaps])


    useEffect(() => {
        if (!open && audioRef.current) {
            audioRef.current.audio.current.pause();
            audioRef.current.audio.current.currentTime = 0;
        }
    }, [open]);

    const handleOnPause = () => {
        const audio = document.querySelector('audio')
        audio.pause()
    }

    const handleOnPlay = () => {
        const audio = document.querySelector('audio')
        audio.play()
    }

    const playerActions = {

        onPlayTrack(track, o = null) {
            if(!o) {
                setOpen(true) 
                return
            }
            setTrack(track)
        },
        isCollaps: collaps,
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


            <div style={{
                position: 'fixed',
                borderRadius: collaps ? '10px' : 0,
                zIndex: 111,
                display: open ? 'block' : 'none',
                width: collaps ? '120px' : '100%',
                bottom: collaps ? '10px' : 0,
                left: collaps ? '10px' : 0,
            }}>
                <AudioPlayer
                    ref={audioRef}
                    showDownloadProgress={true}
                    header={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                            {
                                !collaps && <span
                                    style={{
                                        color: theme === 'light' ? 'inherit' : 'gray',
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
                                <div onClick={() => setCollaps(c => !c)} style={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'

                                }}>
                                    {
                                        collaps
                                            ? <RightCollapsSvg color={theme === 'light' ? 'black' : 'gray'} />
                                            : <CollapsSvg color={theme === 'light' ? 'black' : 'gray'} />
                                    }
                                </div>
                                <div onClick={() => onClose()} style={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {
                                        <Close color={theme === 'light' ? 'black' : 'gray'} />
                                    }
                                </div>

                            </div>
                        </div>
                    }
                    layout={'horizontal-reverse'}
                    src={!!track?.trackSrc && track.trackSrc}
                    autoPlay
                    onPlay={() => setPlay(true)}
                    onPause={(e) => setPlay(false)}
                />
            </div>


        </PlayerContext.Provider>
    )
}
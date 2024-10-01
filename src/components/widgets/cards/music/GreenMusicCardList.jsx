import { MusicCard } from './MusicCard';
import { useEffect, useState } from "react";
import { usePlayerContext } from '../../../../context/usePlayerContext';





export function GreenMusicCardList({ cards, setCards }) {

    // const [cards, setCards] = useState(list || [])
    const { onPlayTrack, isOpen, handleOnPause, getCurrentTrackId, handleOnPlay, isPlayPlayer } = usePlayerContext()

    useEffect(() => {
        if (!isOpen) {
            cards.forEach((card) => {
                card.isPlay = false
                setCards((s) => [...s])
            })
        }
    }, [isOpen])

    useEffect(() => {
        const currentTrack = getCurrentTrackId()
        cards.forEach(card => {
            if (card.id === currentTrack) {
                if (isPlayPlayer) {
                    card.isPlay = true
                } else {
                    card.isPlay = false
                }
            } else {
                card.isPlay = false
            }

            setCards(s => [...s])
        })
    }, [isPlayPlayer])

    const handlePlay = (id) => {

        cards.forEach((card) => {
            const p = card.isPlay

            if (card.id === id) {
                if (!p) {
                    const currentTrack = getCurrentTrackId()

                    if (currentTrack && currentTrack === id) {
                        card.isPlay = true
                        handleOnPlay()
                    } else {
                        card.isPlay = true
                        onPlayTrack({
                            id: card.id,
                            title: card.title,
                            imageSrc: card.src,
                            trackSrc: card.trackSrc
                        })
                    }

                } else {
                    card.isPlay = false
                    handleOnPause()
                }

            }

            if (card.id !== id && p) {
                card.isPlay = false
            }

        })

        setCards(s => [...s])

    }

    return (
        <div style={{
            display: 'flex',
            marginTop: '50px',
            marginLeft: '80px',
            padding: '0 68px 70px 99px'
        }}>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
                gap: '10px',

            }}>
                {
                    cards.map((c, index) => {
                        return (
                            <div style={{
                                display: 'flex', flexWrap: 'wrap', gap: '10px',
                            }}>
                                <MusicCard key={c.id} src={c.src} title={c.title} subtitle={c.genre} isPlay={c.isPlay} index={index} id={c.id} category={c.category} handle={() => handlePlay(c.id)} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

// {

//

// }
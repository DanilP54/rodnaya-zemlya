import { MusicCard } from './MusicCard'
import { useState } from "react"
import AudioPlayer from 'react-h5-audio-player';
import Close from '../../../../../public/close.svg'




export function MusicCardList({list}) {

    const [cards, setCards] = useState(list || [])

    const handlePause = () => {

    }

    const handlePlay = (id) => {

        cards.forEach((card) => {
            const p = card.isPlay

            if (card.id === id) {
                card.isPlay = !p
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
            padding: '0 68px 20px 99px'
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
                                {
                                    c.isPlay && <AudioPlayer
                                        style={{
                                            position: 'fixed',
                                            left: 0,
                                            bottom: 0,
                                            zIndex: 999,

                                        }}
                                        header={
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between'
                                            }}>
                                                <span style={{
                                                    fontWeight: 'bold',
                                                }}>{c.title}</span>
                                                <img onClick={() => handlePlay(c.id)} style={{
                                                    cursor: 'pointer',
                                                }} src={Close} alt="" />
                                            </div>
                                        }
                                        layout='horizontal-reverse'
                                        src="https://t4.bcbits.com/stream/b19cdccb60402a239096e09b508e379e/mp3-128/2781034870?p=0&ts=1725462009&t=e0eda725ac8e11f15d9e9283fcc295091d8602ea&token=1725462009_5669f72235ff88309e6050f28a4037d23d66dbfa"
                                        autoPlay
                                        onPlay={() => handle(c.id)}
                                        onPause={() => handle(c.id)}
                                    // other props here
                                    />

                                }
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
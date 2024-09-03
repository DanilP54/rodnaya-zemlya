import { Grid } from "@mantine/core"
import { CardC } from "./Card"
import Yellow from '../../../public/yellow.gif'
import Card1 from '../../../public/Card1.jpg'
import Card6 from '../../../public/Card6.jpg'
import Card8 from '../../../public/Card8.jpg'
import Card9 from '../../../public/Card9.jpg'
import Card10 from '../../../public/Card10.jpg'
import Card11 from '../../../public/Card11.jpg'
import Card15 from '../../../public/Card15.jpg'
import Card20 from '../../../public/Card20.jpg'
import Card21 from '../../../public/Card21.jpg'
import Card22 from '../../../public/Card22.jpg'
import Card23 from '../../../public/Card23.jpg'
import Card24 from '../../../public/Card24.jpg'
import Card25 from '../../../public/Card25.jpg'
import { useState } from "react"
import AudioPlayer from 'react-h5-audio-player';
import Close from '../../../public/close.svg'


const cardList = [
    { "id": 1, "title": "Nobody Loves You Moreby Kim Deal", "src": Card6, "genre": "punk", isPlay: false },
    { "id": 2, "title": "The Minuteby Yatte & Duett", "src": Card10, "genre": "alternative", isPlay: false },
    { "id": 3, "title": "Songs of Blood and Mireby SPECTRAL", "src": Card11, "genre": "metal", isPlay: false },
    { "id": 4, "title": "Seekerby Carbon Based Lifeforms", "src": Card15, "genre": "ambient", isPlay: false },
    { "id": 5, "title": "When Glory Disappears (EP)by Nöldr", "src": Card9, "genre": "matal", isPlay: false },
    { "id": 6, "title": "Lust For Goldby Starflyer 59", "src": Card8, "genre": "alternative", isPlay: false },
    { "id": 7, "title": "YOU'LL HAVE TO LOSE SOMETHINGby", "src": Card20, "genre": "rock", isPlay: false },
    { "id": 8, "title": "Карточка 8Love Rudiments by Ty Segall", "src": Card21, "genre": "techno", isPlay: false },
    { "id": 9, "title": "The Duality of Decapitation", "src": Card23, "genre": "electronic", isPlay: false },
    { "id": 10, "title": "Duck Face Killingsby Fulci", "src": Card24, "genre": "experimental", isPlay: false },
]

export function CardList() {

    const [cards, setCards] = useState(cardList)

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
            padding: '0 68px 0 99px'
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
                                <CardC key={c.id} src={c.src} title={c.title} subtitle={c.genre} isPlay={c.isPlay} index={index} handle={() => handlePlay(c.id)} />
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
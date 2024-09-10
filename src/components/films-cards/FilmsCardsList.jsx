import { Grid } from "@mantine/core"
import { CardFilms } from "./FilmCard"
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
import Film1 from '../../../public/Film1.jpg'
import { Player } from "video-react"
import { useState } from "react"
import AudioPlayer from 'react-h5-audio-player';
import Close from '../../../public/close.svg'
import styles from './secondary.video.module.css'
import {
    ModalHeader,
    ModalContent,
    Modal,
} from 'semantic-ui-react'


const movieList = [
    { "id": 1, "title": "Inception", "src": Film1, "genre": "Sci-Fi", isPlay: false },
    { "id": 2, "title": "The Shawshank", "src": Film1, "genre": "Drama", isPlay: false },
    { "id": 3, "title": "The Dark Knight", "src": Film1, "genre": "Action", isPlay: false },
    { "id": 4, "title": "Pulp Fiction", "src": Film1, "genre": "Crime", isPlay: false },
    { "id": 5, "title": "Fight Club", "src": Film1, "genre": "Drama", isPlay: false },
    { "id": 6, "title": "Forrest Gump", "src": Film1, "genre": "Drama", isPlay: false },
    { "id": 7, "title": "The Matrix", "src": Film1, "genre": "Sci-Fi", isPlay: false },
    { "id": 8, "title": "Goodfellas", "src": Film1, "genre": "Crime", isPlay: false },
    { "id": 9, "title": "Seven", "src": Film1, "genre": "Thriller", isPlay: false },
    { "id": 10, "title": "The Silence of the Lambs", "src": Film1, "genre": "Thriller", isPlay: false },
];

export function CardFilmsList() {

    const [cards, setCards] = useState(movieList)

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
                            <div key={c.id} style={{
                                display: 'flex', flexWrap: 'wrap', gap: '10px',
                            }}>
                                <CardFilms key={c.id} src={c.src} title={c.title} subtitle={c.genre} isPlay={c.isPlay} index={index} id={c.id} handle={() => handlePlay(c.id)} />

                                <Modal
                                    style={{
                                        backgroundColor: 'transparent'
                                    }}
                                    onClose={() => handlePlay(c.id)}
                                    // onOpen={() => setOpen(true)}
                                    open={c.isPlay}
                                // trigger={<img className={styles.play_icon} src={iconSrc} alt="play icon" />}
                                >
                                    <ModalHeader style={{
                                        backgroundColor: 'black',
                                        color: 'white'
                                    }}>
                                        {c.title}
                                    </ModalHeader>
                                    <ModalContent style={{
                                        backgroundColor: 'transparent',
                                        padding: 0,
                                    }}>
                                        <Player>
                                            <source src="https://yandex.ru/video/preview/11747625689222203345" />
                                        </Player>
                                    </ModalContent>
                                </Modal>



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
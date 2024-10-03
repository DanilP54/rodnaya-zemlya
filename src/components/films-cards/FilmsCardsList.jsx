import { CardFilms } from "./FilmCard"
import Film1 from '../../../public/Film1.jpg'
import { Player } from "video-react"
import { useState } from "react"
import { usePlayerContext } from "../../context/usePlayerContext"

import {
    ModalHeader,
    ModalContent,
    Modal,
} from 'semantic-ui-react'


const movieList = [
    { "id": 1, "title": "Inception", "src": Film1, "genre": "Sci-Fi", isPlay: false, category: "turquoise" },
    { "id": 2, "title": "The Shawshank", "src": Film1, "genre": "Drama", isPlay: false, category: "turquoise" },
    { "id": 3, "title": "The Dark Knight", "src": Film1, "genre": "Action", isPlay: false, category: "turquoise" },
    { "id": 4, "title": "Pulp Fiction", "src": Film1, "genre": "Crime", isPlay: false, category: "turquoise" },
    { "id": 5, "title": "Fight Club", "src": Film1, "genre": "Drama", isPlay: false, category: "turquoise" },
    { "id": 6, "title": "Forrest Gump", "src": Film1, "genre": "Drama", isPlay: false, category: "turquoise" },
    { "id": 7, "title": "The Matrix", "src": Film1, "genre": "Sci-Fi", isPlay: false, category: "turquoise" },
    { "id": 8, "title": "Goodfellas", "src": Film1, "genre": "Crime", isPlay: false, category: "turquoise" },
    { "id": 9, "title": "Seven", "src": Film1, "genre": "Thriller", isPlay: false, category: "turquoise" },
    { "id": 10, "title": "The Silence of the Lambs", "src": Film1, "genre": "Thriller", isPlay: false, category: "turquoise" },
];

export function CardFilmsList(list) {

    const [cards, setCards] = useState(movieList)

    const { onClose, isOpen } = usePlayerContext()

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
                                    onPlay={() => {
                                        if (isOpen) {
                                            onClose()
                                        }
                                    }}
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
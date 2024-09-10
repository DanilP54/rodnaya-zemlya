import { MovieCard } from './MovieCard'

import { Player } from "video-react"
import { useState } from "react"

import {
    ModalHeader,
    ModalContent,
    Modal,
} from 'semantic-ui-react'


export function MovieCardList({ list }) {

    const [cards, setCards] = useState(list || [])

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
                                <MovieCard key={c.id} src={c.src} title={c.title} subtitle={c.genre} isPlay={c.isPlay} category={c.category} index={index} id={c.id} handle={() => handlePlay(c.id)} />

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
import { MovieCard } from './MovieCard'
import { Player } from "video-react"

import {
    ModalHeader,
    ModalContent,
    Modal,
} from 'semantic-ui-react'
import { usePlayerContext } from '../../../../context/usePlayerContext'


export default function MovieCardList({ cards, setCards }) {

    // const [cards, setCards] = useState(list || [])
    const { isOpen, onClose, handleOnPause } = usePlayerContext()

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
                            <div key={c.id} style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '10px',
                                columnGap: '10px',
                            }}>
                                <MovieCard key={c.id} src={c.src} title={c.title} nameRu={c.nameRu} subtitle={c.genre} isPlay={c.isPlay} category={c.category} index={index} id={c.id} handle={() => handlePlay(c.id)} />

                                <Modal
                                    style={{
                                        backgroundColor: 'transparent'
                                    }}
                                    onClose={() => handlePlay(c.id)}
                                    open={c.isPlay}
                                // trigger={<img className={styles.play_icon} src={iconSrc} alt="play icon" />}
                                >
                                    {/* <ModalHeader style={{
                                        backgroundColor: 'black',
                                        color: 'white'
                                    }}>
                                        {c.nameRu}
                                    </ModalHeader> */}
                                    <ModalContent style={{
                                        backgroundColor: 'transparent',
                                        padding: 0,
                                    }}>
                                        <Player onPlay={() => {
                                            if (isOpen) {
                                                handleOnPause()
                                            }
                                        }}>
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

import {LiteratureCard} from "./LiteratureCard.jsx";
import {useState} from "react"
import Close from '../../../../../public/close.svg'


export function LiteratureCardList({list}) {

    const [cards, setCards] = useState(list || [])


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
                                <LiteratureCard key={c.id} src={c.src} title={c.title} subtitle={c.genre}
                                                isPlay={c.isPlay}
                                                index={index} id={c.id} category={c.category}
                                />

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
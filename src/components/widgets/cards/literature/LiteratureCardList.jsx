import { LiteratureCard } from "./LiteratureCard.jsx";


export default function LiteratureCardList({ cards, setCards, newsVariant = null }) {

    return (
        <div style={{
            display: 'flex',
            marginTop: newsVariant ? '20px' : '50px',
            marginLeft: newsVariant ? 0 : '80px',
            padding: newsVariant ? 0 :'0 68px 70px 99px'
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
                                <LiteratureCard newsVariant={newsVariant} key={c.id} src={c.src} nameRu={c.nameRu} title={c.title} subtitle={c.genre}
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
import { ArtCard } from "./ArtCard"





export function ArtCardList({ cards }) {

  

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
                                <ArtCard key={c.id} src={c.image} title={c.nameRu} subtitle={c.name} category={c.category} />
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
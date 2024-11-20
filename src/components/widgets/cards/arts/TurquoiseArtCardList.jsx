import { ArtCard } from "./ArtCard";
import { useEffect, useState } from "react";
import { usePlayerContext } from '../../../../context/usePlayerContext';





export default function TurquoiseArtCardList({ cards, setCards, newsVariant = null }) {


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
                    cards.map((c) => {
                        return (
                            <div key={c.id} style={{
                                display: 'flex', 
                                flexWrap: 'wrap', 
                                gap: '10px',
                            }}>
                                <ArtCard newsVariant={newsVariant}  src={c.image} title={c.nameRu} subtitle={c.name} id={c.id} category={c.category} />
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
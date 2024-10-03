import { GreenFilterMusic } from "../../../widgets/green/GreenFiltersMusic";
import { useState, useEffect, lazy, Suspense } from "react";

import Card6 from '../../../../../public/Card6.jpg'
import Card8 from '../../../../../public/Card8.jpg'
import Card9 from '../../../../../public/Card9.jpg'
import Card10 from '../../../../../public/Card10.jpg'
import Card11 from '../../../../../public/Card11.jpg'
import Card15 from '../../../../../public/Card15.jpg'
import Card20 from '../../../../../public/Card20.jpg'
import Card21 from '../../../../../public/Card21.jpg'
import Card23 from '../../../../../public/Card23.jpg'
import Card24 from '../../../../../public/Card24.jpg'


import track1 from '../../../../../public/green-music/1.mp3'
import track2 from '../../../../../public/green-music/2.mp3'
import track3 from '../../../../../public/green-music/3.mp3'
import track4 from '../../../../../public/green-music/4.mp3'
import track5 from '../../../../../public/green-music/5.mp3'
import track6 from '../../../../../public/green-music/6.mp3'
import track7 from '../../../../../public/green-music/7.mp3'
import { Loading } from "../../../../main";
const GreenMusicCardList = lazy(() => import("../../../widgets/cards/music/GreenMusicCardList"));

const greenMusic = [
    { "id": 27, "title": "Nobody Loves You Moreby Kim Deal", "src": Card6, "genre": "Electronic", isPlay: false, category: 'green', trackSrc: track1 },
    { "id": 33, "title": "YOU'LL HAVE TO LOSE SOMETHINGby", "src": Card20, "genre": "Electronic", isPlay: false, category: 'green', trackSrc: track7 },
    { "id": 34, "title": "Карточка 8Love Rudiments by Ty Segall", "src": Card21, "genre": "Rock", isPlay: false, category: 'green' },
    { "id": 35, "title": "The Duality of Decapitation", "src": Card23, "genre": "Rock", isPlay: false, category: 'green' },
    { "id": 36, "title": "Duck Face Killingsby Fulci", "src": Card24, "genre": "Experimental", isPlay: false, category: 'green' },
    { "id": 30, "title": "Seekerby Carbon Based Lifeforms", "src": Card15, "genre": "Electronic", isPlay: false, category: 'green', trackSrc: track4 },
    { "id": 37, "title": "Echoes of Silence", "src": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Pop", isPlay: false, category: 'green' },
    { "id": 38, "title": "Jazz Vibes", "src": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Metal", isPlay: false, category: 'green' },
    { "id": 39, "title": "Classical Serenity", "src": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Metal", isPlay: false, category: 'green' },
    { "id": 40, "title": "Hip-Hop Beats", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Hip Hop", isPlay: false, category: 'green' },
    { "id": 29, "title": "Songs of Blood and Mireby SPECTRAL", "src": Card11, "genre": "Electronic", isPlay: false, category: 'green', trackSrc: track3 },
    { "id": 41, "title": "Blues Journey", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Blues", isPlay: false, category: 'green' },
    { "id": 42, "title": "Country Roads", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Metal", isPlay: false, category: 'green' },
    { "id": 31, "title": "When Glory Disappears (EP)by Nöldr", "src": Card9, "genre": "Electronic", isPlay: false, category: 'green', trackSrc: track5 },
    { "id": 43, "title": "Reggae Rhythms", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "ReggaeAmbient", isPlay: false, category: 'green' },
    { "id": 28, "title": "The Minuteby Yatte & Duett", "src": Card10, "genre": "Electronic", isPlay: false, category: 'green', trackSrc: track2 },
    { "id": 44, "title": "Folk Tales", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Folk", isPlay: false, category: 'green' },
    { "id": 45, "title": "Melodic Waves", "src": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Ambient", isPlay: false, category: 'green' },
    { "id": 46, "title": "Chill Vibes", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Experimental", isPlay: false, category: 'green' },
    { "id": 32, "title": "Lust For Goldby Starflyer 59", "src": Card8, "genre": "Electronic", isPlay: false, category: 'green', trackSrc: track6 },
    { "id": 47, "title": "Symphonic Dreams", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Experimental", isPlay: false, category: 'green' },
    { "id": 48, "title": "Urban Beats", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Ambient", isPlay: false, category: 'green' },
    { "id": 49, "title": "Blues Reflections", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Rock", isPlay: false, category: 'green' },
    { "id": 50, "title": "Country Roads", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Country", isPlay: false, category: 'green' },
    { "id": 51, "title": "Reggae Vibes", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Reggae", isPlay: false, category: 'green' },
    { "id": 52, "title": "Folk Melodies", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Folk", isPlay: false, category: 'green' }
];

export default function GreenMusic() {

    const [value, setValue] = useState([])
    const [albums, setAlbums] = useState(greenMusic || [])


    useEffect(() => {
        if (!value.length) return setAlbums(greenMusic || [])

        const filtered = greenMusic.filter(item => {
            return value.includes(item.genre)
        })
        setAlbums(filtered)
    }, [value])

    return (
        <>
            <GreenFilterMusic setValue={setValue} />
            <Suspense fallback={<Loading />}>
                <GreenMusicCardList cards={albums} setCards={setAlbums} />
            </Suspense>
        </>
    )
}
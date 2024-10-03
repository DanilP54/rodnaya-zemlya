import { RedFilterMusic } from "../../../widgets/red/RedFiltersMusic";
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

import track1 from '../../../../../public/red-music/1.mp3'
import track2 from '../../../../../public/red-music/2.mp3'
import track3 from '../../../../../public/red-music/3.mp3'
import track4 from '../../../../../public/red-music/4.mp3'
import track5 from '../../../../../public/red-music/5.mp3'
import track6 from '../../../../../public/red-music/6.mp3'
import track7 from '../../../../../public/red-music/7.mp3'
import { Loading } from "../../../../main";
const RedMusicCardList = lazy(() => import("../../../widgets/cards/music/RedMusicCardList"));

const redMusic = [
    { "id": 1, "title": "Nobody Loves You Moreby Kim Deal", "src": Card6, "genre": "Electronic", isPlay: false, category: 'red', trackSrc: track1 },
    { "id": 3, "title": "Songs of Blood and Mireby SPECTRAL", "src": Card11, "genre": "Electronic", isPlay: false, category: 'red', trackSrc: track3 },
    { "id": 6, "title": "Lust For Goldby Starflyer 59", "src": Card8, "genre": "Electronic", isPlay: false, category: 'red', trackSrc: track6 },
    { "id": 8, "title": "Карточка 8Love Rudiments by Ty Segall", "src": Card21, "genre": "Techno", isPlay: false, category: 'red' },
    { "id": 9, "title": "The Duality of Decapitation", "src": Card23, "genre": "Experimental", isPlay: false, category: 'red' },
    { "id": 10, "title": "Duck Face Killingsby Fulci", "src": Card24, "genre": "Experimental", isPlay: false, category: 'red' },
    { "id": 4, "title": "Seekerby Carbon Based Lifeforms", "src": Card15, "genre": "Electronic", isPlay: false, category: 'red', trackSrc: track4 },
    { "id": 11, "title": "Echoes of Silence", "src": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Experimantal", isPlay: false, category: 'red' },
    { "id": 12, "title": "Jazz Vibes", "src": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Metal", isPlay: false, category: 'red' },
    { "id": 13, "title": "Classical Serenity", "src": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Classical", isPlay: false, category: 'red' },
    { "id": 7, "title": "YOU'LL HAVE TO LOSE SOMETHINGby", "src": Card20, "genre": "Electronic", isPlay: false, category: 'red', trackSrc: track7 },
    { "id": 14, "title": "Hip-Hop Beats", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Rock", isPlay: false, category: 'red' },
    { "id": 15, "title": "Blues Journey", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Ambient", isPlay: false, category: 'red' },
    { "id": 16, "title": "Country Roads", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Country", isPlay: false, category: 'red' },
    { "id": 2, "title": "The Minuteby Yatte & Duett", "src": Card10, "genre": "Electronic", isPlay: false, category: 'red', trackSrc: track2 },
    { "id": 17, "title": "Reggae Rhythms", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Rock", isPlay: false, category: 'red' },
    { "id": 18, "title": "Folk Tales", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Folk", isPlay: false, category: 'red' },
    { "id": 19, "title": "Melodic Waves", "src": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Ambient", isPlay: false, category: 'red' },
    { "id": 5, "title": "When Glory Disappears (EP)by Nöldr", "src": Card9, "genre": "Electronic", isPlay: false, category: 'red', trackSrc: track5 },
    { "id": 20, "title": "Chill Vibes", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Experimantal", isPlay: false, category: 'red' },
    { "id": 21, "title": "Symphonic Dreams", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Classical", isPlay: false, category: 'red' },
    { "id": 22, "title": "Urban Beats", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Hip Hop", isPlay: false, category: 'red' },
    { "id": 23, "title": "Blues Reflections", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Rock", isPlay: false, category: 'red' },
    { "id": 24, "title": "Country Roads", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Metal", isPlay: false, category: 'red' },
    { "id": 25, "title": "Reggae Vibes", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Reggae", isPlay: false, category: 'red' },
    { "id": 26, "title": "Folk Melodies", "src": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fGFsdW1ifGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400", "genre": "Folk", isPlay: false, category: 'red' }
];

export default function RedMusic() {

    const [value, setValue] = useState([])
    const [albums, setAlbums] = useState(redMusic || [])


    useEffect(() => {
        if (!value.length) return setAlbums(redMusic || [])

        const filtered = redMusic.filter(item => {
            return value.includes(item.genre)
        })
        setAlbums(filtered)
    }, [value])


    return (
        <>
            <RedFilterMusic setValue={setValue} />
            <Suspense fallback={<Loading />}>
                <RedMusicCardList cards={albums} setCards={setAlbums} />
            </Suspense>
        </>
    )
}
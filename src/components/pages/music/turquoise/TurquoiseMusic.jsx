import { TurquoiseFiltersMusic } from "../../../widgets/turquoise/TurquoiseFiltersMusic";
import { lazy, Suspense, useEffect, useState } from "react";

import track1 from '../../../../../public/turqu-music/1.mp3'
import track2 from '../../../../../public/turqu-music/2.mp3'
import track3 from '../../../../../public/turqu-music/3.mp3'
import track4 from '../../../../../public/turqu-music/4.mp3'
import track5 from '../../../../../public/turqu-music/5.mp3'
import track6 from '../../../../../public/turqu-music/6.mp3'
import track7 from '../../../../../public/turqu-music/7.mp3'
import track8 from '../../../../../public/turqu-music/8.mp3'
const TurquoiseMusicCardList = lazy(() => import("../../../widgets/cards/music/TurquoiseMusicCardList"));
import { Loading } from "../../../../main";
import { Header } from "../../../header/header.jsx";
import { NavigationMenu } from "../../../navigation-menu/NavigationMenu.jsx";

const turquoiseMusic = [
    { "id": 53, "title": "Violator", "band": "Depeche Mode", "src": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&h=400&q=60", "genre": "Electronic", isPlay: false, category: 'turquoise', trackSrc: track1, comer: true }, // назначено comer: true
    { "id": 55, "title": "The Downward Spiral", "band": "Nine Inch Nails", "src": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&h=400&q=60", "genre": "Electronic", isPlay: false, category: 'turquoise', trackSrc: track3, comer: true }, // назначено comer: true
    { "id": 58, "title": "The Dark Side of the Moon", "band": "Pink Floyd", "src": "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&w=400&h=400&q=60", "genre": "Electronic", isPlay: false, category: 'turquoise', trackSrc: track6, comer: true }, // назначено comer: true
    { "id": 59, "title": "Nevermind", "band": "Nirvana", "src": "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=400&h=400&q=60", "genre": "Electronic", isPlay: false, category: 'turquoise', trackSrc: track7, comer: true }, // назначено comer: true
    { "id": 60, "title": "Rumours", "band": "Fleetwood Mac", "src": "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?auto=format&fit=crop&w=400&h=400&q=60", "genre": "Electronic", isPlay: false, category: 'turquoise', trackSrc: track8, comer: true }, // назначено comer: true
    { "id": 61, "title": "Purple Rain", "band": "Prince", "src": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&h=400&q=60", "genre": "Experimental", isPlay: false, category: 'turquoise', trackSrc: '', comer: false }, // назначено comer: false
    { "id": 62, "title": "Back to Black", "band": "Amy Winehouse", "src": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=400&h=400&q=60", "genre": "Experimental", isPlay: false, category: 'turquoise', trackSrc: '', comer: false }, // назначено comer: false
    { "id": 63, "title": "The Joshua Tree", "band": "U2", "src": "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&w=400&h=400&q=60", "genre": "Metal", isPlay: false, category: 'turquoise', trackSrc: '', comer: false }, // назначено comer: false
    { "id": 57, "title": "Курара Чуваши", "band": "Курара", "src": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=400&h=400&q=60", "genre": "Electronic", isPlay: false, category: 'turquoise', trackSrc: track5, comer: true }, // назначено comer: true
    { "id": 64, "title": "21", "band": "Adele", "src": "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=400&h=400&q=60", "genre": "Rock", isPlay: false, category: 'turquoise', trackSrc: '', comer: false }, // назначено comer: false
    { "id": 65, "title": "Thriller", "band": "Michael Jackson", "src": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=400&h=400&q=60", "genre": "Rock", isPlay: false, category: 'turquoise', trackSrc: '', comer: false }, // назначено comer: false
    { "id": 66, "title": "The Miseducation", "band": "Lauryn Hill", "src": "https://images.unsplash.com/photo-1452723312111-3a7d0db0e024?auto=format&fit=crop&w=400&h=400&q=60", "genre": "Hip Hop", isPlay: false, category: 'turquoise', trackSrc: '', comer: false }, // назначено comer: false
    { "id": 54, "title": "OK Computer", "band": "Radiohead", "src": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&h=400&q=60", "genre": "Electronic", isPlay: false, category: 'turquoise', trackSrc: track2, comer: true }, // назначено comer: true
    { "id": 67, "title": "Appetite for Destruction", "band": "Guns N' Roses", "src": "https://images.unsplash.com/photo-1504898770365-14faca6a7320?auto=format&fit=crop&w=400&h=400&q=60", "genre": "Ambient", isPlay: false, category: 'turquoise', trackSrc: '', comer: false }, // назначено comer: false
    { "id": 68, "title": "Born to Run", "band": "Bruce Springsteen", "src": "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=400&h=400&q=60", "genre": "Metal", isPlay: false, category: 'turquoise', trackSrc: '', comer: false }, // назначено comer: false
    { "id": 56, "title": "When We All Fall Asleep", "band": "Billie Eilish", "src": "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?auto=format&fit=crop&w=400&h=400&q=60", "genre": "Electronic", isPlay: false, category: 'turquoise', trackSrc: track4, comer: true }, // назначено comer: true
    { "id": 69, "title": "Lemonade", "band": "Beyoncé", "src": "https://images.unsplash.com/photo-1581909199603-0de32b43ffd2?auto=format&fit=crop&w=400&h=400&q=60", "genre": "R&B", isPlay: false, category: 'turquoise', trackSrc: '', comer: false }, // назначено comer: false
    { "id": 70, "title": "The Rise and Fall", "band": "David Bowie", "src": "https://images.unsplash.com/photo-1534294228306-bd54eb9a7ba8?auto=format&fit=crop&w=400&h=400&q=60", "genre": "Glam rock", isPlay: false, category: 'turquoise', trackSrc: '', comer: false }, // назначено comer: false
]

export default function TurquoiseMusic() {
    const [value, setValue] = useState(null)
    const [albums, setAlbums] = useState(turquoiseMusic || [])


    useEffect(() => {
        if (value === null) return setAlbums(turquoiseMusic || [])

        const filtered = turquoiseMusic.filter(item => {
            if (value === 'Коммерческое') return item.comer === true
            if (value === 'Некоммерческое') return item.comer === false
        })
        setAlbums(filtered)
    }, [value])

    return (
        <>
            <div>
                <Header />
                <NavigationMenu />
            </div>
            <TurquoiseFiltersMusic setValue={setValue} value={value} />
            <Suspense fallback={<Loading />}>
                <TurquoiseMusicCardList cards={albums} setCards={setAlbums} />
            </Suspense>
        </>
    )
}
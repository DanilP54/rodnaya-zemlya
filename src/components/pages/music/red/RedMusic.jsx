import { MusicCardList } from "../../../widgets/cards/music/MusicCardList";
import { RedFilterMusic } from "../../../widgets/red/RedFiltersMusic";
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

const cardList = [
    { "id": 1, "title": "Nobody Loves You Moreby Kim Deal", "src": Card6, "genre": "punk", isPlay: false, category: 'red' },
    { "id": 2, "title": "The Minuteby Yatte & Duett", "src": Card10, "genre": "alternative", isPlay: false, category: 'red' },
    { "id": 3, "title": "Songs of Blood and Mireby SPECTRAL", "src": Card11, "genre": "metal", isPlay: false, category: 'red' },
    { "id": 4, "title": "Seekerby Carbon Based Lifeforms", "src": Card15, "genre": "ambient", isPlay: false, category: 'red' },
    { "id": 5, "title": "When Glory Disappears (EP)by Nöldr", "src": Card9, "genre": "matal", isPlay: false, category: 'red' },
    { "id": 6, "title": "Lust For Goldby Starflyer 59", "src": Card8, "genre": "alternative", isPlay: false, category: 'red' },
    { "id": 7, "title": "YOU'LL HAVE TO LOSE SOMETHINGby", "src": Card20, "genre": "rock", isPlay: false, category: 'red' },
    { "id": 8, "title": "Карточка 8Love Rudiments by Ty Segall", "src": Card21, "genre": "techno", isPlay: false, category: 'red' },
    { "id": 9, "title": "The Duality of Decapitation", "src": Card23, "genre": "electronic", isPlay: false, category: 'red' },
    { "id": 10, "title": "Duck Face Killingsby Fulci", "src": Card24, "genre": "experimental", isPlay: false, category: 'red' },
]

export function RedMusic() {
    return (
        <>
            <RedFilterMusic />
            <MusicCardList list={cardList} />
        </>
    )
}
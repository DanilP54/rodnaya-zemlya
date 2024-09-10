import { GreenFilter } from "../../widgets/green/GreenFilters";

import Film1 from '../../../../public/Film1.jpg'
import { MovieCardList } from "../../widgets/cards/movie/MovieCardList";

const movieList = [
    { "id": 1, "title": "Inception", "src": Film1, "genre": "Sci-Fi", isPlay: false, category: "green" },
    { "id": 2, "title": "The Shawshank", "src": Film1, "genre": "Drama", isPlay: false, category: "green" },
    { "id": 3, "title": "The Dark Knight", "src": Film1, "genre": "Action", isPlay: false, category: "green" },
    { "id": 4, "title": "Pulp Fiction", "src": Film1, "genre": "Crime", isPlay: false, category: "green" },
    { "id": 5, "title": "Fight Club", "src": Film1, "genre": "Drama", isPlay: false, category: "green" },
    { "id": 6, "title": "Forrest Gump", "src": Film1, "genre": "Drama", isPlay: false, category: "green" },
    { "id": 7, "title": "The Matrix", "src": Film1, "genre": "Sci-Fi", isPlay: false, category: "green" },
    { "id": 8, "title": "Goodfellas", "src": Film1, "genre": "Crime", isPlay: false, category: "green" },
    { "id": 9, "title": "Seven", "src": Film1, "genre": "Thriller", isPlay: false, category: "green" },
    { "id": 10, "title": "The Silence of the Lambs", "src": Film1, "genre": "Thriller", isPlay: false, category: "green" },
];

export function GreenMovie() {
    return (
        <>
            <GreenFilter />
            <MovieCardList list={movieList} />

        </>
    )
}
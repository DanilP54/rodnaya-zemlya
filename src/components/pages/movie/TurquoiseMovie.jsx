import { MovieCardList } from "../../widgets/cards/movie/MovieCardList";
import { TurquoiseFiltersMovie } from "../../widgets/turquoise/TurquoiseFiltersMovie";
import Film1 from '../../../../public/Film1.jpg'

const movieList = [
    { "id": 1, "title": "Inception", "src": Film1, "genre": "Sci-Fi", isPlay: false, category: "turquoise" },
    { "id": 2, "title": "The Shawshank", "src": Film1, "genre": "Drama", isPlay: false, category: "turquoise" },
    { "id": 3, "title": "The Dark Knight", "src": Film1, "genre": "Action", isPlay: false, category: "turquoise" },
    { "id": 4, "title": "Pulp Fiction", "src": Film1, "genre": "Crime", isPlay: false, category: "turquoise" },
    { "id": 5, "title": "Fight Club", "src": Film1, "genre": "Drama", isPlay: false, category: "turquoise" },
    { "id": 6, "title": "Forrest Gump", "src": Film1, "genre": "Drama", isPlay: false, category: "turquoise" },
    { "id": 7, "title": "The Matrix", "src": Film1, "genre": "Sci-Fi", isPlay: false, category: "turquoise" },
    { "id": 8, "title": "Goodfellas", "src": Film1, "genre": "Crime", isPlay: false, category: "turquoise" },
    { "id": 9, "title": "Seven", "src": Film1, "genre": "Thriller", isPlay: false, category: "turquoise" },
    { "id": 10, "title": "The Silence of the Lambs", "src": Film1, "genre": "Thriller", isPlay: false, category: "turquoise" },
];

export function TurquoiseMovie() {
    return (
        <>
            <TurquoiseFiltersMovie />
            <MovieCardList list={movieList} />
        </>
    )
}
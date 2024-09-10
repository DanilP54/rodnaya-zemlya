import { RedFilter } from "../../widgets/red/RedFilters";

import Film1 from '../../../../public/Film1.jpg'
import { MovieCardList } from "../../widgets/cards/movie/MovieCardList";

const movieList = [
    { "id": 1, "title": "Inception", "src": Film1, "genre": "Sci-Fi", isPlay: false, category: "red" },
    { "id": 2, "title": "The Shawshank", "src": Film1, "genre": "Drama", isPlay: false, category: "red" },
    { "id": 3, "title": "The Dark Knight", "src": Film1, "genre": "Action", isPlay: false, category: "red" },
    { "id": 4, "title": "Pulp Fiction", "src": Film1, "genre": "Crime", isPlay: false, category: "red" },
    { "id": 5, "title": "Fight Club", "src": Film1, "genre": "Drama", isPlay: false, category: "red" },
    { "id": 6, "title": "Forrest Gump", "src": Film1, "genre": "Drama", isPlay: false, category: "red" },
    { "id": 7, "title": "The Matrix", "src": Film1, "genre": "Sci-Fi", isPlay: false, category: "red" },
    { "id": 8, "title": "Goodfellas", "src": Film1, "genre": "Crime", isPlay: false, category: "red" },
    { "id": 9, "title": "Seven", "src": Film1, "genre": "Thriller", isPlay: false, category: "red" },
    { "id": 10, "title": "The Silence of the Lambs", "src": Film1, "genre": "Thriller", isPlay: false, category: "red" },
];

export function RedMovie() {
    return (
        <>
            <RedFilter />
            <MovieCardList list={movieList} />
        </>
    )
}
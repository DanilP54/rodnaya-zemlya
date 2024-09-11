import { RedFilter } from "../../widgets/red/RedFilters";

import Film1 from '../../../../public/Film1.jpg'
import { MovieCardList } from "../../widgets/cards/movie/MovieCardList";

const movieList = [
    { "id": 1, "title": "Inception", "src": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg", "genre": "Sci-Fi", isPlay: false, category: "red" },
    { "id": 2, "title": "The Shawshank Redemption", "src": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg", "genre": "Drama", isPlay: false, category: "red" },
    { "id": 3, "title": "The Dark Knight", "src": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg", "genre": "Action", isPlay: false, category: "red" },
    { "id": 4, "title": "Pulp Fiction", "src": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", "genre": "Crime", isPlay: false, category: "red" },
    { "id": 5, "title": "Fight Club", "src": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", "genre": "Drama", isPlay: false, category: "red" },
    { "id": 6, "title": "Forrest Gump", "src": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", "genre": "Drama", isPlay: false, category: "red" },
    { "id": 7, "title": "The Matrix", "src": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", "genre": "Sci-Fi", isPlay: false, category: "red" },
    { "id": 8, "title": "Goodfellas", "src": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", "genre": "Crime", isPlay: false, category: "red" },
    { "id": 9, "title": "Seven", "src": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", "genre": "Thriller", isPlay: false, category: "red" },
    { "id": 10, "title": "The Silence of the Lambs", "src": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", "genre": "Thriller", isPlay: false, category: "red" },
];

export function RedMovie() {
    return (
        <>
            <RedFilter />
            <MovieCardList list={movieList} />
        </>
    )
}
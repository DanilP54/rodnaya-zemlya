import { Loading } from "../../../main";
import { RedFilter } from "../../widgets/red/RedFilters";
import { useState, useEffect, lazy, Suspense } from "react";

const MovieCardList = lazy(() => import('../../widgets/cards/movie/MovieCardList'))

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
    { "id": 11, "title": "The Godfather", "src": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", "genre": "Crime", isPlay: false, category: "red" },
    { "id": 12, "title": "Schindler's List", "src": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", "genre": "Drama", isPlay: false, category: "red" },
    { "id": 13, "title": "12 Angry Men", "src": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg", "genre": "Drama", isPlay: false, category: "red" },
    { "id": 14, "title": "The Lord of the Rings: The Return of the King", "src": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", "genre": "Fantasy", isPlay: false, category: "red" },
    { "id": 15, "title": "Interstellar", "src": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg", "genre": "Sci-Fi", isPlay: false, category: "red" },
    { "id": 16, "title": "Gladiator", "src": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", "genre": "Action", isPlay: false, category: "red" },
    { "id": 17, "title": "The Green Mile", "src": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg", "genre": "Drama", isPlay: false, category: "red" },
    { "id": 18, "title": "Saving Private Ryan", "src": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg", "genre": "War", isPlay: false, category: "red" },
];

function RedMovie() {
    const [value, setValue] = useState([])
    const [movies, setMovies] = useState(movieList || [])

    useEffect(() => {
        if (!value.length) return setMovies(movieList || [])

        const filtered = movieList.filter(item => {
            return value.includes(item.genre)
        })
        setMovies(filtered)
    }, [value])
    return (
        <>
            <RedFilter setValue={setValue} />
            <Suspense fallback={<Loading />}>
                <MovieCardList cards={movies} setCards={setMovies} />
            </Suspense>
        </>
    )
}


export default RedMovie
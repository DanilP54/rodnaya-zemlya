import { GreenFilter } from "../../widgets/green/GreenFilters";
import { useState, useEffect, Suspense } from "react";
import { lazy } from "react";
import { Loading } from "../../../main";
import { NavigationMenu } from "../../navigation-menu/NavigationMenu.jsx";
import { Header } from '../../header/header.jsx'
const MovieCardList = lazy(() => import('../../widgets/cards/movie/MovieCardList'))

const movieList = [
    { "id": 1, "title": "Inception", "nameRu": "Начало", "src": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg", "genre": "Sci-Fi", isPlay: false, category: "green", comer: true },
    { "id": 2, "title": "The Shawshank Redemption", "nameRu": "Побег из Шоушенка", "src": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg", "genre": "Drama", isPlay: false, category: "green", comer: false },
    { "id": 3, "title": "The Dark Knight", "nameRu": "Темный рыцарь", "src": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg", "genre": "Action", isPlay: false, category: "green", comer: true },
    { "id": 4, "title": "Pulp Fiction", "nameRu": "Криминальное чтиво", "src": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", "genre": "Crime", isPlay: false, category: "green", comer: false },
    { "id": 5, "title": "Fight Club", "nameRu": "Бойцовский клуб", "src": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg", "genre": "Drama", isPlay: false, category: "green", comer: true },
    { "id": 6, "title": "Forrest Gump", "nameRu": "Форрест Гамп", "src": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", "genre": "Drama", isPlay: false, category: "green", comer: false },
    { "id": 7, "title": "The Matrix", "nameRu": "Матрица", "src": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", "genre": "Sci-Fi", isPlay: false, category: "green", comer: true },
    { "id": 8, "title": "Goodfellas", "nameRu": "Славные парни", "src": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", "genre": "Crime", isPlay: false, category: "green", comer: false },
    { "id": 9, "title": "Seven", "nameRu": "Семь", "src": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", "genre": "Thriller", isPlay: false, category: "green", comer: true },
    { "id": 10, "title": "The Silence of the Lambs", "nameRu": "Молчание ягнят", "src": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", "genre": "Thriller", isPlay: false, category: "green", comer: false },
    { "id": 11, "title": "The Godfather", "nameRu": "Крёстный отец", "src": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", "genre": "Crime", isPlay: false, category: "green", comer: true },
    { "id": 12, "title": "Schindler's List", "nameRu": "Список Шиндлера", "src": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", "genre": "Biography", isPlay: false, category: "green", comer: false },
    { "id": 13, "title": "Interstellar", "nameRu": "Интерстеллар", "src": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg", "genre": "Sci-Fi", isPlay: false, category: "green", comer: true },
    { "id": 14, "title": "The Lord of the Rings: The Fellowship of the Ring", "nameRu": "Властелин колец: Братство кольца", "src": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg", "genre": "Fantasy", isPlay: false, category: "green", comer: false },
    { "id": 15, "title": "Gladiator", "nameRu": "Гладиатор", "src": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", "genre": "Action", isPlay: false, category: "green", comer: true },
    { "id": 16, "title": "The Green Mile", "nameRu": "Зеленая миля", "src": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg", "genre": "Drama", isPlay: false, category: "green", comer: false },
    { "id": 17, "title": "Saving Private Ryan", "nameRu": "Спасти рядового Райана", "src": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg", "genre": "War", isPlay: false, category: "green", comer: true },
    { "id": 18, "title": "The Departed", "nameRu": "Отступники", "src": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg", "genre": "Crime", isPlay: false, category: "green", comer: false },
];

export default function GreenMovie() {
    const [value, setValue] = useState(null)
    const [movies, setMovies] = useState(movieList || [])

    useEffect(() => {
        if (value === null) return setMovies(movieList || [])

        const filtered = movieList.filter(item => {
            if (value === 'Коммерческое') return item.comer === true
            if (value === 'Некоммерческое') return item.comer === false
        })
        setMovies(filtered)
    }, [value])


    return (
        <>
            <div>
                <Header />
                <NavigationMenu />
            </div>
            <GreenFilter setValue={setValue} value={value} />
            <Suspense fallback={<Loading />}>
                <MovieCardList cards={movies} setCards={setMovies} />
            </Suspense>


        </>
    )
}
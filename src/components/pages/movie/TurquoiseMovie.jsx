import { TurquoiseFiltersMovie } from "../../widgets/turquoise/TurquoiseFiltersMovie";
import { lazy, Suspense, useState } from "react";
import { useEffect } from "react";
import { Loading } from "../../../main";
import { turquoiseMovieList } from "../../../data/movie/terquoise";
const MovieCardList = lazy(() => import("../../widgets/cards/movie/MovieCardList"))

function TurquoiseMovie() {

    const [value, setValue] = useState(null)

    const [movies, setMovies] = useState(turquoiseMovieList || [])


    useEffect(() => {
        if (value === null) return setMovies(turquoiseMovieList || [])

        const filtered = turquoiseMovieList.filter(item => {
            if (value === 'Коммерческое') return item.comer === true
            if (value === 'Некоммерческое') return item.comer === false
            if(value === 'Документальное') return item.doc === true
        })
        setMovies(filtered)
    }, [value])




    return (
        <>
            <TurquoiseFiltersMovie setValue={setValue} value={value} />
            <Suspense fallback={<Loading />}>
                <MovieCardList cards={movies} setCards={setMovies} />
            </Suspense>
        </>
    )
}


export default TurquoiseMovie
import { redMovieList } from "../../../data/movie/red";
import { Loading } from "../../../main";
import { RedFilter } from "../../widgets/red/RedFilters";
import { useState, useEffect, lazy, Suspense } from "react";

const MovieCardList = lazy(() => import('../../widgets/cards/movie/MovieCardList'))

function RedMovie() {
    const [value, setValue] = useState(null)
    const [movies, setMovies] = useState(redMovieList || [])


    useEffect(() => {
        if (value === null) return setMovies(redMovieList || [])

        const filtered = redMovieList.filter(item => {
            if (value === 'Коммерческое') return item.comer === true
            if (value === 'Некоммерческое') return item.comer === false
            else {
                console.log('item: ', item)
                return item.nameRu === value
            }
        })

        setMovies(filtered)
    }, [value])
    return (
        <>
            <RedFilter setValue={setValue} value={value} />
            <Suspense fallback={<Loading />}>
                <MovieCardList cards={movies} setCards={setMovies} />
            </Suspense>
        </>
    )
}


export default RedMovie
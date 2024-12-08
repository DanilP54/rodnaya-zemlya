import { GreenFilter } from "../../widgets/green/GreenFilters";
import { useState, useEffect, Suspense } from "react";
import { lazy } from "react";
import { Loading } from "../../../main";
import { greenMovieList } from "../../../data/movie/green";
const MovieCardList = lazy(() => import('../../widgets/cards/movie/MovieCardList'))

export default function GreenMovie() {
  const [value, setValue] = useState(null)
  const [movies, setMovies] = useState(greenMovieList || [])

  useEffect(() => {
    if (value === null) return setMovies(greenMovieList || [])

    const filtered = greenMovieList.filter(item => {
      if (value === 'Коммерческое') return item.comer === true
      if (value === 'Некоммерческое') return item.comer === false
    })
    setMovies(filtered)
  }, [value])


  return (
    <>
      <GreenFilter setValue={setValue} value={value} />
      <Suspense fallback={<Loading />}>
        <MovieCardList cards={movies} setCards={setMovies} />
      </Suspense>


    </>
  )
}

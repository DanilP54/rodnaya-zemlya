import { useState, useEffect, lazy, Suspense } from "react";
const LiteratureCardList = lazy(() => import("../../../widgets/cards/literature/LiteratureCardList.jsx"));
import { Loading } from "../../../../main.jsx";
import { TurquoiseFiltersLiterature } from "../../../widgets/turquoise/TurquoiseFiltersLiterature.jsx";
import { turquoiseBookList } from "../../../../data/literature/turquoise.js";



export default function TurquoiseLiterature() {
  const [value, setValue] = useState(null)
  const [books, setBooks] = useState(turquoiseBookList || [])


  useEffect(() => {
    if (value === null) return setBooks(turquoiseBookList || [])

    const filtered = turquoiseBookList.filter(item => {
      if (value === 'Коммерческое') return item.comer === true
      if (value === 'Некоммерческое') return item.comer === false
      if(value === 'Документальное') return item.doc === true
    })
    setBooks(filtered)
  }, [value])
  return (
    <>
      <TurquoiseFiltersLiterature setValue={setValue} value={value} />
      <Suspense fallback={<Loading />}>
        <LiteratureCardList cards={books} setCards={setBooks} />
      </Suspense>

    </>
  )
}

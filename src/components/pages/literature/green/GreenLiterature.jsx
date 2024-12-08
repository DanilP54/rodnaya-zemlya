import { useState, useEffect, lazy, Suspense } from "react";
const LiteratureCardList = lazy(() => import("../../../widgets/cards/literature/LiteratureCardList.jsx"));
import { GreenFiltersLiterature } from "../../../widgets/green/GreenFiltersLiterature.jsx";
import { Loading } from "../../../../main.jsx";
import { greenBooks } from "../../../../data/literature/green.js";





export default function GreenLiterature() {
  const [value, setValue] = useState(null)
  const [books, setBooks] = useState(greenBooks || [])


  useEffect(() => {
    if (value === null) return setBooks(greenBooks || [])

    const filtered = greenBooks.filter(item => {
      if (value === 'Коммерческое') return item.comer === true
      if (value === 'Некоммерческое') return item.comer === false
    })
    setBooks(filtered)
  }, [value])

  return (
    <>
      <GreenFiltersLiterature setValue={setValue} value={value} />
      <Suspense fallback={<Loading />}>
        <LiteratureCardList cards={books} setCards={setBooks} />
      </Suspense>

    </>
  )
}

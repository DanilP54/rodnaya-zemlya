import { lazy, Suspense, useEffect, useState } from "react";
import { turquoiseArt } from "../../../data/art/terquoise.js";


const TurquoiseArtCardList = lazy(() => import("../../widgets/cards/arts/TurquoiseArtCardList.jsx"));
import { Loading } from "../../../main.jsx";
import { TurquoiseFiltersArt } from "../../widgets/turquoise/TurquoiseFilterArt.jsx";
import { PRIMARY_TURQUOISE, SECONDARY_TURQUOISE } from "../../../constants.js";



export default function TurquoiseArt() {
  const [value, setValue] = useState(null)
  const [art, setArt] = useState(turquoiseArt || [])


  useEffect(() => {

    if (value === null) return setArt(turquoiseArt || [])

    const filtered = turquoiseArt.filter(item => {
      if (value === 'Коммерческое') return item.comer === true
      if (value === 'Некоммерческое') return item.comer === false
      if(value === 'Документальное') return item.doc === true
    })
    setArt(filtered)
  }, [value])

  return (
    <>
      <TurquoiseFiltersArt setValue={setValue} value={value} primaryColor={PRIMARY_TURQUOISE} secondaryColor={SECONDARY_TURQUOISE} />
      <Suspense fallback={<Loading />}>
        <TurquoiseArtCardList cards={art} setCards={setArt} />
      </Suspense>
    </>
  )
}

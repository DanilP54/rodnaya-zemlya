import { lazy, Suspense, useEffect, useState } from "react";
import { greenArt } from "../../../data/art/green.js";
import { GreenFiltersArt } from "./GreenFiltersArt.jsx";
import { Loading } from "../../../main.jsx";
import { PRIMARY_GREEN, SECONDARY_GREEN } from "../../../constants.js";

const TurquoiseArtCardList = lazy(() => import("../../widgets/cards/arts/TurquoiseArtCardList.jsx"));

export default function GreenArt() {
  const [value, setValue] = useState(null)
  const [art, setArt] = useState(greenArt || [])


  useEffect(() => {

    if (value === null) return setArt(greenArt || [])

    const filtered = greenArt.filter(item => {
      if (value === 'Коммерческое') return item.comer === true
      if (value === 'Некоммерческое') return item.comer === false
    })
    setArt(filtered)
  }, [value])

  return (
    <>
      <GreenFiltersArt setValue={setValue} value={value} primaryColor={PRIMARY_GREEN} secondaryColor={SECONDARY_GREEN} />
      <Suspense fallback={<Loading />}>
        <TurquoiseArtCardList cards={art} setCards={setArt} />
      </Suspense>
    </>
  )
}

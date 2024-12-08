import { lazy, Suspense, useEffect, useState } from "react";

import { redArt } from "../../../data/art/red.js";

import { Loading } from "../../../main.jsx";

import { FiltersArt } from "../../widgets/turquoise/FiltersArt.jsx";

import { PRIMARY_RED, SECONDARY_RED } from "../../../constants.js";

const TurquoiseArtCardList = lazy(() => import("../../widgets/cards/arts/TurquoiseArtCardList.jsx"));


export default function RedArt() {
  const [value, setValue] = useState(null)
  const [art, setArt] = useState(redArt || [])


  useEffect(() => {

    if (value === null) return setArt(redArt || [])

    const filtered = redArt.filter(item => {
      if (value === 'Коммерческое') return item.comer === true
      if (value === 'Некоммерческое') return item.comer === false
    })
    setArt(filtered)
  }, [value])

  return (
    <>
      <FiltersArt setValue={setValue} value={value} primaryColor={PRIMARY_RED} secondaryColor={SECONDARY_RED} />
      <Suspense fallback={<Loading />}>
        <TurquoiseArtCardList cards={art} setCards={setArt} />
      </Suspense>
    </>
  )
}

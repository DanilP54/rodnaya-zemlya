import { RedFilterMusic } from "../../../widgets/red/RedFiltersMusic";
import { useState, useEffect, lazy, Suspense } from "react";
import { redMusic } from "../../../../data/music/red";

import { Loading } from "../../../../main";
const RedMusicCardList = lazy(() => import("../../../widgets/cards/music/RedMusicCardList"));

export default function RedMusic() {

    const [value, setValue] = useState(null)
    const [albums, setAlbums] = useState(redMusic || [])


    useEffect(() => {
        if (value === null) return setAlbums(redMusic || [])

        const filtered = redMusic.filter(item => {
            if (value === 'Коммерческое') return item.comer === true
            if (value === 'Некоммерческое') return item.comer === false
        })
        setAlbums(filtered)
    }, [value])


    return (
        <>
            <RedFilterMusic setValue={setValue} value={value} />
            <Suspense fallback={<Loading />}>
                <RedMusicCardList cards={albums} setCards={setAlbums} />
            </Suspense>
        </>
    )
}
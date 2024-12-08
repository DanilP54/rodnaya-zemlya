import { useState, useEffect, lazy, Suspense } from "react";
const LiteratureCardList = lazy(() => import("../../../widgets/cards/literature/LiteratureCardList.jsx"));
import { RedFiltersLiterature } from "../../../widgets/red/RedFiltersLiterature.jsx";
import { Loading } from "../../../../main.jsx";
import { redBooksList } from "../../../../data/literature/red.js";



export default function RedLiterature() {

    const [value, setValue] = useState(null)
    const [books, setBooks] = useState(redBooksList || [])


    useEffect(() => {
        if (value === null) return setBooks(redBooksList || [])

        const filtered = redBooksList.filter(item => {
            if (value === 'Коммерческое') return item.comer === true
            if (value === 'Некоммерческое') return item.comer === false
        })
        setBooks(filtered)
    }, [value])

    return (
        <>
            <RedFiltersLiterature setValue={setValue} value={value} />
            <Suspense fallback={<Loading />}>
                <LiteratureCardList cards={books} setCards={setBooks} />
            </Suspense>
        </>
    )
}
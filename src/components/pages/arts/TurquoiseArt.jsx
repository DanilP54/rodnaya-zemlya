import { lazy, Suspense, useEffect, useState } from "react";

import src1 from '../../../../public/art/arts/33.jpg';
import src2 from '../../../../public/art/arts/34.jpg';
import src3 from '../../../../public/art/arts/35.jpg';
import src4 from '../../../../public/art/arts/36.jpg';
import src5 from '../../../../public/art/arts/37.jpg';
import src6 from '../../../../public/art/arts/38.jpg';
import src7 from '../../../../public/art/arts/39.jpg';
import src8 from '../../../../public/art/arts/40.jpg';
import src9 from '../../../../public/art/arts/41.jpg';
import src10 from '../../../../public/art/arts/42.jpg';
import src11 from '../../../../public/art/arts/43.jpg';
import src12 from '../../../../public/art/arts/44.jpg';
import src13 from '../../../../public/art/arts/45.jpg';
import src14 from '../../../../public/art/arts/46.jpg';
import src15 from '../../../../public/art/arts/47.jpg';
import src16 from '../../../../public/art/arts/48.jpg';
import src17 from '../../../../public/art/arts/49.jpg';
import src18 from '../../../../public/art/arts/50.jpg';
import src19 from '../../../../public/art/arts/51.jpg';
import src20 from '../../../../public/art/arts/52.jpg';

const TurquoiseArtCardList = lazy(() => import("../../widgets/cards/arts/TurquoiseArtCardList.jsx"));
import { Loading } from "../../../main.jsx";
import { Header } from "../../header/header.jsx";
import { NavigationMenu } from "../../navigation-menu/NavigationMenu.jsx";
import { FiltersArt } from "../../widgets/turquoise/FiltersArt.jsx";

const turquoiseArt = [
    { id: 1, name: 'Alexandre Dupont', nameRu: 'Александр Дюпон', image: src1, category: 'turquoise', comer: true },
    { id: 2, name: 'Sophie Martin', nameRu: 'София Мартин', image: src2, category: 'turquoise', comer: false },
    { id: 3, name: 'Julien Lefevre', nameRu: 'Жюльен Лефевр', image: src3, category: 'turquoise', comer: true },
    { id: 4, name: 'Clara Dubois', nameRu: 'Клара Дюбо', image: src4, category: 'turquoise', comer: false },
    { id: 5, name: 'Maxime Bernard', nameRu: 'Максим Бернар', image: src5, category: 'turquoise', comer: true },
    { id: 6, name: 'Léa Moreau', nameRu: 'Лея Моро', image: src6, category: 'turquoise', comer: false },
    { id: 7, name: 'Nicolas Girard', nameRu: 'Николя Жирар', image: src7, category: 'turquoise', comer: true },
    { id: 8, name: 'Emma Lefevre', nameRu: 'Эмма Лефевр', image: src8, category: 'turquoise', comer: false },
    { id: 9, name: 'Lucas Petit', nameRu: 'Лукас Пети', image: src9, category: 'turquoise', comer: true },
    { id: 10, name: 'Chloé Simon', nameRu: 'Хлоя Симон', image: src10, category: 'turquoise', comer: false },
    { id: 11, name: 'Antoine Roche', nameRu: 'Антуан Рош', image: src11, category: 'turquoise', comer: true },
    { id: 12, name: 'Camille Fournier', nameRu: 'Камиль Фурнье', image: src12, category: 'turquoise', comer: false },
    { id: 13, name: 'Juliette Lambert', nameRu: 'Жюльетта Ламбер', image: src13, category: 'turquoise', comer: true },
    { id: 14, name: 'Victor Lefevre', nameRu: 'Виктор Лефевр', image: src14, category: 'turquoise', comer: false },
    { id: 15, name: 'Alice Morel', nameRu: 'Алиса Море', image: src15, category: 'turquoise', comer: true },
    { id: 16, name: 'Pauline Gauthier', nameRu: 'Полина Готье', image: src16, category: 'turquoise', comer: false },
    { id: 17, name: 'Gabriel Martin', nameRu: 'Габриэль Мартин', image: src17, category: 'turquoise', comer: true },
    { id: 18, name: 'Inès Dubois', nameRu: 'Инесса Дюбо', image: src18, category: 'turquoise', comer: false },
    { id: 19, name: 'Théo Bernard', nameRu: 'Тео Бернар', image: src19, category: 'turquoise', comer: true },
    { id: 20, name: 'Lola Lefevre', nameRu: 'Лола Лефевр', image: src20, category: 'turquoise', comer: false }
]

export default function TurquoiseArt() {
    const [value, setValue] = useState(null)
    const [art, setArt] = useState(turquoiseArt || [])


    useEffect(() => {

        if (value === null) return setArt(turquoiseArt || [])

        const filtered = turquoiseArt.filter(item => {
            if (value === 'Коммерческое') return item.comer === true
            if (value === 'Некоммерческое') return item.comer === false
        })
        setArt(filtered)
    }, [value])

    return (
        <>
            <div>
                <Header />
                <NavigationMenu />
            </div>
            <FiltersArt setValue={setValue} value={value} primaryColor={'#00CED1'} secondaryColor={'#E0FFFF'} />
            <Suspense fallback={<Loading />}>
                <TurquoiseArtCardList cards={art} setCards={setArt} />
            </Suspense>
        </>
    )
}
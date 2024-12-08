import { TurquoiseFiltersMusic } from "../../../widgets/turquoise/TurquoiseFiltersMusic";
import { turquoiseMusic } from "../../../../data/music/terquoise";
import { lazy, Suspense, useEffect, useState } from "react";

const TurquoiseMusicCardList = lazy(() =>
  import("../../../widgets/cards/music/TurquoiseMusicCardList")
);
import { Loading } from "../../../../main";

export default function TurquoiseMusic() {
  const [value, setValue] = useState(null);
  const [albums, setAlbums] = useState(turquoiseMusic || []);

  useEffect(() => {
    if (value === null) return setAlbums(turquoiseMusic || []);

    const filtered = turquoiseMusic.filter((item) => {
      if (value === "Коммерческое") return item.comer === true;
      if (value === "Некоммерческое") return item.comer === false;
      if (value === "Документальное") return item.doc === true;
    });
    setAlbums(filtered);
  }, [value]);

  return (
    <>
      <TurquoiseFiltersMusic setValue={setValue} value={value} />
      <Suspense fallback={<Loading />}>
        <TurquoiseMusicCardList cards={albums} setCards={setAlbums} />
      </Suspense>
    </>
  );
}

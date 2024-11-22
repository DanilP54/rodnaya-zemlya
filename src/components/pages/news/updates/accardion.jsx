import React, { useState } from "react";
import { Accordion} from "@mantine/core";
import "./accardion.module.css";
import classes from "./accardion.module.css";
import RedMusicCardList from "../../../widgets/cards/music/RedMusicCardList";
import { redMusic } from "../../music/red/RedMusic";
import { movieList } from "../../movie/RedMovie";
import MovieCardList from "../../../widgets/cards/movie/MovieCardList";
import LiteratureCardList from "../../../widgets/cards/literature/LiteratureCardList";
import { booksList } from "../../literature/red/RedLiterature";
import { redArt } from "../../arts/RedArt";
import TurquoiseArtCardList from "../../../widgets/cards/arts/TurquoiseArtCardList";

const groceries = [
  {
    value: "Музыка",
    component: <MusicBlock />,
  },
  {
    value: "Фильмы",
    component: <MoveBlock />,
  },
  {
    value: "Литература",
    component: <LitBlock />,
  },
  {
    value: "Живопись",
    component: <ArtBlock />,
  },
];

function MusicBlock() {
  const [data, setData] = useState(redMusic);

  return (
    <RedMusicCardList cards={data} setCards={setData} newsVariant={true} />
  );
}

function MoveBlock() {
  const [data, setData] = useState(movieList);

  return <MovieCardList cards={data} setCards={setData} newsVariant={true} />;
}

function LitBlock() {
  const [data, setData] = useState(booksList);

  return (
    <LiteratureCardList cards={data} setCards={setData} newsVariant={true} />
  );
}

function ArtBlock() {
  const [data, setData] = useState(redArt);

  return (
    <TurquoiseArtCardList cards={data} setCards={setData} newsVariant={true} />
  );
}

export function UpdatesAccardion() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item
      key={item.value}
      value={item.value}
      className={classes.item}
    >
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.component}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
      <>
        <div>
          <h3 style={{
            padding: '20px 0 10px 0',
            color: "rgba(255, 255, 255, 0.7)",
          }}>
            Новинки
          </h3>
        </div>
    <div
      style={{
        overflow: "auto",
        height: "600px",
      }}
    >
      <Accordion
        mt={"xs"}
       
        className={classes}
      >
        {items}
      </Accordion>
    </div>
      </>
  );
}

import React, { useEffect, useState } from "react";
import { Accordion, rgba } from "@mantine/core";
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
    <div
      style={{
        overflow: "auto",
        // border: "1px solid red",

        height: "600px",
        marginTop: "20px",
      }}
    >
    
        <h3
          style={{
            color: "#b5b4b4",
          }}
        >
          Новинки
        </h3>

      <Accordion
      mt={'md'}
       
        className={classes}
      >
        {items}
      </Accordion>
    </div>
  );
}

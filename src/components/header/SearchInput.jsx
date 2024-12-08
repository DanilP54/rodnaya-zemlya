import { Spotlight, spotlight } from "@mantine/spotlight";
import style from "./header.module.css";
import { useState } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { 
  // redBookListActions, 
  greenMusicActons, 
  redMusicActons, 
  turquoiseMusicActons,
  turquoiseBookListActions,
  // greenBookListActions,
  greenMovieActions,
  // redMovieActions,
  // turquoiseMovieActions,
  greenArtActions,
  // redArtActions,
  // turquoiseArtActions
} from "./allActions";


function IconSearch({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2.7"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-search"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
    </svg>
  );
}

export const actions = [
  {
    group: "Литература",
    actions: [
      // ...redBookListActions,
      ...turquoiseBookListActions,
      // ...greenBookListActions
    ],
  },
  {
    group: "Музыка",
    actions: [
      ...redMusicActons,
      ...greenMusicActons,
      ...turquoiseMusicActons
    ],  
  },
  {
    group: "Фильмы",
    actions: [
      // ...redMovieActions,
      ...greenMovieActions
    ]
  }, 
  {
    group: 'Живопись',
    actions: [
      ...greenArtActions,
      // ...redArtActions,
      // ...turquoiseArtActions
    ]
  }
 
];

export default function SearchInput({ width }) {
  const { theme } = useThemeContext();
  const [query, setQuery] = useState("")

  return (
    <>
      <div className={style.input_box}>
        <button
          onClick={spotlight.open}
          style={{
            cursor: "pointer",
            display: "flex",
            marginLeft: 'auto',
            alignItems: "center",
            border:
              theme === "light"
                ? "1px solid rgb(227, 225, 225)"
                : "1px solid white",
            backgroundColor: "transparent",
            outline: "none",
            borderRadius: "4px",
            gap: "20px",
            padding: "10px 15px",
            color: "white",
            width: width ?? "300px",
            height: "37px",
          }}
        >
          <span
            style={{
              color: theme === "light" ? "black" : "white",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            Поиск
          </span>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconSearch color={theme === "light" ? "black" : "white"} />
          </div>
        </button>
        <Spotlight
          inputMode="search"
          scrollable
          onQueryChange={(q) => setQuery(q) }
          maxHeight={600}
          limit={query.length === 0 ? 0 : 30}
          actions={actions}
          nothingFound={query ? "К сожалению, ничего не найдено" : "Пожулайста, введите запрос"}
          highlightQuery
          searchProps={{
            leftSection: (
              <IconSearch color={theme === "light" ? "black" : "white"} />
            ),
            placeholder: "Поиск",
          }}
        />
      </div>
    </>
  );
}

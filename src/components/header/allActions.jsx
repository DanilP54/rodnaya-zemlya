import { Image } from "@mantine/core";

// movie
import { redMovieList } from "../../data/movie/red";
// import { greenMovieList } from "../../data/movie/green";
// import { turquoiseMovieList } from "../../data/movie/terquoise";
// music
import { redMusic } from "../../data/music/red";
import { greenMusic } from "../../data/music/green";
import { turquoiseMusic } from "../../data/music/terquoise";

// book
// import { redBooksList } from "../../data/literature/red";
// import { greenBooks } from "../../data/literature/green";
import { turquoiseBookList } from "../../data/literature/turquoise";
// art
// import { redArt } from "../../data/art/red";
import { greenArt } from "../../data/art/green";
// import { turquoiseArt } from "../../data/art/terquoise";
import { PRIMARY_GREEN, PRIMARY_RED, PRIMARY_TURQUOISE } from "../../constants";

// Movie

export const greenMovieActions = redMovieList.map((movie) => {
  return {
    id: movie.id.toString(),
    label: movie.nameRu,
    description: movie.title,
    onClick: () => {
      window.history.pushState({}, "", "/app/green/m/1");
      window.dispatchEvent(new Event("popstate"));
    },
    leftSection: <Image w={100} h={100} src={movie.src} />,
    rightSection: <div style={{width: "5px", height: "80px", backgroundColor: PRIMARY_GREEN }}></div>
  };
});


//   id: movie.id.toString(),
//   label: movie.nameRu,
//   description: movie.title,
//   onClick: () => console.log(1),
//   leftSection: <Image w={100} h={100} src={movie.src} />,
// }));

// export const turquoiseMovieActions = turquoiseMovieList.map((movie) => ({
//   id: movie.id.toString(),
//   label: movie.nameRu,
//   description: movie.title,
//   onClick: () => console.log(1),
//   leftSection: <Image w={100} h={100} src={movie.src} />,
// }));

// Music

export const redMusicActons = redMusic.map((music) => ({
  id: music.id.toString(),
  label: music.title,
  description: `artist: ${music.artist}, band: ${music.band}`,
  onClick: () => {
    window.history.pushState({}, "", `/app/red/a/${music.id.toString()}`);
    window.dispatchEvent(new Event("popstate"));
  },
  leftSection: <Image w={100} h={100} src={music.src} />,
  rightSection: <div style={{width: "5px", height: "80px", backgroundColor: PRIMARY_RED }}></div>
}));

export const greenMusicActons = greenMusic.map((music) => ({
  id: music.id.toString(),
  label: music.title,
  description: `artist: ${music.artist}, band: ${music.band}`,
  onClick: () => {
    window.history.pushState({}, "", `/app/green/a/${music.id.toString()}`);
    window.dispatchEvent(new Event("popstate"));
  },
  leftSection: <Image w={100} h={100} src={music.src} />,
  rightSection: <div style={{width: "5px", height: "80px", backgroundColor: PRIMARY_GREEN }}></div>
}));

export const turquoiseMusicActons = turquoiseMusic.map((music) => ({
  id: music.id.toString(),
  label: music.title,
  description: `artist: ${music.artist}, band: ${music.band}`,
  onClick: () => {
    window.history.pushState({}, "", `/app/turquoise/a/${music.id.toString()}`);
    window.dispatchEvent(new Event("popstate"));
  },
  leftSection: <Image w={100} h={100} src={music.src} />,
  rightSection: <div style={{width: "5px", height: "80px", backgroundColor: PRIMARY_TURQUOISE }}></div>
}));

// Book

// export const redBookListActions = redBooksList.map((book) => ({
//   id: book.id.toString(),
//   label: book.nameRu,
//   description: `author: ${book.title}, genre: ${book.genre}`,
//   onClick: () => {
//     window.history.pushState({}, "", `/app/red/l/${book.id.toString()}`);
//     window.dispatchEvent(new Event("popstate"));
//   },
//   leftSection: <Image w={100} h={100} src={book.src} />,
// }));

// export const greenBookListActions = greenBooks.map((book) => ({
//   id: book.id.toString(),
//   label: book.nameRu,
//   description: `author: ${book.title}, genre: ${book.genre}`,
//   onClick: () => console.log("1"),
//   leftSection: <Image w={100} h={100} src={book.src} />,
// }));

export const turquoiseBookListActions = turquoiseBookList.map((book) => ({
  id: book.id.toString(),
  label: book.nameRu,
  description: `author: ${book.title}, genre: ${book.genre}`,
  onClick: () => {
    window.history.pushState({}, "", `/app/turquoise/l/${book.id.toString()}`);
    window.dispatchEvent(new Event("popstate"));
  },
  leftSection: <Image w={100} h={100} src={book.src} />,
  rightSection: <div style={{width: "5px", height: "80px", backgroundColor: PRIMARY_TURQUOISE }}></div>,
}));

// Art

// export const redArtActions = redArt.map((art) => ({
//   id: art.id.toString(),
//   label: art.nameRu,
//   description: `art`,
//   onClick: () => console.log("1"),
//   leftSection: <Image w={100} h={100} src={art.image} />,
//   rightSection: <div style={{width: "5px", height: "80px", backgroundColor: PRIMARY_TURQUOISE }}></div>
// }));

export const greenArtActions = greenArt.map((art) => ({
  id: art.id.toString(),
  label: art.nameRu,
  description: `art`,
  onClick: () => {
    window.history.pushState({}, "", `/app/green/art/${art.id.toString()}`);
    window.dispatchEvent(new Event("popstate"));
  },
  leftSection: <Image w={100} h={100} src={art.image} />,
  rightSection: <div style={{width: "5px", height: "80px", backgroundColor: PRIMARY_GREEN}}></div>
}));

// export const turquoiseArtActions = turquoiseArt.map((art) => ({
//   id: art.id.toString(),
//   label: art.nameRu,
//   description: `art`,
//   onClick: () => console.log("1"),
//   leftSection: <Image w={100} h={100} src={art.image} />,
//   rightSection: <div style={{width: "5px", height: "80px", backgroundColor: PRIMARY_TURQUOISE }}></div>
// }))

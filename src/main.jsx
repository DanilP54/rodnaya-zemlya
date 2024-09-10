import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RootLayout } from './RootLayout.jsx'
import App from './App.jsx'
import 'semantic-ui-css/semantic.min.css'
import '@mantine/core/styles.css';
import 'react-h5-audio-player/lib/styles.css';
import 'video-react/dist/video-react.css';
import './index.css'
import { MantineProvider } from '@mantine/core';
import Sanya from '../public/Sanya.jpg'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Recommendation } from './components/recommendation/recommendation.jsx';
import { Filters } from './components/Filters.jsx';
import { CardList } from './components/card/CardList.jsx';
import { FiltersFilm } from './components/FiltersFilm.jsx';
import { CardFilmsList } from './components/films-cards/FilmsCardsList.jsx';
import { TurquoiseAlbumPage } from './components/details-page/turquoise/TurquoiseAlbumPage.jsx';
import { RedAlbumPage } from './components/details-page/red/RedAlbumPage.jsx';
import { GreenAlbumPage } from './components/details-page/green/GreenAlbumPage.jsx';
import { TurquoiseMoviePage } from './components/details-page/turquoise/TurquoiseMoviePage.jsx'
import { RedMoviePage } from './components/details-page/red/RedMoviePage.jsx'
import { GreenMoviePage } from './components/details-page/green/GreenMoviePage.jsx'


function Films() {
  return (
    <>
      <FiltersFilm />
      <CardFilmsList />
    </>
  )
}

function Music() {
  return (
    <>
      <Filters />
      <CardList />
    </>
  )
}

function Games() {
  return (
    <div>Игры</div>
  )
}

function Arts() {
  return (
    <div>Живопись</div>
  )
}

function Literature() {
  return (
    <div>Литература</div>
  )
}

function Filmsw() {
  return (
    <div>Опапа</div>
  )

}

function Unknow() {
  return (
    <div style={{
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <img style={{
        width: '200px',
      }} src={Sanya} alt="" />
    </div>
  )
}

function Filmsd() {
  return (
    <div>Опапа ещё</div>
  )

}

const routers = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Recommendation />
      },
      {
        path: 'movie', element: <Films />,
      },
      {
        path: 'music', element: <Music />
      },
      {
        path: 'games', element: <Games />
      },
      {
        path: 'arts', element: <Arts />
      },
      {
        path: 'literature', element: <Literature />
      },
      {
        path: 'unknow', element: <Unknow />
      },
    ],
  },

  {
    path: 'turquoise/album/:id',
    element: <TurquoiseAlbumPage />
  },
  {
    path: 'red/album/:id',
    element: <RedAlbumPage />
  },
  {
    path: 'green/album/:id',
    element: <GreenAlbumPage />
  },
  {
    path: 'turquoise/movie/:id',
    element: <TurquoiseMoviePage />
  },
  {
    path: 'red/movie/:id',
    element: <RedMoviePage />
  },
  {
    path: 'green/movie/:id',
    element: <GreenMoviePage />
  },

]


export function AppRouters() {
  const router = createBrowserRouter(routers)
  return <RouterProvider router={router} />
}

createRoot(document.getElementById('root')).render(
  <>
    <MantineProvider>
      <StrictMode>
        <AppRouters />
      </StrictMode>
    </MantineProvider>
  </>
)

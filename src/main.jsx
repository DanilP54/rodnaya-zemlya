import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'semantic-ui-css/semantic.min.css'
import '@mantine/core/styles.css';
import 'react-h5-audio-player/lib/styles.css';
import 'video-react/dist/video-react.css';
import './index.css'
import { MantineProvider } from '@mantine/core';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Recommendation } from './components/recommendation/recommendation.jsx';
import { TurquoiseAlbumPage } from './components/pages/details/turquoise/TurquoiseAlbumPage.jsx'
import { TurquoiseMoviePage } from './components/pages/details/turquoise/TurquoiseMoviePage.jsx'
import { GreenMovie } from './components/pages/movie/GreenMovie.jsx'
import { RedMovie } from './components/pages/movie/RedMovie.jsx'
import { GreenMusic } from './components/pages/music/green/GreenMusic.jsx'
import { RedMusic } from './components/pages/music/red/RedMusic.jsx'
import { TurquoiseMovie } from './components/pages/movie/TurquoiseMovie.jsx'
import { TurquoiseMusic } from './components/pages/music/turquoise/TurquoiseMusic.jsx'
import { RedAlbumPage } from './components/pages/details/red/RedAlbumPage.jsx'
import { GreenAlbumPage } from './components/pages/details/green/GreenAlbumPage.jsx'
import { RedMoviePage } from './components/pages/details/red/RedMoviePage.jsx'
import { GreenMoviePage } from './components/pages/details/green/GreenMoviePage.jsx'




function Unknow() {
  return (
    <h1>Неизвестно</h1>
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
        path: 'turquoise-movie', element: <TurquoiseMovie />,
      },
      {
        path: 'turquoise-music', element: <TurquoiseMusic />,
      },
      {
        path: 'turquoise-games', element: <Unknow />
      },
      {
        path: 'turquoise-arts', element: <Unknow />
      },
      {
        path: 'turquoise-literature', element: <Unknow />
      },
      {
        path: 'red-games', element: <Unknow />
      },
      {
        path: 'red-arts', element: <Unknow />
      },
      {
        path: 'red-literature', element: <Unknow />
      },
      {
        path: 'green-games', element: <Unknow />
      },
      {
        path: 'green-arts', element: <Unknow />
      },
      {
        path: 'green-literature', element: <Unknow />
      },
      {
        path: 'green-movie', element: <GreenMovie />
      },
      {
        path: 'red-movie', element: <RedMovie />
      },
      {
        path: 'green-music', element: <GreenMusic />
      },
      {
        path: 'red-music', element: <RedMusic />
      }
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

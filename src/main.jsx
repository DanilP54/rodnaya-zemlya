import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'semantic-ui-css/semantic.min.css'
import '@mantine/core/styles.css';
import 'react-h5-audio-player/lib/styles.css';
import './player.css';
import 'video-react/dist/video-react.css';
import '@mantine/spotlight/styles.css';
import './custom.video.css';
import './index.css'
import { Skeleton, useMantineTheme } from '@mantine/core';
import { MantineProvider } from '@mantine/core';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Recommendation } from './components/recommendation/recommendation.jsx';

import { TurquoiseAlbumPage } from './components/pages/details/turquoise/TurquoiseAlbumPage.jsx'
import { TurquoiseMoviePage } from './components/pages/details/turquoise/TurquoiseMoviePage.jsx'

import { RedMoviePage } from './components/pages/details/red/RedMoviePage.jsx'
import { RedAlbumPage } from './components/pages/details/red/RedAlbumPage.jsx'
import { GreenMoviePage } from './components/pages/details/green/GreenMoviePage.jsx'
import { GreenAlbumPage } from './components/pages/details/green/GreenAlbumPage.jsx'

import RedMovie from './components/pages/movie/RedMovie.jsx'
import TurquoiseMovie from './components/pages/movie/TurquoiseMovie.jsx'
import GreenMovie from './components/pages/movie/GreenMovie.jsx'

import GreenMusic from './components/pages/music/green/GreenMusic.jsx'
import RedMusic from './components/pages/music/red/RedMusic.jsx'
import TurquoiseMusic from './components/pages/music/turquoise/TurquoiseMusic.jsx'

import GreenLiterature from './components/pages/literature/green/GreenLiterature.jsx'
import RedLiterature from './components/pages/literature/red/RedLiterature.jsx'
import TurquoiseLiterature from './components/pages/literature/turquoise/TurquoiseLiterature.jsx'

import { TurquoiseLiteraturePage } from "./components/pages/details/turquoise/TurquoiseLiteraturePage.jsx";
import { ReaderPage } from "./components/pages/literature/Reader.jsx";
import { RedLiteraturePage } from "./components/pages/details/red/RedLiteraturePage.jsx";
import { GreenLiteraturePage } from "./components/pages/details/green/GreenLiteraturePage.jsx";
import { PlayerProvider } from './context/PlayerProvider.jsx';
import { ThemeProvider, useThemeContext } from './context/ThemeContext.jsx';


function Unknow() {
    return (
        <h1>Неизвестно</h1>
    )
}

function SkeletonCard() {

    const { theme } = useThemeContext()



    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Skeleton height={'200px'} width={'232px'} />
            <Skeleton height={'28px'} width={'232px'} mt={'xs'} />
            <Skeleton height={8} mt={'xs'} width={'100px'} style={{
                alignSelf: 'flex-start'
            }} />

        </div>
    );
}

export const Loading = () => {
    return <div style={{
        display: 'flex',
        marginTop: '50px',
        marginLeft: '80px',
        padding: '0 68px 70px 99px'
    }}>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            gap: '10px',

        }}>
            {
                Array.from({ length: 12 }).map(skeletonCard => {
                    return (
                        <SkeletonCard />
                    )
                })
            }
        </div>
    </div>
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
                path: 'green-movie', element: <GreenMovie />
            },
            {
                path: 'red-movie', element: <RedMovie />
            },
            {
                path: 'turquoise-music', element: <TurquoiseMusic />
            },
            {
                path: 'green-music', element: <GreenMusic />
            },
            {
                path: 'red-music', element: <RedMusic />
            },
            {
                path: 'turquoise-literature', element: <TurquoiseLiterature />
            },
            {
                path: 'green-literature', element: <GreenLiterature />
            },
            {
                path: 'red-literature', element: <RedLiterature />
            },
            {
                path: 'turquoise-arts', element: <Unknow />
            },
            {
                path: 'red-arts', element: <Unknow />
            },
            {
                path: 'green-arts', element: <Unknow />
            },
        ],
    },

    {
        path: 'turquoise/album/:id',
        element: <TurquoiseAlbumPage />
    },
    {
        path: 'turquoise/literature/:id',
        element: <TurquoiseLiteraturePage />
    },
    {
        path: 'turquoise/literature/reader/:id',
        element: <ReaderPage color={'#00CED1'} href={`/turquoise/literature/${1}`} />
    },
    {
        path: 'red/album/:id',
        element:
            <RedAlbumPage />
    },
    {
        path: 'red/literature/:id',
        element: <RedLiteraturePage />
    },
    {
        path: 'red/literature/reader/:id',
        element: <ReaderPage color={'#CD5C5C'} href={`/red/literature/${1}`} />
    },
    {
        path: 'green/literature/:id',
        element: <GreenLiteraturePage />
    },
    {
        path: 'green/literature/reader/:id',
        element: <ReaderPage color={'#00FA9A'} href={`/green/literature/${1}`} />
    },
    {
        path: 'green/album/:id',
        element:
            <GreenAlbumPage />
    },
    {
        path: 'turquoise/movie/:id',
        element:
            <TurquoiseMoviePage />
    }
    ,
    {
        path: 'red/movie/:id',
        element:
            <RedMoviePage />
    },
    {
        path: 'green/movie/:id',
        element:
            <GreenMoviePage />
    }
    ,

]


export function AppRouters() {
    const router = createBrowserRouter(routers)
    return <RouterProvider router={router} />
}

createRoot(document.getElementById('root')).render(
    <>
        <MantineProvider>
            <StrictMode>
                <ThemeProvider>
                    <PlayerProvider>
                        <AppRouters />
                    </PlayerProvider>
                </ThemeProvider>
            </StrictMode>
        </MantineProvider>
    </>
)

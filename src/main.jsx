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
import { Skeleton } from '@mantine/core';
import { MantineProvider } from '@mantine/core';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Recommendation } from './components/recommendation/recommendation.jsx';

import { TurquoiseAlbumPage } from './components/pages/details/turquoise/TurquoiseAlbumPage.jsx'
import { TurquoiseMoviePage } from './components/pages/details/turquoise/TurquoiseMoviePage.jsx'

import { RedMoviePage } from './components/pages/details/red/RedMoviePage.jsx'
import { RedAlbumPage } from './components/pages/details/red/RedAlbumPage.jsx'
import { GreenMoviePage } from './components/pages/details/green/GreenMoviePage.jsx'
import { GreenAlbumPage } from './components/pages/details/green/GreenAlbumPage.jsx'

const RedMovie = lazy(() => import('./components/pages/movie/RedMovie.jsx'))
const TurquoiseMovie = lazy(() => import('./components/pages/movie/TurquoiseMovie.jsx'))
const GreenMovie = lazy(() => import('./components/pages/movie/GreenMovie.jsx'))

const GreenMusic = lazy(() => import('./components/pages/music/green/GreenMusic.jsx'))
const RedMusic = lazy(() => import('./components/pages/music/red/RedMusic.jsx'))
const TurquoiseMusic = lazy(() => import('./components/pages/music/turquoise/TurquoiseMusic.jsx'))

const GreenLiterature = lazy(() => import('./components/pages/literature/green/GreenLiterature.jsx'))
const RedLiterature = lazy(() => import('./components/pages/literature/red/RedLiterature.jsx'))
const TurquoiseLiterature = lazy(() => import('./components/pages/literature/turquoise/TurquoiseLiterature.jsx'))

import { TurquoiseLiteraturePage } from "./components/pages/details/turquoise/TurquoiseLiteraturePage.jsx";
import { ReaderPage } from "./components/pages/literature/Reader.jsx";
import { RedLiteraturePage } from "./components/pages/details/red/RedLiteraturePage.jsx";
import { GreenLiteraturePage } from "./components/pages/details/green/GreenLiteraturePage.jsx";
import { PlayerProvider } from './context/PlayerProvider.jsx';


function Unknow() {
    return (
        <h1>Неизвестно</h1>
    )
}

function SkeletonCard() {
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

const Loading = () => {
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
                path: 'turquoise-movie', element: <Suspense fallback={<Loading />}><TurquoiseMovie /></Suspense>,
            },
            {
                path: 'green-movie', element: <Suspense fallback={<Loading />}><GreenMovie /></Suspense>
            },
            {
                path: 'red-movie', element: <Suspense fallback={<Loading />}><RedMovie /></Suspense>
            },
            {
                path: 'turquoise-music', element: <Suspense fallback={<Loading />}><TurquoiseMusic /></Suspense>,
            },
            {
                path: 'green-music', element: <Suspense fallback={<Loading />}><GreenMusic /></Suspense>
            },
            {
                path: 'red-music', element: <Suspense fallback={<Loading />}><RedMusic /></Suspense>
            },
            {
                path: 'turquoise-literature', element: <Suspense fallback={<Loading />}><TurquoiseLiterature /></Suspense>
            },
            {
                path: 'green-literature', element: <Suspense fallback={<Loading />}><GreenLiterature /></Suspense>
            },
            {
                path: 'red-literature', element: <Suspense fallback={<Loading />}><RedLiterature /></Suspense>
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
                <PlayerProvider>
                    <AppRouters />
                </PlayerProvider>
            </StrictMode>
        </MantineProvider>
    </>
)

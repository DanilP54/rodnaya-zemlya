import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'



import 'semantic-ui-css/semantic.min.css'
import '@mantine/core/styles.css';
import 'react-h5-audio-player/lib/styles.css';
import './player.css';
import 'video-react/dist/video-react.css';
import '@mantine/spotlight/styles.css';
import '@mantine/carousel/styles.css';
import './custom.video.css';
import './index.css'
import { Loader, Skeleton, useMantineTheme } from '@mantine/core';
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
import StartPage from "./startPage.jsx";
import TurquoiseArt from './components/pages/arts/TurquoiseArt.jsx';
import ArtSection from './components/pages/ArtSection.jsx';
import ArtDetailsSection from './components/pages/ArtDetails.jsx';
import { imagesOne } from './data/imageOne.js';
import { imagesTwo } from './data/imageTwo.js';
import { imagesThree } from './data/imageThree.js';
import RedArt from './components/pages/arts/RedArt.jsx';
import GreenArt from './components/pages/arts/GreenArt.jsx';
import ArtPage from './components/pages/details/turquoise/ArtPage.jsx';


const RootNews = lazy(() => import('./components/pages/news/RootNews.jsx'))

const App = lazy(() => import('./App.jsx'))

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
            backgroundColor: 'transparent'
        }}>
            <Skeleton className={`${theme === 'light' ? '' : 'custom__skeleton'}`} height={'200px'} width={'232px'} />
            <Skeleton className={`${theme === 'light' ? '' : 'custom__skeleton'}`} height={'28px'} width={'232px'}
                mt={'xs'} />
            <Skeleton className={`${theme === 'light' ? '' : 'custom__skeleton'}`} height={8} mt={'xs'} width={'100px'}
                style={{
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
                Array.from({ length: 12 }).map((skeletonCard, index) => {
                    return (
                        <SkeletonCard key={index} />
                    )
                })
            }
        </div>
    </div>
}

const routers = [
    {
        path: '/',
        element: <StartPage />,
    },
    {
        path: '/app',
        element: <Suspense fallback={<div style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}><Loader size={'xl'} color='gray' /></div>}><App /></Suspense>,
        children: [
            {
                index: true,
                element: <Recommendation />
            },

            // TURQUOISE MOVIE -------------------------------
            {
                path: 'turquoise-movie', element: <TurquoiseMovie />,
            },
            {
                path: 'turquoise/m/:id',
                element: <TurquoiseMoviePage />
            },

            // GREEN MOVIE -------------------------------

            {
                path: 'green-movie', element: <GreenMovie />
            },
            {
                path: 'green/m/:id',
                element: <GreenMoviePage />
            },

            // RED MOVIE -------------------------------

            {
                path: 'red-movie', element: <RedMovie />
            },
            {
                path: 'red/m/:id',
                element: <RedMoviePage />
            },

            // TURQUOISE MUSIC -------------------------------

            {
                path: 'turquoise-music', element: <TurquoiseMusic />
            },
            {
                path: 'turquoise/a/:id',
                element: <TurquoiseAlbumPage />
            },

            // GREEN MUSIC -------------------------------

            {
                path: 'green-music', element: <GreenMusic />
            },
            {
                path: 'green/a/:id',
                element: <GreenAlbumPage />
            },

            // RED MUSIC -------------------------------

            {
                path: 'red-music', element: <RedMusic />
            },
            {
                path: 'red/a/:id',
                element: <RedAlbumPage />
            },


            // TURQUOISE LITERATURE -------------------------------

            {
                path: 'turquoise-literature', element: <TurquoiseLiterature />
            },
            {
                path: 'turquoise/l/:id',
                element: <TurquoiseLiteraturePage />,
            },
            {
                path: 'turquoise/l/:id/r/:id',
                element: <ReaderPage color={'#00CED1'} href={`/app/turquoise/l/1`} />
            },

            // GREEN LITERATURE -------------------------------


            {
                path: 'green-literature', element: <GreenLiterature />
            },
            {
                path: 'green/l/:id',
                element: <GreenLiteraturePage />
            },
            {
                path: 'green/l/:id/r/:id',
                element: <ReaderPage color={'#00FA9A'} href={`/app/green/l/1`} />
            },

            // RED LITERATURE -------------------------------

            {
                path: 'red-literature', element: <RedLiterature />
            },
            {
                path: 'red/l/:id',
                element: <RedLiteraturePage />
            },
            {
                path: 'red/l/:id/r/:id',
                element: <ReaderPage color={'#CD5C5C'} href={`/app/red/l/1`} />
            },



            // TURQUOISE ART -------------------------------


            {
                path: 'turquoise-art', element: <TurquoiseArt />
            },
            {
                path: 'turquoise/art/:id', element: <ArtPage color={'#00CED1'} category={'turquoise'} />,
                children: [
                    {
                        index: true,
                        element: <ArtSection category={'turquoise'} />
                    },
                    {
                        path: 'details/henrietta-moraes',
                        element: <ArtDetailsSection author={'Камиль Фурнье'} title={'Henrietta Moraes'} count={'8'} data={imagesOne} />
                    },
                    {
                        path: 'details/merchandise',
                        element: <ArtDetailsSection author={'Камиль Фурнье'} title={'Merchandise'} count={'15'} data={imagesTwo} />
                    },
                    {
                        path: 'details/design',
                        element: <ArtDetailsSection author={'Камиль Фурнье'} title={'Design'} count={'5'} data={imagesThree} />
                    }

                ]
            },



            // RED ART --------------------------------

            {
                path: 'red-art', element: <RedArt />
            },
            {
                path: 'red/art/:id', element: <ArtPage color={'#CD5C5C'} category={'red'} />,
                children: [
                    {
                        index: true,
                        element: <ArtSection category={'red'} />
                    },
                    {
                        path: 'details/henrietta-moraes',
                        element: <ArtDetailsSection author={'Камиль Фурнье'} title={'Henrietta Moraes'} count={'8'} data={imagesOne} />
                    },
                    {
                        path: 'details/merchandise',
                        element: <ArtDetailsSection author={'Камиль Фурнье'} title={'Merchandise'} count={'15'} data={imagesTwo} />
                    },
                    {
                        path: 'details/design',
                        element: <ArtDetailsSection author={'Камиль Фурнье'} title={'Design'} count={'5'} data={imagesThree} />
                    }

                ]
            },



            // GREEN ART -------------------------------


            {
                path: 'green-art', element: <GreenArt />
            },
            {
                path: 'green/art/:id', element: <ArtPage color={'#00FA9A'} category={'green'} />,
                children: [
                    {
                        index: true,
                        element: <ArtSection category={'green'} />
                    },
                    {
                        path: 'details/henrietta-moraes',
                        element: <ArtDetailsSection author={'Камиль Фурнье'} title={'Henrietta Moraes'} count={'8'} data={imagesOne} />
                    },
                    {
                        path: 'details/merchandise',
                        element: <ArtDetailsSection author={'Камиль Фурнье'} title={'Merchandise'} count={'15'} data={imagesTwo} />
                    },
                    {
                        path: 'details/design',
                        element: <ArtDetailsSection author={'Камиль Фурнье'} title={'Design'} count={'5'} data={imagesThree} />
                    }

                ]
            },
        ]
    },

    {
        path: '/news',
        element: <Suspense fallback={<div style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}><Loader size={'xl'} color='gray' /></div>}><RootNews /></Suspense>
    }
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

import { Spotlight, spotlight } from '@mantine/spotlight';
import style from './header.module.css';
import { useThemeContext } from '../../context/ThemeContext';
import { movieList } from '../pages/movie/RedMovie';
import { Image } from '@mantine/core';
import { redMusic } from '../pages/music/red/RedMusic';
import { booksList } from '../pages/literature/red/RedLiterature';
import { redArt } from '../pages/arts/RedArt';




function IconSearch({ color }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill='none' stroke={color} stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
}



export const actions = [
    {  
      id: 'movie red',
      label: movieList[1].nameRu,
      description: movieList[1].title,
      onClick: () => console.log(1),
      leftSection: <Image  w={100} h={100} src={movieList[1].src} />,
    },
    {
      id: 'music red',
      label: redMusic[0].title,
      description: `artist: ${redMusic[0].artist}, band: ${redMusic[0].band}`,
      onClick: () => console.log('Dashboard'),
      leftSection: <Image w={100} h={100} src={redMusic[0].src} />,
    },
    {
      id: 'book',
      label: booksList[0].nameRu,
      description: `author: ${booksList[0].title}, genre: ${booksList[0].genre}`,
      onClick: () => console.log('Documentation'),
      leftSection: <Image w={100} h={100} src={booksList[0].src} />
    },
    {
        id: 'art',
        label: redArt[0].nameRu,
        description: `art`,
        onClick: () => console.log('Documentation'),
        leftSection: <Image w={100} h={100} src={redArt[0].image} />
      },
  ];


export default function SearchInput({ width }) {

    const { theme } = useThemeContext()


    return (
        <>
            <div className={style.input_box}>
                <button
                    onClick={spotlight.open}
                    style={{
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        border: theme === 'light' ? '1px solid rgb(211, 205, 205)' : '1px solid white',
                        backgroundColor: 'transparent',
                        outline: 'none',
                        borderRadius: '4px',
                        gap: '20px',
                        padding: '10px 15px',
                        color: 'gray',
                        width: width ?? '300px',
                        height: '37px',

                    }}>
                    <span style={{
                        color: theme === 'light' ? 'gray' : 'white',
                        fontSize: '14px',
                        fontWeight: '400',
                    }}>Поиск</span>
                    <div style={{
                        marginLeft: 'auto',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <IconSearch color={theme === 'light' ? 'gray' : 'white'} />
                    </div>
                </button>
                <Spotlight
                    limit={5}
                    actions={actions}
                    nothingFound="К сожалению, ничего не найдено"
                    highlightQuery
                    searchProps={{
                        leftSection: <IconSearch color={theme === 'light' ? 'black' : 'white'} />,
                        placeholder: 'Поиск',
                    }}
                />
            </div>
        </>
    )
}
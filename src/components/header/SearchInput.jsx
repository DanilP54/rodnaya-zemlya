import { Spotlight, spotlight } from '@mantine/spotlight';
import style from './header.module.css';
import { useThemeContext } from '../../context/ThemeContext';

function IconSearch({ color }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill='none' stroke={color} stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
}


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
                    // limit={2}
                    actions={[]}
                    nothingFound="Nothing found..."
                    highlightQuery
                    searchProps={{
                        leftSection: <IconSearch />,
                        placeholder: 'Search...',
                    }}
                    styles={{
                        backgroundColor: 'black'
                    }}
                />
            </div>
        </>
    )
}
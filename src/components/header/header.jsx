import style from './header.module.css';
import LogoImage from '../../../public/logo.png';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mantine/core';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { Kbd } from '@mantine/core';

function IconSearch() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
}

function ThemeButton() {
    return (
        <>
            <Tooltip label="dark theme">
                <div style={{
                    width: '10px',
                    aspectRatio: 1,
                    backgroundColor: 'black',
                    cursor: 'pointer'
                }}></div>
            </Tooltip>
        </>
    )
}

const actions = [
    {
        id: 'movie',
        label: 'Фильмы',
        //   description: 'Get to home page',
        onClick: () => console.log('Home'),
        //   leftSection: <IconHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
    },
    {
        id: 'music',
        label: 'Музыка',
        //   description: 'Get full information about current system status',
        onClick: () => console.log('Dashboard'),
        //   leftSection: <IconDashboard style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
    },
    {
        id: 'lit',
        label: 'Литература',
        //   description: 'Visit documentation to lean more about all features',
        onClick: () => console.log('Documentation'),
        //   leftSection: <IconFileText style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
    },
];


export function Header() {
    return (
        <div className={style.header_wrapper}>
            <header className={style.header}>
                <div>
                    <Link to='#'>
                        <img src={LogoImage} alt="" className={style.logo} />
                    </Link>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4rem',
                    height: 'min-content'
                }}>
                    <ThemeButton />
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                    }}>
                        <ul className={style.lang_list}>
                            <li className={style.list_item}>
                                <a href="#" className={style.lang_link}>eng</a>
                            </li>
                            <li className={style.list_item}>
                                <a href="#" className={style.lang_link}>ro</a>
                            </li>
                            <li className={style.list_item}>
                                <a href="#" className={style.lang_link}>ru</a>
                            </li>
                            <li className={style.list_item}>
                                <a href="#" className={style.lang_link}>ua</a>
                            </li>
                        </ul>
                    </div>

                    <div className={style.input_box}>
                        <button

                            onClick={spotlight.open}
                            style={{
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                border: '1px solid rgb(211, 205, 205)',
                                backgroundColor: 'transparent',
                                outline: 'none',
                                borderRadius: '4px',
                                gap: '20px',
                                padding: '10px',
                                color: 'gray',
                                width: '300px',
                                height: '37px',

                            }}>
                            <IconSearch />
                            <span style={{
                                fontSize: '15px',
                            }}>Search</span>
                            <div style={{
                                marginLeft: 'auto'
                            }}>
                                <Kbd style={{
                                    padding: '3px',
                                    backgroundColor: 'transparent',
                                    color: 'rgb(33, 32, 32)',
                                    fontSize: '10px',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                    // height: '90%',
                                }} size='xs'>Ctrl + K</Kbd>
                            </div>
                        </button>
                        {/* <Input fluid onClick={spotlight.open} icon='search' placeholder='Search for artist, album or track' /> */}
                        <Spotlight
                            actions={actions}
                            nothingFound="Nothing found..."
                            highlightQuery
                            searchProps={{
                                leftSection: <IconSearch />,
                                placeholder: 'Search...',
                            }}
                        />
                    </div>

                    <div className={style.auth_box}>
                        <div>
                            <a href='#' className={style.auth_link}>Log In</a>
                        </div>
                        <div>
                            <a href='#' className={style.auth_link}>Sign Up</a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
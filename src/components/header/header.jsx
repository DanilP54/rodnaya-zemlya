import style from './header.module.css';
import WhiteLogo from '../../../public/logo/rz_white.png';
import BlackLogo from '../../../public/logo/rz_black_cut.png';

import { Link, useNavigate } from 'react-router-dom';
import { Tooltip } from '@mantine/core';
import { Spotlight, spotlight } from '@mantine/spotlight';
import image from '../../../public/voloka-list.png'
import { useThemeContext } from '../../context/ThemeContext';
import { useEffect } from 'react';

function IconSearch({ color }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill='none' stroke={color} stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
}

export function ThemeButton() {

    const { theme, setTheme } = useThemeContext()

    const changeTheme = () => {
        return theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    useEffect(() => {
        const body = document.body

        if (theme === 'light') {
            body.classList.remove('dark__theme')
            body.classList.add('light__theme')
        } else {
            body.classList.remove('light__theme')
            body.classList.add('dark__theme')
        }

    }, [theme])

    return (
        <>
            <Tooltip label={`${theme === 'dark' ? 'light' : 'dark'} theme`}>
                <div onClick={changeTheme} style={{
                    width: '10px',
                    aspectRatio: 1,
                    backgroundColor: theme === 'dark' ? 'white' : 'black',
                    cursor: 'pointer'
                }}></div>
            </Tooltip>
        </>
    )
}




export function Header() {

    const navigate = useNavigate();

    const { theme } = useThemeContext()

    

    return (
        <div className={style.header_wrapper}>
            <header className={style.header}>
                <div>
                    <Link to='#'>
                        <img src={theme === 'light' ? BlackLogo : WhiteLogo} alt="logo" className={style.logo} />
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
                                border: theme === 'light' ? '1px solid rgb(211, 205, 205)' : '1px solid white',
                                backgroundColor: 'transparent',
                                outline: 'none',
                                borderRadius: '4px',
                                gap: '20px',
                                padding: '10px 15px',
                                color: 'gray',
                                width: '300px',
                                height: '37px',

                            }}>
                            <span style={{
                                color: theme === 'light' ? 'gray' : 'white',
                                fontSize: '14px',
                                fontWeight: '400',
                            }}>Search</span>
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
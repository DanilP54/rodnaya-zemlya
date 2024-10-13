import style from './header.module.css';
import WhiteLogo from '../../../public/logo/rz_white.png';
import BlackLogo from '../../../public/logo/rz_black_cut.png';

import { Link, useNavigate } from 'react-router-dom';
import { Tooltip } from '@mantine/core';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { useThemeContext } from '../../context/ThemeContext';
import { useEffect } from 'react';
import SearchInput from './SearchInput';
import AuthButtons from './AuthButtons';


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
                    <Link to='/'>
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

                    <SearchInput  />

                    <AuthButtons />

                </div>
                {/* </div> */}
            </header >
        </div >
    )
}
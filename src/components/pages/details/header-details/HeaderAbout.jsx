import style from './header.module.css'
import { Link } from 'react-router-dom'

import WhiteLogo from '../../../../../public/logo/rz_white.png'
import BlackLogo from '../../../../../public/logo/rz_black_cut.png'
import { useThemeContext } from '../../../../context/ThemeContext';
import { Spotlight, spotlight } from '@mantine/spotlight';
import image from '../../../../../public/voloka-list.png'
import { ThemeButton } from '../../../header/header';



function IconSearch({ color }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill='none' stroke={color} stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
}
export function HeaderDetails({ color }) {

    const { theme } = useThemeContext()







    return (
        <div style={{
            backgroundColor: color
        }} className={style.header_wrapper}>
            <header className={style.header}>
                <div>
                    <Link style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} to='#'>
                        <img src={WhiteLogo} alt="" className={style.logo} />
                    </Link>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '50px'
                }}>
                    <ThemeButton />
                    <div>
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
                                backgroundColor: 'white',
                                outline: 'none',
                                borderRadius: '4px',
                                gap: '20px',
                                padding: '10px 15px',
                                color: 'gray',
                                width: '300px',
                                height: '37px',

                            }}>
                            <span style={{
                                color: 'gray',
                                fontSize: '14px',
                                fontWeight: '400',
                            }}>Search</span>
                            <div style={{
                                marginLeft: 'auto',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <IconSearch color={'gray'} />
                            </div>
                        </button>
                        <Spotlight


                            actions={[]}
                            nothingFound="Nothing found..."
                            highlightQuery
                            searchProps={{
                                leftSection: <IconSearch />,
                                placeholder: 'Search...',
                            }}
                            style={{
                                backgroundColor: 'black'
                            }}
                        />
                    </div>
                </div>
            </header>
        </div>
    )
}
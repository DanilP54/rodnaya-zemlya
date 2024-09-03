import style from './header.module.css';
import LogoImage from '../../../public/logo.png';
import { Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export function Header() {
    return (
        <div className={style.header_wrapper}>
            <header className={style.header}>
                <div>
                    <Link to='#'>
                        <img src={LogoImage} alt="" className={style.logo}/>
                    </Link>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4rem',
                    height: 'min-content' 
                }}>
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
                        <Input fluid icon='search' placeholder='Search for artist, album or track' />
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
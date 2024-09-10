import style from './header.module.css'
import { Link } from 'react-router-dom'
import { Input } from 'semantic-ui-react';
import LogoImage from '../../../../../public/logo.png';

export function HeaderDetails({ color }) {
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
                        <img src={LogoImage} alt="" className={style.logo} />
                    </Link>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '50px'
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
                        <Input size='small' style={{
                            width: '250px'
                        }} icon='search' placeholder='Search for artist, album or track' />
                    </div>
                </div>
            </header>
        </div>
    )
}
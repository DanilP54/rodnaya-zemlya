import { useThemeContext } from '../../context/ThemeContext';
import style from './header.module.css';

export default function AuthButtons({radio}) {
    const {theme} = useThemeContext()
    return (
        <>
            <div className={style.auth_box}>
                <div style={{
                    color: radio ? 'black' : 'inherit'
                }} className={style.auth_item}>
                    <a href='#'           
                    className={style.auth_link}>Log In</a>
                </div>
                <div  style={{
                    color: radio ? 'black' : 'inherit'
                }}  className={style.auth_item}>
                    <a href='#' className={style.auth_link}>Sign Up</a>
                </div>
            </div>
        </>
    )
}
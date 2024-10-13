import style from './header.module.css';

export default function AuthButtons() {
    return (
        <>
            <div className={style.auth_box}>
                <div>
                    <a href='#' className={style.auth_link}>Log In</a>
                </div>
                <div>
                    <a href='#' className={style.auth_link}>Sign Up</a>
                </div>
            </div>
        </>
    )
}
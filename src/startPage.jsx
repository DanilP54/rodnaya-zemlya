import { ThemeButton } from "./components/header/header.jsx";
import WhiteLogo from '../public/logo/rz_white.png'
import BlackLogo from '../public/logo/rz_black_cut.png'
import { useThemeContext } from "./context/ThemeContext.jsx";
import { Link } from "react-router-dom";

export default function StartPage() {


    const { theme } = useThemeContext()
    return (
        <>
            {/*<div>*/}
            <header style={{
                position: 'absolute',
                width: '100%',
                // height: '40px',
                padding: '20px 0 0 50px'
            }}>
                <ThemeButton />
            </header>
            <main style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '50px',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div>
                        <img style={{
                            width: '300px',
                            aspectRatio: 1
                        }} src={theme === 'light' ? BlackLogo : WhiteLogo} alt="logo" />
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    // marginLeft: '50px',
                    gap: '140px',
                    fontSize: '20px',
                    color: 'white'
                }}>
                    <div style={{
                        width: '120px',
                        textAlign: 'center'
                    }}>
                        <Link style={{
                            fontWeight: 'bold',
                            color: theme === 'light' ? 'black' : 'white',
                            // marginRight: '100px',
                        }} to={'/news'}>лента</Link>
                    </div>
                    <div style={{
                        width: '120px',
                        textAlign: 'center'
                    }}>
                        <Link style={{
                            // marginLeft: '60px',
                            fontWeight: 'bold',
                            color: theme === 'light' ? 'black' : 'white'
                        }} to={'/app'}>рз</Link>
                    </div>
                    <div style={{
                        width: '120px',
                        textAlign: 'center'
                    }}>
                        <Link style={{
                            fontWeight: 'bold',
                            color: theme === 'light' ? 'black' : 'white',
                        }} to={'#'}>рз радио</Link>
                    </div>
                </div>
                
            </main>
            {/*</div>*/}
        </>
    )
}
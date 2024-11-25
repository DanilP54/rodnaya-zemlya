import { Link } from "react-router-dom"
import { useThemeContext } from "../../../context/ThemeContext"

import WhiteLogo from '../../../../public/logo/rz_white.png'
import BlackLogo from '../../../../public/logo/rz_black_cut.png'
import { ThemeButton } from "../../header/header"

function WebSiteIcon({ color }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-gantt"><path d="M8 6h10"/><path d="M6 12h9"/><path d="M11 18h7"/></svg>
}
function TvIcon({ color }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-radio"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg>
}



export function MenuNews() {

    const { theme } = useThemeContext()



    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
        }}>
            <div style={{
                display: 'flex',

            }}>
            <Link to='/'>
                <img style={{
                    width: '100px',
                    aspectRatio: 1
                }} src={theme === 'light' ? BlackLogo : WhiteLogo} alt="logo" />
            </Link>
            <div style={{
                marginLeft: '200px'
            }}>
            <ThemeButton />
            </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <Link style={{
                    color: 'black'
                }} to='/app'>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                        <WebSiteIcon color={theme === 'light' ? 'black' : 'white'} />
                        <span style={{
                            color: theme === 'light' ? 'black' : 'white',
                            fontSize: '18px'
                        }}>рз</span>
                    </div>
                </Link>
                <Link style={{
                    color: theme === 'light' ? 'black' : 'white',
                    // backgroundColor: 'rgba(0,0,0, .1)'
                }} to='#'>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                        <TvIcon color={theme === 'light' ? 'black' : 'white'} />
                        <span style={{
                            color: theme === 'light' ? 'black' : 'white',
                            fontSize: '18px'
                        }}>рз радио</span>
                    </div>
                </Link>
            </div>

        </div>
    )
}
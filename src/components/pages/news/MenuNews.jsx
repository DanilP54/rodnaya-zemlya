import { Link } from "react-router-dom"
import { useThemeContext } from "../../../context/ThemeContext"

import WhiteLogo from '../../../../public/logo/rz_white.png'
import BlackLogo from '../../../../public/logo/rz_black_cut.png'

function WebSiteIcon({ color }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-align-box-left-top"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M9 13h-2" /><path d="M13 10h-6" /><path d="M11 7h-4" /></svg>
}


function TvIcon({ color }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-tv-old"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M16 3l-4 4l-4 -4" /><path d="M15 7v13" /><path d="M18 15v.01" /><path d="M18 12v.01" /></svg>
}



export function MenuNews() {

    const { theme } = useThemeContext()



    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
        }}>
            <Link to='/'>
                <img style={{
                    width: '100px',
                    aspectRatio: 1
                }} src={theme === 'light' ? BlackLogo : WhiteLogo} alt="logo" />
            </Link>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
            }}>
                <Link style={{
                    color: 'black'
                }} to='/app'>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                        <WebSiteIcon color={'white'} />
                        <span style={{
                            color: 'white',
                            fontSize: '18px'
                        }}>рз</span>
                    </div>
                </Link>
                <Link style={{
                    color: 'black',
                    // backgroundColor: 'rgba(0,0,0, .1)'
                }} to='#'>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                        <TvIcon color={'white'} />
                        <span style={{
                            color: 'white',
                            fontSize: '18px'
                        }}>трансляция</span>
                    </div>
                </Link>
            </div>

        </div>
    )
}
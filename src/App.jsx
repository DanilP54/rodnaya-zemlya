import { Outlet } from 'react-router-dom';
import './App.css'
import { Header } from './components/header/header'
import { NavigationMenu } from './components/navigation-menu/NavigationMenu';
// import { NavigationBox } from './components/navigation/navigation'
import { Recommendation } from './components/recommendation/recommendation'
import AudioPlayer from 'react-h5-audio-player';
import ReactPlayer from 'react-player'
import { ScrollRestoration } from 'react-router-dom';


function App() {

  return (
    <>
      <div>
        <Header />
        <NavigationMenu />
      </div>
      <Outlet />
    </>
  )
}

export default App

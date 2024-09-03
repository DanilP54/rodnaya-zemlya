import { Outlet } from 'react-router-dom';
import './App.css'
import { Header } from './components/header/header'
import { NavigationMenu } from './components/navigation-menu/NavigationMenu';
// import { NavigationBox } from './components/navigation/navigation'
import { Recommendation } from './components/recommendation/recommendation'
import AudioPlayer from 'react-h5-audio-player';
import ReactPlayer from 'react-player'



function App() {


  return (
    <>
      <div style={{
        // height: '40svh'
      }}>
        <Header />
        <NavigationMenu />
        {/* <NavigationBox /> */}
      </div>
      <Outlet />
      {/* <div>
        <AudioPlayer

          style={{
            position: 'fixed',
            bottom: 0,
            zIndex: 999,

          }}
          autoPlay
          src="http://example.com/audio.mp3"
          onPlay={e => console.log("onPlay")}
        // other props here
        />
      </div> */}
      <div>
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' /> */}
      </div>
    </>
  )
}

export default App

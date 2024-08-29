import './App.css'
import { Header } from './components/header/header'
import { NavigationBox } from './components/navigation/navigation'
import { Recommendation } from './components/recommendation/recommendation'
import AudioPlayer from 'react-h5-audio-player';
import ReactPlayer from 'react-player'

function App() {


  return (
    <>
      <div style={{
        height: '40svh'
      }}>
        <Header />
        <NavigationBox />
      </div>
      <div style={{
        height: 'calc(100vh - 42vh)',
        padding: '0 0 0',
        // width: '800px',
        backgroundColor: 'black'
      }}>
        <Recommendation />
      </div>
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

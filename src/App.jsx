import './App.css'
import { Header } from './components/header/header'
import { NavigationBox } from './components/navigation/navigation'
import { Recommendation } from './components/recommendation/recommendation'


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
        height: 'calc(100vh - 40vh)',
      }}>
        <Recommendation />
      </div>
    </>
  )
}

export default App

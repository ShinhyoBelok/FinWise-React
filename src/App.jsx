import './App.css'
import Mainpage from './pages/Mainpage'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='appDiv flexbox'>
      <Navbar />
      <Mainpage />
    </div>
  )
}

export default App

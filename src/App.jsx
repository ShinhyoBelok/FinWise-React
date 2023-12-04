import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register';
import AddCategory from './pages/AddCategory';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div id='appContainer'>
      <div className='flexbox' id='appDiv'>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/addCategory" element={<AddCategory />} />
        </Routes>
      </div>
      <footer>
        <div>ALL RIGHT RESERVED  |</div>
        <div>|  © <a href="https://github.com/ShinhyoBelok" target='_blank'>Shinhyo BO  |</a></div>
        <div>|  FinWise</div>
      </footer>
    </div>
  )
}

export default App

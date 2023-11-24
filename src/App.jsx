import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='flexbox' id='appDiv'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard/>} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App

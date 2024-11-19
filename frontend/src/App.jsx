import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './Pages/Welcome'
import NavBar from './Pages/NavBar';
import CategoryGood from './Pages/CategoryGoods';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {

  return (
    <div>
    <NavBar />
    <CategoryGood />  
    <Router>
      <Routes>
        <Route path='/' element={ <Welcome /> } />
      </Routes>
    </Router>
    </div>
  )
}

export default App

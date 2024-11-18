import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './Pages/Welcome'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Welcome /> } />
      </Routes>
    </Router>
  )
}

export default App

import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import NavBar from "./components/NavBar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <Router>
      <div className="w-full">
        <NavBar />
        <div className="w-full min-h-screen h-full">
          <Routes>
            <Route path="/" element={<Welcome />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

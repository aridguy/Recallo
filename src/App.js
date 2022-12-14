// import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />
          <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>

    </div >
  );
}

export default App;

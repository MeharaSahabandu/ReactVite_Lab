
import "./App.css";
import Greeting from "./components/Greeting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/greeting" element={<><Greeting /><Footer/></>}/>
          <Route path="/about" element={<><About/><Footer/></>}/>
          <Route path="/" element={<><Navbar/><Home/><Footer/></>}/>
        </Routes>
      </div>
    </Router>
  );
}


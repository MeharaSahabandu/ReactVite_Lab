
import "./App.css";
import Greeting from "./components/Greeting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

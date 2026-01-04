import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <NoteState>
      {/* 🔥 IMPORTANT FIX */}
      <Router basename="/inotebook">
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            {/* 🔥 case fix */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home showAlert={showAlert} />} />
            <Route path="/signup" element={<Signup showAlert={showAlert} />} />
            <Route path="/login" element={<Login showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;

import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./assets/pages/Homepage/Homepage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/login" element={} />
        <Route path="/signup" element={} />
        <Route path="/profile" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

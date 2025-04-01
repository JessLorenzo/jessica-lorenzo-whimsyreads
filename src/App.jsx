import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignupPage from "./pages/Signup Page/SignupPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/bookclub/:id" element={< />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

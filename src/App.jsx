import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignupPage from "./pages/Signup Page/SignupPage.jsx";
import CreateProfile from "./pages/CreateProfile/CreateProfile.jsx";
import BookClubProfile from "./pages/BookClubProfile/BookClubProfile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/createprofile/:bookClubId" element={<CreateProfile />} />
        <Route
          path="/bookclub-profile/:bookClubId"
          element={<BookClubProfile />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

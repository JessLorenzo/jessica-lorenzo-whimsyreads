import "./LoginPage.scss";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/api/users/login`, {
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem("userId", res.data.userId);

      const bookClubId = res.data.bookClubId;

      if (bookClubId) {
        navigate(`/bookclub-profile/${bookClubId}`);
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error("Login failed", err);
    }
  };
  return (
    <div className="login-page">
      <Navbar />
      <LoginForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleLogin}
        isSignup={false}
      />
      <Footer />
    </div>
  );
}

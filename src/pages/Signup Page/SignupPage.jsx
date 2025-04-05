import "./SignupPage.scss";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/api/users/signup`, formData);
      const userId = res.data.userId;
      const bookClubId = res.data.bookClubId;
      localStorage.setItem("userId", userId);
      navigate(`/createprofile/${bookClubId}`);
    } catch (err) {
      console.error("Signup failed", err);
    }
  };
  return (
    <div className="signup-page">
      <Navbar />
      <LoginForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSignup}
        isSignup={true}
      />
      <Footer />
    </div>
  );
}

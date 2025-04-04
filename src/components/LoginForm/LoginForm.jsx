import "./LoginForm.scss";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Button from "../Button/Button.jsx";

const baseUrl = import.meta.env.VITE_API_URL;

export default function LoginForm() {
  const location = useLocation();
  const isLoginpage = location.pathname.toLowerCase() === "/login";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (isLoginpage) {
      try {
        const res = await axios.post(`${baseUrl}/api/users/login`, {
          email: formData.email,
          password: formData.password,
        });
        setMessage("Login successful!");
        navigate("/bookclub-profile");
      } catch (err) {
        console.error("Login error:", err);
        setMessage(
          err.response?.data?.message || "Login failed. Please try again."
        );
      }
    } else {
      try {
        const res = await axios.post(`${baseUrl}/api/users/signup`, formData);
        const userId = res.data.user_id;
        localStorage.setItem("userId", userId);
        console.log("Saved user ID to localStorage:", userId);
        setMessage("Signup successful!");
        navigate("/editprofile");
      } catch (err) {
        console.error("Signup error:", err);
        setMessage(
          err.response?.data?.message ||
            "Something went wrong. Please try again."
        );
      }
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-form__title">
        {isLoginpage ? "Welcome Back!" : "Create your account"}
      </h2>

      {!isLoginpage && (
        <>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />

          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </>
      )}

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <div className="login-form__button">
        <Button type="submit">{isLoginpage ? "Log In" : "Sign Up"}</Button>
      </div>
      <div className="login-form__signup">
        <p>
          {isLoginpage ? "Don't have an account?" : "Already have an account?"}
        </p>
        <Link
          to={isLoginpage ? "/signup" : "/login"}
          className="login-form__link"
        >
          {isLoginpage ? "Sign up" : "Login"}
        </Link>
      </div>
    </form>
  );
}

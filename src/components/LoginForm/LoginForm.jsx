import "./LoginForm.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const isLoginpage = location.pathname === "/Login";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      isLoginpage ? "Logging in with:" : "Signing up with:",
      formData
    );
    // Add API call or auth logic here

    if (!isLoginpage) {
      navigate("/editprofile");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-form__title">
        {isLoginpage ? "Welcome Back!" : "Create your account"}
      </h2>

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

      <button type="submit" className="login-form__button">
        {isLoginpage ? "Log In" : "Sign Up"}
      </button>
      <div className="login-form__signup">
        <p>
          {isLoginpage ? "Don't have an account?" : "Already have an account?"}
        </p>
        <Link
          to={isLoginpage ? "/Signup" : "/Login"}
          className="login-form__link"
        >
          {isLoginpage ? "Sign up" : "Login"}
        </Link>
      </div>
    </form>
  );
}

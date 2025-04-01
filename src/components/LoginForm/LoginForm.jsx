import "./LoginForm.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const isLoginpage = location.pathname === "/Login";

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
    console.log("Logging in with:", formData);
    // Add API call or auth logic here
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {isLoginpage ? (
        <h2 className="login-form__title">Welcome Back!</h2>
      ) : (
        <h2 className="login-form__title">Create your account</h2>
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

      {isLoginpage ? (
        <button type="submit" className="login-form__button">
          Log In
        </button>
      ) : (
        <button type="submit" className="login-form__button">
          Sign Up
        </button>
      )}
      {isLoginpage ? (
        <div className="login-form__signup">
          <p>Don't have an account?</p>
          <Link to="/Signup" className="login-form__link">
            Sign up
          </Link>
        </div>
      ) : (
        <div className="login-form__signup">
          <p>Already have an account?</p>
          <Link to="/Login" className="login-form__link">
            Login
          </Link>
        </div>
      )}
    </form>
  );
}

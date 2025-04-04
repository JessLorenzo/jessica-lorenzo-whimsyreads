import "./LoginForm.scss";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button.jsx";

export default function LoginForm({
  formData,
  setFormData,
  onSubmit,
  isSignup,
}) {
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <h2 className="login-form__title">
        {isSignup ? "Create your account" : "Welcome Back!"}
      </h2>

      {isSignup && (
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
        <Button type="submit">{isSignup ? "Sign Up" : "Log In"}</Button>
      </div>

      <div className="login-form__signup">
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
        </p>
        <Link to={isSignup ? "/login" : "/signup"} className="login-form__link">
          {isSignup ? "Login" : "Sign up"}
        </Link>
      </div>
    </form>
  );
}

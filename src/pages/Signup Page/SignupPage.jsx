import "./SignupPage.scss";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

export default function SignupPage() {
  console.log("signup page");
  return (
    <div className="login-page">
      <Navbar />
      <LoginForm />
    </div>
  );
}

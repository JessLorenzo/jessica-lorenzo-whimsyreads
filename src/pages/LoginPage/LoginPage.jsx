import "./LoginPage.scss";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

export default function LoginPage() {
  console.log("loginpage");
  return (
    <div className="login-page">
      <Navbar />
      <LoginForm />
    </div>
  );
}

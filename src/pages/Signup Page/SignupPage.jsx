import "./SignupPage.scss";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function SignupPage() {
  console.log("signup page");
  return (
    <div className="signup-page">
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
}

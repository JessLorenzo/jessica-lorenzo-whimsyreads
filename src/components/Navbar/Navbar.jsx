import { Link } from "react-router-dom";
import "./Navbar.scss";
import BookIcon from "../../assets/icons/magicbook.png";
import Button from "../../components/Button/Button.jsx";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav__logo">
        <img src={BookIcon} alt="" className="nav__icon" />
        <span className="nav__title">Whimsy Reads</span>
      </Link>

      <div className="nav__buttons">
        <Button onClick={() => navigate("/")}>JOIN NOW</Button>
        <Button onClick={() => navigate("/")}>LOGIN</Button>
      </div>
    </nav>
  );
}

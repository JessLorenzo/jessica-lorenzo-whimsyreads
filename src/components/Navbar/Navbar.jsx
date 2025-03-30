import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import BookIcon from "../../assets/icons/magicbook.png";
import Button from "../../components/Button/Button.jsx";

export default function Navbar() {
  const navigate = useNavigate();
  const isHomepage = location.pathname === "/";
  return (
    <nav className="nav">
      <Link to="/" className="nav__logo">
        <img src={BookIcon} alt="" className="nav__icon" />
        <span className="nav__title">Whimsy Reads</span>
      </Link>
      {isHomepage ? (
        <div className="nav__buttons">
          <Button onClick={() => navigate("/")}>JOIN NOW</Button>
          <Button onClick={() => navigate("/Login")}>LOGIN</Button>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}

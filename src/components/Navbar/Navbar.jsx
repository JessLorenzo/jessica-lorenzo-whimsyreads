import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.scss";
import BookIcon from "../../assets/icons/magicbook.png";
import Button from "../../components/Button/Button.jsx";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomepage = location.pathname === "/";
  const isNeutralRoute = ["/", "/login", "/signup"].includes(
    location.pathname.toLowerCase()
  );

  return (
    <nav className="nav">
      <Link to="/" className="nav__logo">
        <img src={BookIcon} alt="" className="nav__icon" />
        <h1
          className={`nav__title ${
            !isNeutralRoute ? "nav__title--profile" : ""
          }`}
        >
          Whimsy Reads
        </h1>
      </Link>
      {isHomepage ? (
        <div className="nav__buttons">
          <Button onClick={() => navigate("/signup")}>JOIN NOW</Button>
          <Button onClick={() => navigate("/login")}>LOGIN</Button>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}

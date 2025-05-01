import "./Header.css";
import { Link } from "react-router-dom";

function Header({ handleRegisterOpen, handleLoginOpen, handleHeaderNavigate }) {
  return (
    <header className="header">
      <h1 onClick={handleHeaderNavigate} className="header__title">
        ASTRONOMY ON DEMAND
      </h1>
      <div className="header__content">
        <p className="header__about">
          <Link className="header__about-link" to={"/about"}>
            About this site
          </Link>
        </p>
      </div>
    </header>
  );
}

export default Header;

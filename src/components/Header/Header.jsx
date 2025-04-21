import "./Header.css";

function Header({ handleRegisterOpen, handleLoginOpen, handleHeaderNavigate }) {
  return (
    <header className="header">
      <h1 onClick={handleHeaderNavigate} className="header__title">
        ASTRONOMY ON DEMAND
      </h1>
      <ul className="header__content">
        <li onClick={handleRegisterOpen} className="header__sign-up">
          Sign up
        </li>
        <li onClick={handleLoginOpen} className="header__sign-in">
          Sign in
        </li>
        <li className="header__about">About this site</li>
      </ul>
    </header>
  );
}

export default Header;

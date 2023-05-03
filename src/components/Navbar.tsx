import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./Button";
import "./css/Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {};
  const showButton = (): void => {
    if (window.innerWidth <= 960) setButton(false);
    if (window.innerWidth > 960) setButton(true);
  };

  window.addEventListener("resize", showButton);

  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL
          </Link>
        </div>
        <div className="menu-icon">
          <i
            className={click ? "fas fa-times" : "fas fa-bars"}
            onClick={handleClick}
          ></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              首頁
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              服務
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              產品
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              註冊
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">註冊</Button>}
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Menu = () => (
  <>
    <p>
      <Link id="home" to="/">
        Home
      </Link>
    </p>
    <p>
      <a href="#wgpt3">What is GPT3</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
    <p>
      <Link id="home" to="store">
        Store
      </Link>
    </p>
    <p>
      <Link to="/my-cart/id">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-cart-check-fill"
          viewBox="0 0 16 16"
        >
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
        </svg>
      </Link>
    </p>
  </>
);

const Navbar = ({ user }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar fixed-top gradient__bg">
      <div className="gpt3__navbar-links">
        {/* logo */}
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <Link to="profile">
          {user ? <p>Welcome {user.name}</p> : <p>Sing In</p>}
        </Link>

        <Link to="login">
          <button type="submit">
            {user ? (
              <Link to="profile">
                <p>Profile</p>
              </Link>
            ) : (
              "Sign In"
            )}
          </button>
        </Link>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <Link to="login">
                  <button type="submit">Sign up</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

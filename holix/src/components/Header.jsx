import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const overlay = document.querySelector("[data-overlay]");
    const header = document.querySelector("[data-header]");

    const toggleNavbar = () => {
      navbar?.classList.toggle("active");
      overlay?.classList.toggle("active");
    };

    const headerActive = () => {
      if (window.scrollY > 100) header?.classList.add("active");
      else header?.classList.remove("active");
    };

    navTogglers.forEach((btn) =>
      btn.addEventListener("click", toggleNavbar)
    );

    window.addEventListener("scroll", headerActive);

    return () => {
      navTogglers.forEach((btn) =>
        btn.removeEventListener("click", toggleNavbar)
      );
      window.removeEventListener("scroll", headerActive);
    };
  }, []);

  // ✅ FIXED SCROLL FUNCTION
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header" data-header>
      <div className="container">

        {/* LOGO */}
        <Link to="/" className="logo">
          EagleCore
        </Link>

        <nav className="navbar" data-navbar>
          <div className="wrapper">
            <Link to="/" className="logo">
              EagleCore
            </Link>

            <button
              className="nav-close-btn"
              aria-label="close menu"
              data-nav-toggler
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">

            {/* HOME — FIXED SCROLL TO HERO */}
            <li>
              <button
                className="navbar-link"
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
            </li>

            {/* ABOUT */}
            <li>
              <button
                className="navbar-link"
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
            </li>

            {/* SERVICES DROPDOWN (UNCHANGED STRUCTURE) */}
            <li className="has-dropdown">
              <span className="navbar-link dropdown-toggle">
                Services
                <ion-icon
                  name="chevron-down-outline"
                  className="dropdown-icon"
                ></ion-icon>
              </span>

              <ul className="dropdown">
                <li>
                  <Link to="/kenyan-services" className="navbar-link">
                    Kenyan services
                  </Link>
                </li>

                <li>
                  <Link to="/international-services" className="navbar-link">
                    Foreign services
                  </Link>
                </li>
              </ul>
            </li>

            {/* FEATURES */}
            <li>
              <button
                className="navbar-link"
                onClick={() => scrollToSection("features")}
              >
                Features
              </button>
            </li>

            {/* CONTACT */}
            <li>
              <button
                className="navbar-link"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>

        {/* OPEN BUTTON */}
        <button
          className="nav-open-btn"
          aria-label="open menu"
          data-nav-toggler
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        {/* KEEP EXACTLY AS YOU HAD IT */}
        <a href="#" className="btn-outline">
          Lets talk
        </a>

        {/* OVERLAY */}
        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
};

export default Header;
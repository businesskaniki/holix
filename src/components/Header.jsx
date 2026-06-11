import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const overlay = document.querySelector("[data-overlay]");
    const header = document.querySelector("[data-header]");

    const toggleNavbar = () => {
      navbar?.classList.toggle("active");
      overlay?.classList.toggle("active");
      setServicesOpen(false);
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

  useEffect(() => {
    if (!servicesOpen) return;

    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [servicesOpen]);

  const closeNavbar = () => {
    const navbar = document.querySelector("[data-navbar]");
    const overlay = document.querySelector("[data-overlay]");

    if (navbar?.classList.contains("active")) {
      navbar.classList.remove("active");
      overlay?.classList.remove("active");
    }

    setServicesOpen(false);
  };

  const toggleServicesDropdown = () => {
    setServicesOpen((prev) => !prev);
  };

  // ✅ FIXED SCROLL FUNCTION
  const scrollToSection = (id) => {
    closeNavbar();

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
            <li className="has-dropdown" ref={dropdownRef}>
              <button
                type="button"
                className="navbar-link dropdown-toggle"
                aria-expanded={servicesOpen}
                onClick={toggleServicesDropdown}
              >
                <span>Services</span>
                <ion-icon
                  name="chevron-down-outline"
                  className="dropdown-icon"
                ></ion-icon>
              </button>

              <ul className={`dropdown${servicesOpen ? " active" : ""}`}>
                <li>
                  <Link
                    to="/kenyan-services"
                    className="navbar-link"
                    onClick={closeNavbar}
                  >
                    Kenyan services
                  </Link>
                </li>

                <li>
                  <Link
                    to="/international-services"
                    className="navbar-link"
                    onClick={closeNavbar}
                  >
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
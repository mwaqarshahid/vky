import React, { useState } from "react";
import avatar from "../assets/images/waqar-avatar.jpg";
import navItems from "../data/navItems.json";
import { LINKS, PERSONAL } from "../shared/contants";

const Header = ({ openTheme, setOpenTheme }) => {
  // To control nav item so that it appears as selected (use path to match section ids)
  const [navItem, setNavItem] = useState("home");
  // To control toggle nav button which appears for tablets and mobile devices
  const [toggleNavBtn, setToggleNavBtn] = useState(false);
  // To scroll to specific section (account for fixed header so content isn't cut off)
  const scrollToSection = (sectionName) => {
    if (sectionName === "home") {
      // Slight negative offset so the top is fully visible. Matches hero__title margin-top: 0.33em
      // (0.33em in px from the hero title’s computed font-size); fallback if hero not in DOM.
      const heroTitle = document.querySelector(".hero__title");
      const emPx = heroTitle
        ? parseFloat(getComputedStyle(heroTitle).fontSize) * 0.33
        : 20;
      window.scrollTo({ top: -emPx, behavior: "smooth" });
      return;
    }
    const id = `#${sectionName}`;
    const section = document.querySelector(id);
    if (!section) return;
    const header = document.querySelector(".header");
    const headerHeight = header ? header.offsetHeight : 80;
    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY;
    const top = sectionTop - headerHeight;
    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="header" role="banner" id="home">
        <div className="header__inner container">
          <a className="header__brand" href={LINKS.HOME} rel="home">
            <img
              className="header__avatar"
              src={avatar}
              width="48"
              height="48"
              alt="Waqar Shahid display pic"
            />
            <span className="header__name" data-testid="myname">
              <span>{PERSONAL.NAME}</span>
              <span className="header__verification" aria-hidden="true">
                <svg
                  className="icon icon--verified"
                  version="1.1"
                  viewBox="0,0,24,24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                </svg>
              </span>
            </span>
          </a>

          <div className="header__nav">
            <nav
              className={`nav ${toggleNavBtn ? "nav--open" : ""}`}
              role="navigation"
              tabIndex="-1"
            >
              <button
                className="iconbtn nav__togglebtn"
                aria-expanded={toggleNavBtn}
                aria-controls="nav-menu"
                aria-label="toggle menu"
                onClick={() => setToggleNavBtn(!toggleNavBtn)}
              >
                <span className="menuicon">
                  <span className="menuicon__bar"></span>
                  <span className="menuicon__bar"></span>
                  <span className="menuicon__bar"></span>
                  <span className="menuicon__bar"></span>
                </span>
              </button>
              <div className="nav__content">
                <ul
                  className={`nav__menu ${
                    toggleNavBtn ? "nav__menu--visible" : ""
                  }`}
                  style={{
                    backgroundColor: toggleNavBtn && "black",
                  }}
                  id="nav-menu"
                >
                  {navItems.map((item) => {
                    return (
                      <li
                        className={`nav__item ${
                          item.path === navItem ? "nav__item--active" : ""
                        }`}
                        style={{ cursor: "pointer" }}
                        key={item.name}
                        onClick={() => {
                          setNavItem(item.path);
                          setToggleNavBtn(false);
                          scrollToSection(item.path);
                        }}
                      >
                        {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <a className="nav__link" aria-current="page">
                          <span className="nav__num" aria-hidden="true">
                            {item.id}
                          </span>
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
            <button
              className="iconbtn header__themebtn"
              aria-expanded="false"
              aria-controls="theme-menu"
              onClick={() => setOpenTheme(!openTheme)}
            >
              <span className="sr-only">toggle theme panel</span>
              <svg
                className="icon icon--theme"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
              >
                <path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

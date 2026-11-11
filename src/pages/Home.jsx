import React from "react";
import { LINKS } from "../shared/contants";

const Home = () => {
  return (
    <div className="hero fade-in">
      <div className="hero__inner">
        <h1 className="hero__title">I make websites.</h1>
        <p className="hero__pretitle">
          <a
            href="#about"
            onClick={(event) => {
              event.preventDefault();
              const section = document.getElementById("about");
              if (!section) return;
              const header = document.querySelector(".header");
              const headerHeight = header ? header.offsetHeight : 80;
              const top =
                section.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;
              window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
            }}
          >
            Hello, my name is Waqar
          </a>
        </p>
        <div className="hero__content">
          <p>
            I am a front-end developer at{" "}
            <a href={LINKS.NINJA} className="hero__link">
              Ninja
            </a>
            , and a
            React trainer at{" "}
            <a
              href={LINKS.PSEUDOSQUARE}
              className="hero__link hero__link--mastodon"
            >
              Pseudosquare
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

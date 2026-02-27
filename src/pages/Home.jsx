import React from "react";
import { LINKS } from "../shared/contants";

const Home = () => {
  return (
    <div className="hero fade-in">
      <div className="hero__inner">
        <h1 className="hero__title">I make websites.</h1>
        <p className="hero__pretitle">
          <a href="/about/">Hello, my name is Waqar</a>
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

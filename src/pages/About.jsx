import React from "react";
import avatar from "../assets/images/waqar-shahid-800.jpg";
import { socialsList } from "../data/socials";
import { LINKS } from "../shared/contants";

const About = () => {

  const yearsOfExperience = Math.floor(
    (new Date() - new Date("2017-11")) / (1000 * 60 * 60 * 24 * 365)
  );

  return (
    <div className="page page--about">
      <header className="page__header">
        <h1 className="page__title">Hey there.</h1>
      </header>
      <div className="page__content page__content--fullwidth">
        <div className="about">
          <div className="about__header">
            <div className="about__photo">
              <img
                className="responsive-image"
                src={avatar}
                alt="Waqar Shahid main pic"
              />
            </div>
            <div className="about__intro lead">
              <p>
                I'm Waqar Shahid, a website and mobile application developer
                based in Lahore, Pakistan.
              </p>
              <p>
                I've been building stuff on the web for the last {yearsOfExperience} years,
                working with clients across various countries and industries.
              </p>
              <p>
                My focus is on creating engaging, accessible and performant
                interfaces for humans.
              </p>
            </div>
          </div>
          <div className="about__content markdown">
            <h2>Work</h2>
            <p>
              I work at{" "}
              <a href={LINKS.NINJA} target="_blank" rel="noopener noreferrer">
                Ninja
              </a>
              , a rapid delivery service providing essential items like
              groceries, bakery goods, coffee and beauty products in less than
              30 minutes.
            </p>

            <h2>Writing</h2>
            <p>
              I like writing about benefits of remote work and eager to help
              people over{" "}
              <a href={LINKS.POSTS} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              .
            </p>

            <h2>Offline</h2>
            <p>
              When I am not writing code, I play{" "}
              <a href={LINKS.DOTA} target="_blank" rel="noopener noreferrer">
                DOTA-2
              </a>{" "}
              and Badminton. I am an enthusiastic{" "}
              <a
                href={LINKS.PHOTOGRAPHY}
                target="_blank"
                rel="noopener noreferrer"
              >
                photographer
              </a>
              . I also know the lyrics to most{" "}
              <a href={LINKS.MUSIC} target="_blank" rel="noopener noreferrer">
                Akcent
              </a>{" "}
              songs by heart.
            </p>

            <h2>Online</h2>
            <ul className="about__social">
              {socialsList.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

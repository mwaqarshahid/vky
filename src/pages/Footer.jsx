import React from "react";
import { LINKS } from "../shared/contants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer h-card" role="contentinfo">
      <div className="footer__inner container">
        <p className="footer__item">
          <strong>&copy; 2016&ndash;{currentYear}</strong>
          <br />
          <a className="p-name u-url" rel="me" href="/">
            Waqar Shahid
          </a>
        </p>
        <p className="footer__item">
          <strong>Social</strong>
          <br />
          <a
            href={LINKS.LINKEDIN}
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          /{" "}
          <a
            href={LINKS.GITHUB}
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

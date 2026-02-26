import React from "react";
import { LINKS, PERSONAL } from "../shared/contants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer h-card" role="contentinfo">
      <div className="footer__inner container">
        <p className="footer__item">
          <strong>&copy; 2016&ndash;{currentYear}</strong>
          <br />
          <a className="p-name u-url" rel="me" href="/">
            {PERSONAL.NAME}
          </a>
        </p>
        <p className="footer__item footer__item--right">
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

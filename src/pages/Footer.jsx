import React from "react";
import { PERSONAL, SOCIAL_ICON_SIZE, SOCIAL_ICONS } from "../shared/contants";
import { socialsList } from "../data/socials";

const renderSocialIcon = (name) => {
  const icon = SOCIAL_ICONS[name];
  if (!icon) return name;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={SOCIAL_ICON_SIZE}
      height={SOCIAL_ICON_SIZE}
      viewBox={icon.viewBox}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer h-card" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__brand">
          <a className="footer__name p-name u-url" rel="me" href="/">
            {PERSONAL.NAME}
          </a>
          <p className="footer__copy">
            &copy; 2016&ndash;{currentYear}
          </p>
        </div>
        <div className="footer__social">
          <ul className="footer__social-list">
            {socialsList.map((social) => (
              <li key={social.name}>
                <a
                  href={social.link}
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={social.name}
                >
                  {renderSocialIcon(social.name)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

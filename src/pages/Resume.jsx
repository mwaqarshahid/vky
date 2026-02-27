import React from "react";
import { LINKS, RESUME_DOWNLOAD_FILENAME } from "../shared/contants";

const Resume = () => {
  return (
    <div className="page page--resume">
      <header className="page__header">
        <h2 className="page__title">Resume</h2>
      </header>
      <div className="resume-section">
        <div className="resume-section__preview-wrap">
          <div className="resume-section__preview">
            <iframe
              title="Resume preview"
              src={`${LINKS.RESUME_PDF}#view=FitH&toolbar=0&navpanes=0`}
              className="resume-section__pdf"
            />
          </div>
        </div>
        <a
          href={LINKS.RESUME_PDF}
          download={RESUME_DOWNLOAD_FILENAME}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary resume-section__btn"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;

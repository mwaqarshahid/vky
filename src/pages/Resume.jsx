import React from "react";

const Resume = () => {
  return (
    <div>
      <a
        href="/waqar-shahid-resume.pdf"
        download="Waqar-Shahid-Resume-Frontend-Developer"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn btn--primary u-mt4" name="resume downloader">
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default Resume;

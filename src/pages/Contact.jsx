import React, { useState } from "react";
import { CONTACT_FORM_ACTION, CONTACT_FORM_ICONS } from "../shared/contants";

const iconSize = 22;

const FormIcon = ({ name }) => {
  const icon = CONTACT_FORM_ICONS[name];
  if (!icon) return null;
  return (
    <svg
      className="contact-form__icon"
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox={icon.viewBox}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
};

const Contact = () => {
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch(CONTACT_FORM_ACTION, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const data = await res.json();

      if (data.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="page page--contact">
      <div className="page__content page__content--fullwidth">
        <header className="page__header">
          <h2 className="page__title">Contact me</h2>
        </header>
        <div className="contact-form-card">
          <h2 className="contact-form-card__title">
            Let's Convert Your Idea into Reality
          </h2>

          <form
            className="contact-form"
            action={CONTACT_FORM_ACTION}
            method="POST"
            onSubmit={handleSubmit}
            noValidate
          >
            <input type="hidden" name="_subject" value="Portfolio contact form submission" />
            <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

            <div className="contact-form__row contact-form__row--split">
              <div className="contact-form__field">
                <span className="contact-form__field-icon">
                  <FormIcon name="person" />
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="contact-form__input"
                  required
                  disabled={status === "sending"}
                />
                <span className="contact-form__required" aria-hidden="true">*</span>
              </div>
              <div className="contact-form__field">
                <span className="contact-form__field-icon">
                  <FormIcon name="phone" />
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="contact-form__input"
                  disabled={status === "sending"}
                />
              </div>
            </div>

            <div className="contact-form__row">
              <div className="contact-form__field">
                <span className="contact-form__field-icon">
                  <FormIcon name="email" />
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="contact-form__input"
                  required
                  disabled={status === "sending"}
                />
                <span className="contact-form__required" aria-hidden="true">*</span>
              </div>
            </div>

            <div className="contact-form__row">
              <div className="contact-form__field">
                <span className="contact-form__field-icon contact-form__field-icon--top">
                  <FormIcon name="message" />
                </span>
                <textarea
                  name="message"
                  placeholder="Tell us about your project or idea"
                  className="contact-form__input contact-form__textarea"
                  rows={4}
                  required
                  disabled={status === "sending"}
                />
                <span className="contact-form__required contact-form__required--top" aria-hidden="true">*</span>
              </div>
            </div>

            {status === "success" && (
              <p className="contact-form__feedback contact-form__feedback--success">
                Thanks! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="contact-form__feedback contact-form__feedback--error">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              className="btn btn--primary contact-form__submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

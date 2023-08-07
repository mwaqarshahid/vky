import React from "react";
import themes from "../data/themes.json";

const ThemePicker = ({
  openTheme,
  setOpenTheme,
  themeColor,
  setThemeColor,
}) => {
  return (
    <div
      className={`themepicker ${
        openTheme ? "is-open" : ""
      } data-nosnippet ${!openTheme ? "hidden" : ""}`}
    >
      <h3 className="themepicker__title">Select Theme</h3>
      <ul className="themepicker__list" id="theme-menu">
        {themes.map((theme) => {
          return (
            <li
              className={`themepicker__item ${
                themeColor === theme.id && "is-active"
              }`}
              key={theme.id}
            >
              <button
                className="themepicker__btn"
                aria-label={`select color theme ${theme.name}`}
                data-theme={theme.id}
                style={{
                  "--color-bg": theme.colors.background,
                }}
                onClick={() => setThemeColor(theme.id)}
              >
                <span
                  className="themepicker__name"
                  style={{
                    "--color-text": theme.colors.text,
                  }}
                >
                  {theme.name}
                </span>
                <span className="themepicker__palette">
                  <span
                    className="themepicker__hue themepicker__hue--primary"
                    style={{
                      backgroundColor: theme.colors.primary,
                    }}
                  ></span>
                  <span
                    className="themepicker__hue themepicker__hue--secondary"
                    style={{
                      backgroundColor: theme.colors.secondary,
                    }}
                  ></span>
                  <span
                    className="themepicker__hue themepicker__hue--border"
                    style={{
                      backgroundColor: theme.colors.border,
                    }}
                  ></span>
                  <span
                    className="themepicker__hue themepicker__hue--textoffset"
                    style={{
                      backgroundColor: theme.colors.textOffset,
                    }}
                  ></span>
                  <span
                    className="themepicker__hue themepicker__hue--text"
                    style={{
                      backgroundColor: theme.colors.text,
                    }}
                  ></span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className="iconbtn themepicker__close"
        onClick={() => setOpenTheme(false)}
      >
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
};

export default ThemePicker;
